import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export default function Recargas() {
  return (
    <>
      <Head>
        <title>Rodap - Recargas</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Recargas
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
        </Fade>
      </Container>
    </>
  );
}
