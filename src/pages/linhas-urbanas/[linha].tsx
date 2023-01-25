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
          <Container className="flex justify-between w-full">
            <div className="flex justify-center items-start flex-col gap-16">
              <Title className="" scheme="secondary">
                Linhas urbanas
                <br />
                Santa Luzia
              </Title>

              <p className="uppercase">
                confira o horário do seu ônibus diretamente em nossa plataforma
              </p>
            </div>
            <FeaturedImg />
          </Container>
        </Banner>
      </Fade>

      <Container className="my-14 flex flex-col gap-4">
        <div className="grid grid-cols-6 gap-8 items-center justify-center">
          {[
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
                <p className="text-white">{v.description}</p>
              </Link>
            </Fade>
          ))}
        </div>
      </Container>
    </>
  );
}
