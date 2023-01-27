import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useBackdrop } from "../hooks/useBackdrop";
import { maskPhone } from "../utils/mask";
import { Button } from "./Button";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

export const FormContact = () => {
  const categoriesOptions = [
    "Dúvida",
    "Elogio",
    "Reclamação",
    "Sugestão",
    "Outros",
  ];

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

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
      category: categoryValue,
      message: messageValue.trim(),
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
    if (!body.category) {
      handleClickSnackbarVariant("Selecione um assunto, por favor", "warning");
      document.getElementById("form-category")?.focus();
      return;
    }
    if (body.message.length < 10) {
      handleClickSnackbarVariant(
        "Sua mensagem deve conter ao menos 10 caracteres",
        "warning"
      );
      document.getElementById("form-message")?.focus();
      return;
    }

    handleOpenBackdrop();

    try {
      const response = await fetch("/api/email/contact/host", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.status === 200 && data.accepted) {
        const bodyTemporary = JSON.stringify(body);

        handleClickSnackbarVariant("Mensagem enviada com sucesso!", "success");
        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
        setCategoryValue("");
        setMessageValue("");
        handleCloseBackdrop();

        await fetch("/api/email/contact/client", {
          method: "POST",
          body: bodyTemporary,
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
          className="mt-8 lg:mt-16 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
          }}
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
          <div className="relative z-10">
            <Select
              label="Categoria"
              options={categoriesOptions}
              value={categoryValue}
              setValue={setCategoryValue}
              id="form-category"
            />
          </div>
          <TextArea
            label="Mensagem"
            rows={10}
            value={messageValue}
            setValue={setMessageValue}
            id="form-message"
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
