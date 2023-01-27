import Head from "next/head";
import Fade from "react-reveal/Fade";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { FormContact } from "../components/FormContact";
import { Map } from "../components/Map";
import { Title } from "../components/Title";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Contato
            </Title>
          </Fade>
        </Container>
      </Banner>

      <FormContact />

      <Container className="my-16">
        <Map />
      </Container>
    </>
  );
}
