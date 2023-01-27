import Head from "next/head";
import Link from "next/link";
import { Envelope, Globe, Phone, WhatsappLogo } from "phosphor-react";
import Fade from "react-reveal/Fade";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Rodap - Serviços</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Serviços
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-8 lg:my-16 flex flex-col gap-8">
        <Fade cascade left>
          <Title asChild scheme="tertiary" className="!text-xl sm:!text-2xl">
            <h2>Encomendas</h2>
          </Title>
          <p className="text-justify">
            A Rodap oferece não só transporte de qualidade para pessoas, mas
            também para mercadorias. Entre em contato conosco para saber mais
            sobre os destinos que atendemos. Além disso, temos pontos de apoio
            estratégicos nas cidades de Belo Horizonte, Taquaraçu de Minas e
            Jaboticatubas, garantindo a segurança e rapidez na entrega de suas
            mercadorias.
          </p>

          <Link href="tel:(31) 3486-6644">
            <div className="flex gap-4 sm:gap-8">
              <Phone className="text-2xl" weight="light" />
              <span>(31) 3486-6644</span>
            </div>
          </Link>
          <Link href="mailto:encomendas@rodap.com.br">
            <div className="flex gap-4 sm:gap-8">
              <Envelope className="text-2xl" weight="light" />
              <span>encomendas@rodap.com.br</span>
            </div>
          </Link>

          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Fretamento</h2>
          </Title>
          <p className="text-justify">
            A Rodap orgulha-se de possuir uma das melhores frotas da região
            metropolitana de Belo Horizonte, composta por ônibus executivos,
            micro-ônibus e vans, preparadas para atender às necessidades de você
            e sua empresa com conforto, agilidade e segurança. Nossos
            profissionais são altamente capacitados e nossos veículos estão de
            acordo com as normas dos órgãos regulamentadores. Entre em contato
            conosco e experimente a diferença do transporte oferecido pela
            Rodap.
          </p>

          <Link href="tel:(31) 3517-7601">
            <div className="flex gap-4 sm:gap-8">
              <Phone className="text-2xl" weight="light" />
              <span>(31) 3517-7601</span>
            </div>
          </Link>
          <Link href="tel:(31) 9 9120-7600">
            <div className="flex gap-4 sm:gap-8">
              <WhatsappLogo className="text-2xl" weight="light" />
              <span>(31) 9 9120-7600</span>
            </div>
          </Link>
          <Link href="mailto:encomendas@rodap.com.br">
            <div className="flex gap-4 sm:gap-8">
              <Envelope className="text-2xl" weight="light" />
              <span>encomendas@rodap.com.br</span>
            </div>
          </Link>
          <Link href="https://slfretamento.com.br" target="_blank">
            <div className="flex gap-4 sm:gap-8">
              <Globe className="text-2xl" weight="light" />
              <span>https://slfretamento.com.br</span>
            </div>
          </Link>

          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Recarga Vale Transporte Elêtronico</h2>
          </Title>
          <div className="flex flex-col gap-4 text-justify">
            <p>
              Os cartões BHBus e Ótimo trouxeram um novo conceito para o
              transporte coletivo em Belo Horizonte e na Região Metropolitana,
              substituindo o antigo sistema de vale transporte de papel. Com
              eles, os usuários podem desfrutar de maior comodidade e segurança,
              além de gerar economia e melhor gerenciamento do benefício para os
              empregadores.
            </p>
            <p>
              Os cartões podem ser adquiridos tanto por pessoas físicas quanto
              jurídicas e não é necessário se deslocar a um estabelecimento
              comercial para adquirir créditos eletrônicos. É possível solicitar
              os créditos pela internet ou através dos validadores dos ônibus
              (recarga a bordo).
            </p>
          </div>
        </Fade>
      </Container>
    </>
  );
}
