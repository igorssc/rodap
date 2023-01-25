import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Title } from "../components/Title";

export default function WorkWithUs() {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number>();
  const [unit, setUnit] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File>();

  return (
    <>
      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-4xl text-center">Trabalhe conosco</Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-16 flex flex-col gap-4">
        <Input label="Nome completo" value={name} setValue={setName} />
        <Input label="E-mail" type="email" value={email} setValue={setEmail} />
        <Input
          label="Telefone"
          type="phone"
          value={phone}
          setValue={setPhone}
        />
        <div className="relative z-20">
          <Select
            label="Unidade"
            options={unitsOptions}
            value={unit}
            setValue={setUnit}
          />
        </div>
        <div className="relative z-10">
          <Select
            label="Categoria"
            options={categoriesOptions}
            value={category}
            setValue={setCategory}
          />
        </div>
        <Input
          label="Currículo"
          type="file"
          accept="application/pdf"
          legend="Somente arquivos .PDF com tamanho máximo de 2MB"
          value={file}
          setValue={setFile}
        />

        <Zoom>
          <div className="w-full">
            <Button className="w-96 mx-auto mt-8 block">Enviar</Button>
          </div>
        </Zoom>
      </Container>
    </>
  );
}
