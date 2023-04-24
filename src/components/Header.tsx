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
              O grupo rodap tem orgulho de colocar você, cliente, no centro do
              nosso negócio. Dessa forma, garantimos a melhor experiência em
              transporte coletivo ao lhe oferecer uma viagem segura e
              confortável, realizada por uma equipe altamente treinada e em
              veículos modernos e equipados com tecnologia de ponta. E tudo
              isso, claro, alinhado a um atendimento de excelência e que atenda
              as suas necessidades de transporte. <br />
              <br />
              <span className="font-bold">
                Experimente a diferença e faça suas viagens com a rodap!
              </span>
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
