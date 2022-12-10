import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Title } from "../components/Title";

export default function WorkWithUs() {
  return (
    <>
      <Banner>
        <Container>
          <Title className="text-2xl text-center">Trabalhe conosco</Title>
        </Container>
      </Banner>

      <Container className="my-14 flex flex-col gap-4">
        <Input label="Nome completo" />
        <Input label="E-mail" type="email" />
        <Input label="Telefone" type="phone" />
        <Select />
        <Select />
        <Input
          label="Currículo"
          type="file"
          accept="application/pdf"
          legend="Somente arquivos .PDF com tamanho máximo de 2MB"
        />

        <Button className="w-96 mx-auto mt-8">Enviar</Button>
      </Container>
    </>
  );
}
