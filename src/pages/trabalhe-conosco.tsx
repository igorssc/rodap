import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { FormWorkWithUs } from "../components/FormWorkWithUs";
import { Title } from "../components/Title";

export default function WorkWithUs() {
  return (
    <>
      <Head>
        <title>Rodap - Trabalhe conosco</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Trabalhe conosco
            </Title>
          </Fade>
        </Container>
      </Banner>

      <FormWorkWithUs />

      <Container>
        <Title
          asChild
          scheme="tertiary"
          className="!text-lg sm:!text-xl mt-4 sm:mt-8 text-center"
        >
          <h2>SEJA NOSSO FORNECEDOR</h2>
        </Title>
        <div className="mt-4 mb-10 flex flex-col gap-4 text-justify">
          <div>
            <p>
              O Grupo Rodap deseja construir e manter uma boa relação com os
              fornecedores. O objetivo é criar parcerias duradouras, em que o
              profundo comprometimento seja a chave para alcançarmos juntos os
              nossos objetivos.
            </p>
          </div>
          <div>
            <p>
              Caso a sua empresa tenha interesse em oferecer produtos ou
              serviços ao nosso Grupo, entre em contato conosco pelo telefone{" "}
              <Link href="tel:+55 (31) 3517-7613">(31) 3517-7613</Link> ou
              e-mail{" "}
              <Link href="mailto:compras@rodap.com.br">
                compras@rodap.com.br
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
