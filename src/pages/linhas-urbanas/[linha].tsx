import Link from "next/link";
import Fade from "react-reveal/Fade";
import FeaturedImg from "../../assets/schedules/ponto-de-onibus.svg";
import { Banner } from "../../components/Banner";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export default function Linha() {
  return (
    <>
      <Fade appear>
        <Banner scheme="secondary" className="!p-0">
          <Container className="flex max-sm:flex-col max-sm:text-center gap-4 justify-between w-full max-lg:mt-8">
            <div className="flex justify-center sm:items-start flex-col gap-8 lg:gap-16">
              <Title
                className="!text-2xl sm:!text-3xl md:!text-4xl lg:5xl"
                scheme="secondary"
              >
                Linhas urbanas
                <br />
                Santa Luzia
              </Title>

              <p className="uppercase">
                confira o horário do seu ônibus diretamente em nossa plataforma
              </p>
            </div>
            <FeaturedImg className="block !w-full sm:!w-[640px] sm:h-[430px]" />
          </Container>
        </Banner>
      </Fade>

      <Container className=" my-8 lg:my-16 flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-center">
          {[
            {
              name: "1013-1",
              description: "Senai - Zero Hora - Belo Vale",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
            {
              name: "1013-1",
              description: "Senai - Zero Hora",
              href: "#",
            },
          ].map((v, i) => (
            <Fade key={i} cascade>
              <Link
                href={v.href}
                className="bg-primary py-8 flex flex-col gap-6 items-center justify-center hover:scale-[1.02] transition-all"
              >
                <Title asChild className="!text-3xl">
                  <h3>{v.name}</h3>
                </Title>
                <p className="text-white text-center h-12 flex items-center">
                  {v.description}
                </p>
              </Link>
            </Fade>
          ))}
        </div>
      </Container>
    </>
  );
}
