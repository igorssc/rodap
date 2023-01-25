import Fade from "react-reveal/Fade";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { FormContact } from "../components/FormContact";
import { Title } from "../components/Title";

export default function Contato() {
  return (
    <>
      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-4xl text-center">Contato</Title>
          </Fade>
        </Container>
      </Banner>

      <FormContact />
    </>
  );
}
