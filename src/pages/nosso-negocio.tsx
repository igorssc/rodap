import Head from "next/head";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import LampImg from "../assets/lamp.svg";
import PuzzlePiecesImg from "../assets/puzzle-pieces.svg";
import TargetImg from "../assets/target.svg";
import TrophyImg from "../assets/trophy.svg";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export default function NossoNegocio() {
  return (
    <>
      <Head>
        <title>Rodap - Nosso negócio</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Nosso Negócio
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-8 lg:my-16 flex flex-col gap-4">
        <div className="flex max-lg:flex-col items-center justify-center gap-8 lg:gap-16">
          <Zoom bottom>
            <PuzzlePiecesImg className="" />
          </Zoom>
          <Fade right>
            <p className="text-justify flex-1">
              O Grupo Rodap é um empreendimento que se orgulha de seus
              princípios sólidos e políticas que dão suporte ao planejamento
              estratégico e visam o desenvolvimento de ações e projetos de longa
              duração e sustentáveis. Entendemos que a melhoria contínua da
              gestão é essencial para aumentar a satisfação dos colaboradores e
              da comunidade. Por isso, estamos sempre em busca de maneiras de
              melhorar nossos processos e aprimorar nossos serviços, para
              garantir que estamos sempre alcançando nossos objetivos e fazendo
              a diferença na vida das pessoas. Investimos em inovações e
              treinamento para nossos funcionários, e trabalhamos em estreita
              colaboração com nossos parceiros e fornecedores para assegurar que
              estamos oferecendo os melhores serviços possíveis. Nossa
              prioridade é sempre garantir a satisfação de nossos clientes e
              contribuir para o desenvolvimento da comunidade em que atuamos.
            </p>
          </Fade>
        </div>

        <Fade bottom>
          <p className="my-4 sm:my-8 lg:my-16 !font-normal !normal-case italic !text-primary text-justify lg:text-center">
            &ldquo;Transportar pessoas com carinho, pontualidade e segurança é
            nossa missão. Garantir que cada viagem seja uma experiência
            agradável e segura é a nossa prioridade. Estamos sempre buscando a
            excelência através da gestão da qualidade, garantindo que todos os
            processos estejam de acordo com os requisitos e eficazes, para
            garantir a satisfação de nossos clientes e buscar a melhoria
            contínua.&rdquo;
          </p>
        </Fade>

        <div className="grid md:grid-cols-3 items-start gap-8">
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <TargetImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Missão</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                Transportar pessoas com qualidade, segurança e sustentabilidade
                é a nossa razão de existir. Acreditamos que o transporte público
                deve ser acessível e confiável para todos, e nos esforçamos
                diariamente para alcançar esses objetivos. Além disso,
                acreditamos que a inovação é fundamental para o sucesso de nossa
                empresa e buscamos sempre implementar novas tecnologias e
                práticas para melhorar nossos serviços e oferecer a melhor
                experiência para nossos clientes.
              </p>
            </Fade>
          </div>
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <LampImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Visão</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                Sermos referência em gestão de transportes de pessoas é o nosso
                objetivo maior. Queremos ser reconhecidos por nossos clientes
                como a melhor opção de transporte público, oferecendo serviços
                de qualidade, segurança e sustentabilidade. Além disso, buscamos
                ser líderes em inovação e tecnologia, sempre buscando
                implementar soluções que melhorem a experiência do usuário e
                tornem o transporte público ainda mais acessível e confiável.
                Queremos ser uma empresa responsável e comprometida com a
                comunidade, que contribua para o desenvolvimento econômico e
                social da região onde atuamos. Nossa visão é ser uma empresa
                respeitada e admirada por todos os stakeholders.
              </p>
            </Fade>
          </div>
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <TrophyImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Valores</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                O compromisso com a qualidade dos serviços prestados aos
                clientes é a base de tudo o que fazemos. Também valorizamos a
                integração, aproximação, capacitação e desenvolvimento de nossos
                funcionários, pois acreditamos que eles são a chave para o
                sucesso da empresa. Além disso, buscamos manter relações
                harmônicas com os públicos de relacionamento, promover ações
                visando a sustentabilidade e garantir o retorno do capital
                investido aos cotistas. Acreditamos que esses valores são
                fundamentais para o crescimento e sucesso de nossa empresa.
              </p>
            </Fade>
          </div>
        </div>
      </Container>
    </>
  );
}
