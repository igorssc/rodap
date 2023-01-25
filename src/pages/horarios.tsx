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
      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-4xl text-center">Quadro de Horários</Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-16 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-16 items-center justify-center">
          {[
            {
              name: "Linhas Metropolitanas",
              img: metropolitanasImg,
              href: "http://www.consultas.der.mg.gov.br/grgx/sgtm/consulta_linha.xhtml",
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
              >
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Title className="!text-4xl w-full text-center whitespace-nowrap">
                    {v.name}
                  </Title>
                </div>
                <Image
                  src={v.img.src}
                  alt={v.name}
                  width={403}
                  height={203}
                  className="w-full h-auto"
                />
              </Link>
            </Fade>
          ))}
        </div>
      </Container>
    </>
  );
}
