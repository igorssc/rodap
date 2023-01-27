import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import metropolitanasImg from "../assets/schedules/metropolitana.png";
import riberaoDasNevesImg from "../assets/schedules/ribeirao-das-neves.png";
import urbanasBHImg from "../assets/schedules/urbanas-bh.png";
import urbanasSantaLuziaImg from "../assets/schedules/urbanas-santa-luzia.png";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export default function Horarios() {
  return (
    <>
      <Head>
        <title>Rodap - Horários</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Quadro de Horários
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-8 lg:my-16 flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center justify-center overflow-hidden">
          {[
            {
              name: "Linhas Metropolitanas",
              img: metropolitanasImg,
              href: "http://www.consultas.der.mg.gov.br/grgx/sgtm/consulta_linha.xhtml",
              target: "_blank",
            },
            {
              name: "Linhas Ribeirão das Neves",
              img: riberaoDasNevesImg,
              href: "/linhas-urbanas/ribeirao-das-neves",
            },
            {
              name: "Linhas Urbanas BH",
              img: urbanasBHImg,
              href: "https://portalbhtrans.pbh.gov.br/quadrodehorario",
              target: "_blank",
            },
            {
              name: "Linhas Urbanas Santa Luzia",
              img: urbanasSantaLuziaImg,
              href: "/linhas-urbanas/santa-luzia",
            },
          ].map((v, i) => (
            <Fade cascade key={i}>
              <Link
                className="relative overflow-hidden hover:scale-[1.02] transition-all"
                href={v.href}
                {...(v.target && { target: v.target })}
              >
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Title className="!text-xl sm:!text-2xl md:!text-3xl w-full text-center px-4">
                    {v.name}
                  </Title>
                </div>
                <Image
                  src={v.img.src}
                  alt={v.name}
                  width={403}
                  height={203}
                  className="w-auto h-52 object-cover md:w-full md:h-auto"
                />
              </Link>
            </Fade>
          ))}
        </div>
      </Container>
    </>
  );
}
