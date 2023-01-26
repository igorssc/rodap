import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useBackdrop } from "../hooks/useBackdrop";
import { maskPhone } from "../utils/mask";
import { Button } from "./Button";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";

export const FormWorkWithUs = () => {
  const unitsOptions = [
    "Unidade São Benedito",
    "Unidade Vila Olga",
    "Unidade Justinópolis",
    "Unidade Venda Nova",
  ];
  const categoriesOptions = [
    "Motorista",
    "Cobrador",
    "Administrativo",
    "Manutenção",
    "Serviços Gerais",
    "Outros",
  ];

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [file, setFile] = useState<File>();

  const { handleOpen: handleOpenBackdrop, handleClose: handleCloseBackdrop } =
    useBackdrop();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickSnackbarVariant = (
    message: string,
    variant: "success" | "error" | "warning" | "info" | "default"
  ) => enqueueSnackbar(message, { variant });

  const sendEmail = async () => {
    const body = {
      name: nameValue.trim(),
      email: emailValue.trim().toLowerCase(),
      phone: phoneValue.trim(),
      unit: unitValue,
      category: categoryValue,
      file,
    };

    if (body.name.split(" ").length < 2) {
      handleClickSnackbarVariant(
        "Insira seu nome completo, por favor",
        "warning"
      );
      document.getElementById("form-name")?.focus();
      return;
    }
    if (
      !body.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      handleClickSnackbarVariant(
        "Insira um e-mail válido, por favor",
        "warning"
      );
      document.getElementById("form-email")?.focus();
      return;
    }
    if (body.phone.length < 14) {
      handleClickSnackbarVariant(
        "Insira seu telefone completo, com DDD, por favor",
        "warning"
      );
      document.getElementById("form-phone")?.focus();
      return;
    }
    if (!body.unit) {
      handleClickSnackbarVariant("Selecione uma unidade, por favor", "warning");
      document.getElementById("form-unit")?.focus();
      return;
    }
    if (!body.category) {
      handleClickSnackbarVariant(
        "Selecione uma categoria, por favor",
        "warning"
      );
      document.getElementById("form-category")?.focus();
      return;
    }
    if (!body.file) {
      handleClickSnackbarVariant(
        "Insira um arquivo com seu currículo, por favor",
        "warning"
      );
      document.getElementById("form-file")?.focus();
      return;
    }

    handleOpenBackdrop();

    try {
      const formData = new FormData();
      formData.append("name", body.name);
      formData.append("email", body.email);
      formData.append("phone", body.phone);
      formData.append("unit", body.unit);
      formData.append("category", body.category);
      formData.append("file", body.file ?? "");

      const response = await fetch("/api/email/work-with-us/host", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.status === 200 && data.accepted) {
        handleClickSnackbarVariant("Mensagem enviada com sucesso!", "success");
        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
        setCategoryValue("");
        setUnitValue("");
        setFile(undefined);
        handleCloseBackdrop();

        await fetch("/api/email/work-with-us/client", {
          method: "POST",
          body: formData,
        });
      } else {
        throw new Error();
      }
    } catch {
      handleClickSnackbarVariant("Erro ao enviar a mensagem", "error");
      handleCloseBackdrop();
    } finally {
    }
  };

  useEffect(() => {
    setPhoneValue((prev) => maskPhone(prev));
  }, [phoneValue]);

  return (
    <>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
          }}
          className="my-16 flex flex-col gap-4"
        >
          <Input
            label="Nome completo"
            value={nameValue}
            setValue={setNameValue}
            id="form-name"
          />
          <Input
            label="E-mail"
            type="email"
            value={emailValue}
            setValue={setEmailValue}
            id="form-email"
          />
          <Input
            label="Telefone"
            type="phone"
            value={phoneValue}
            setValue={setPhoneValue}
            id="form-phone"
          />
          <div className="relative z-20">
            <Select
              label="Unidade"
              options={unitsOptions}
              value={unitValue}
              setValue={setUnitValue}
              id="form-unit"
            />
          </div>
          <div className="relative z-10">
            <Select
              label="Categoria"
              options={categoriesOptions}
              value={categoryValue}
              setValue={setCategoryValue}
              id="form-category"
            />
          </div>
          <Input
            label="Currículo"
            type="file"
            accept="application/pdf"
            legend="Somente arquivos .PDF com tamanho máximo de 2MB"
            value={file}
            setValue={setFile}
            id="form-file"
          />

          <Zoom>
            <div className="w-full">
              <Button className="w-96 mx-auto mt-8 block">Enviar</Button>
            </div>
          </Zoom>
        </form>
      </Container>
    </>
  );
};
