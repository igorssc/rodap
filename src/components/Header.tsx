import Image from "next/image";
import Fade from "react-reveal/Fade";
import featuredImg from "../assets/featured.webp";
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
              Transporte com qualidade.
              <br />
              Isso é respeito por você!
            </Title>
            <p className="lg:uppercase leading-7 text-justify lg:text-left">
              O GRUPO RODAP TEM ORGULHO DE COLOCAR VOCÊ, CLIENTE, NO CENTRO DO
              NOSSO NEGÓCIO. DESSA FORMA, GARANTIMOS A MELHOR EXPERIÊNCIA EM
              TRANSPORTE COLETIVO AO LHE OFERECER UMA VIAGEM SEGURA E
              CONFORTÁVEL, REALIZADA POR UMA EQUIPE ALTAMENTE TREINADA E EM
              VEÍCULOS MODERNOS E EQUIPADOS COM TECNOLOGIA DE PONTA. E TUDO
              ISSO, CLARO, ALINHADO A UM ATENDIMENTO DE EXCELÊNCIA E QUE ATENDA
              AS SUAS NECESSIDADES DE TRANSPORTE. <br />
              EXPERIMENTE A DIFERENÇA E FAÇA SUAS VIAGENS COM A RODAP!
            </p>
            <span className="text-primary font-bold">
              {/* <Link href="/horarios">Confira o horário do seu ônibus aqui</Link> */}
            </span>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src={featuredImg}
              alt="Imagem de destaque"
              priority
              className="rounded min-h-[288px] min-w-full object-cover"
            />
          </div>
        </Fade>
      </Container>
    </>
  );
};
