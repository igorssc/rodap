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
          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Fretamento</h2>
          </Title>
          <div>
            <p className="text-justify">
              A Rodap possui uma das melhores frotas da região metropolitana de
              Belo Horizonte, composta por ônibus executivos, micro-ônibus e
              vans, preparadas para atender as necessidades da sua empresa com
              conforto, agilidade e segurança. Nossos profissionais são
              altamente capacitados e nossos veículos estão de acordo com as
              normas dos órgãos regulamentadores. Entre em contato conosco e
              experimente a diferença do transporte oferecido pela Rodap.
            </p>
          </div>

          <Link href="tel:(31) 3517-7601">
            <div className="flex gap-4 sm:gap-8">
              <Phone className="text-2xl" weight="light" />
              <span>(31) 3517-7601</span>
            </div>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5531991207600">
            <div className="flex gap-4 sm:gap-8">
              <WhatsappLogo className="text-2xl" weight="light" />
              <span>(31) 9 9120-7600</span>
            </div>
          </Link>
          <Link href="mailto:fretamento@rodap.com.br">
            <div className="flex gap-4 sm:gap-8">
              <Envelope className="text-2xl" weight="light" />
              <span>fretamento@rodap.com.br</span>
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
            <div>
              <p>
                Os cartões BHBus e Ótimo trouxeram um novo conceito para o
                transporte coletivo em Belo Horizonte e na Região Metropolitana,
                substituindo o antigo sistema de vale transporte de papel. Com
                eles, os usuários podem desfrutar de maior comodidade e
                segurança, além de gerar economia e melhor gerenciamento do
                benefício para os empregadores.
              </p>
            </div>
            <div>
              <p>
                Os cartões podem ser adquiridos tanto por pessoas físicas quanto
                jurídicas e não é necessário se deslocar a um estabelecimento
                comercial para adquirir créditos eletrônicos. É possível
                solicitar os créditos pela internet. Entre nos site{" "}
                <Link href="www.transfacil.com.br" target="_blank">
                  www.transfacil.com.br
                </Link>{" "}
                e saiba mais sobre o cartão BHBus, que atende a Belo Horizonte,
                e/ou acesse{" "}
                <Link href="www.otimoonline.com.br" target="_blank">
                  www.otimoonline.com.br
                </Link>{" "}
                para saber mais sobre o Ótimo, que atende à Região Metropolitana
                de Belo Horizonte (RMBH).
              </p>
            </div>
          </div>

          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Vendas de ônibus</h2>
          </Title>
          <div className="flex flex-col gap-4 text-justify">
            <div>
              <p>
                Aqui no Grupo Rodap você encontra os melhores ônibus e
                micro-ônibus seminovos à venda. Além de qualidade e confiança,
                temos também preços competitivos. Fale conosco e comprove.
              </p>
            </div>
          </div>
        </Fade>
      </Container>
    </>
  );
}
