import Head from "next/head";
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
            <Title className="!text-4xl text-center">Trabalhe conosco</Title>
          </Fade>
        </Container>
      </Banner>

      <FormWorkWithUs />
    </>
  );
}
