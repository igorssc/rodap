import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import featuredImg from "../assets/featured.png";
import { Container } from "./Container";
import { Title } from "./Title";

export const Header = () => {
  return (
    <>
      <Container className="grid md:grid-cols-2 gap-6 lg:gap-16 items-stretch pb-8 md:pb-14 xl:pb-16 pt-4 md:pt-8 xl:pt-0">
        <Fade appear cascade>
          <div className="flex flex-col gap-4 justify-around ">
            <Title
              scheme="secondary"
              className="!text-xl sm:!text-2xl lg:!text-3xl xl:!text-4xl text-center md:text-left leading-10"
            >
              Qualidade em transporte?
              <br />
              Tem aqui!
            </Title>
            <p className="lg:uppercase leading-7 text-justify lg:text-left">
              A Rodap é líder em transporte coletivo. Oferecemos viagens seguras
              e confortáveis, com tecnologia de ponta e equipe altamente
              treinada. Nossos horários flexíveis atendem às necessidades de
              nossos clientes. Experimente a diferença e escolha a Rodap!
            </p>
            <span className="text-primary font-bold">
              <Link href="/horarios">Confira o horário do seu ônibus aqui</Link>
            </span>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src={featuredImg}
              alt="Imagem de destaque"
              priority
              className="rounded"
            />
          </div>
        </Fade>
      </Container>
    </>
  );
};
