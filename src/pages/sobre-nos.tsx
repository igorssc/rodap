import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import featuredImg from "../assets/about-us-page-featured.png";
import featuredBeloHorizonteImg from "../assets/featured-units/belo-horizonte.png";
import featuredJustinopolisImg from "../assets/featured-units/justinopolis.png";
import featuredSantaLuziaImg from "../assets/featured-units/santa-luzia.png";
import featuredSaoBeneditoImg from "../assets/featured-units/sao-benedito.png";
import featuredVendaNovaImg from "../assets/featured-units/venda-nova.png";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Rodap - Sobre nós</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-4xl text-center">Nossa história</Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="[&_>p]:text-justify [&_>p]:my-6">
        <Fade>
          <Image
            src={featuredImg}
            width={1280}
            height={489}
            alt="featured photo of the page"
            className="w-full h-auto my-16"
          />
        </Fade>

        <Fade cascade>
          <p>
            Fundado no início da década de 70, o Grupo Rodap é o resultado de
            uma visão empreendedora e uma paixão incansável por transporte. Tudo
            começou com Heloísio Marcos Silveira, um vendedor de frutas que
            trabalhava no Mercado Central de Belo Horizonte e cujo sonho foi
            inspirado pelo ofício de seu pai, Gracino João Diniz Silveira, que
            trabalhou com transporte coletivo de 1928 a 1946.
          </p>
          <p>
            Juntamente com seu irmão, Nilton Jorge da Silveira, outro sócio
            fundador, eles construíram a Rodap a partir de um capital que
            adquiriram com o comércio. Naquele momento, a empresa contava com
            apenas 14 ônibus e uma garagem. Mas isso não impediu que eles vissem
            além e se esforçassem para ampliar a frota e crescer no setor.
          </p>
          <p>
            Hoje, o Grupo Rodap é uma empresa líder e referência no ramo de
            transporte coletivo, com uma frota de aproximadamente 800 ônibus e
            administra cinco garagens próprias, contando com 2.600 funcionários
            dedicados e apaixonados pelo que fazem. Nossas garagens estão
            localizadas nas cidades de Belo Horizonte, Contagem, Betim, Santa
            Luzia e Ribeirão das Neves. A história da Rodap é a história de uma
            paixão, dedicação e sucesso. Atualmente, contamos com as seguintes
            unidades:
          </p>
        </Fade>

        <div className="w-full grid grid-cols-5 my-16 gap-10">
          <>
            {[
              "Belo Horizonte",
              "Santa Luzia",
              "São Benedito",
              "Venda Nova",
              "Justinópolis",
            ].map((v, i) => (
              <Fade key={i} bottom>
                <div className="text-center bg-primary py-5 text-white">
                  <span className="block font-medium">Unidade</span>
                  <span>{v}</span>
                </div>
              </Fade>
            ))}
          </>
        </div>

        <Fade cascade>
          <p>
            A Rodap entende que a segurança e a qualidade dos serviços prestados
            à comunidade estão diretamente ligadas ao cuidado que temos com
            nossa frota. Por isso, investimos em oficinas próprias, equipadas
            com tecnologia de ponta, para garantir que nossos veículos estejam
            sempre em ótimas condições.
          </p>
          <p>
            Nossos profissionais altamente especializados e treinados estão
            sempre de prontidão, realizando vistorias, manutenções preventivas e
            corretivas, sempre com o objetivo de garantir a qualidade e
            segurança dos nossos passageiros.
          </p>
          <p>
            Além disso, nossos pátios são devidamente organizados para atender
            às necessidades da logística da empresa, sem prejudicar o processo
            de abastecimento, limpeza, manutenção e operação. A Rodap se
            preocupa com cada detalhe para oferecer a melhor experiência de
            transporte aos nossos clientes.
          </p>
        </Fade>

        <div className="my-16 flex flex-col gap-8">
          {[
            {
              name: "Unidade Belo Horizonte",
              description: [
                "A unidade de transporte de Belo Horizonte foi fundada em 1977 com o objetivo de conectar a cidade a outras localidades próximas. Através das nossas linhas, os viajantes podem desfrutar de deslocamentos seguros e confortáveis para as cidades vizinhas de Taquaraçú de Minas, Jaboticatubas, São José de Almeida e São José da Serra.",
                "Temos orgulho em contar com uma equipe altamente capacitada e dedicada a oferecer o melhor transporte para nossos clientes. Estamos constantemente procurando maneiras de melhorar e aperfeiçoar nossos serviços, sempre com o objetivo de atender às necessidades da comunidade local.",
              ],
              img: featuredBeloHorizonteImg,
            },
            {
              name: "Unidade Santa Luzia",
              description: [
                "A unidade mais antiga do Grupo Rodap iniciou suas atividades em 1968 e foi incorporada ao Grupo em 1974. Desde então, temos orgulho em atender vários bairros da região de Santa Luzia, proporcionando deslocamentos seguros e confortáveis para o centro do município, o Distrito de São Benedito e Belo Horizonte. Esses serviços são gerenciados pela Secretaria de Estado de Transporte e Obras Públicas - SETOP-MG e pela Prefeitura de Santa Luzia, garantindo a qualidade e a eficiência dos nossos serviços.",
                "Além disso, essa unidade também oferece serviços de transporte escolar e fretamento de empregados, para atender às necessidades da comunidade local. Temos um histórico de sucesso e estamos sempre em busca de melhorias para oferecer o melhor transporte para nossa comunidade.",
              ],
              img: featuredSantaLuziaImg,
            },
            {
              name: "Unidade São Benedito",
              description: [
                "A unidade do Distrito de São Benedito foi fundada em 1974 com o objetivo de oferecer transporte de qualidade para a comunidade local. Desde então, temos orgulho em operar linhas que atendem os bairros do Distrito, proporcionando deslocamentos seguros e confortáveis para Belo Horizonte. Essas linhas são gerenciadas pela SETOP-MG, garantindo a qualidade e a eficiência dos nossos serviços.",
                "Além disso, nesta unidade estão alocados os setores administrativos, onde trabalhamos diariamente para garantir a excelência no atendimento e a satisfação dos nossos clientes. Temos um histórico de sucesso e estamos sempre em busca de melhorias para oferecer o melhor transporte para nossa comunidade.",
              ],
              img: featuredSaoBeneditoImg,
            },
            {
              name: "Unidade Justinópolis",
              description: [
                "Fundada em 1986, a unidade de Justinópolis tem o objetivo de oferecer transporte de qualidade para a comunidade local. Atendemos a região de Justinópolis em Ribeirão das Neves, proporcionando deslocamentos seguros e confortáveis para o centro do município, Distrito de Justinópolis e Belo Horizonte. Esses serviços são gerenciados pela SETOP-MG e Secretaria de Transporte de Ribeirão das Neves, garantindo a qualidade e a eficiência dos nossos serviços.",
              ],
              img: featuredJustinopolisImg,
            },
            {
              name: "Unidade Venda Nova",
              description: [
                "A unidade de Venda Nova e Região Norte foi fundada em 1988 com o objetivo de oferecer transporte de qualidade para a comunidade local. Desde então, temos orgulho em operar linhas na região, proporcionando deslocamentos seguros e confortáveis para os bairros de Venda Nova e Região Norte. Essas linhas são gerenciadas pela BHTRANS, garantindo a qualidade e a eficiência dos nossos serviços.",
                "Temos uma longa história de sucesso e estamos sempre em busca de melhorias para oferecer o melhor transporte para nossa comunidade. Nossa equipe é dedicada e apaixonada pelo que faz, e está sempre pronta para atender às necessidades dos nossos clientes.",
              ],
              img: featuredVendaNovaImg,
            },
          ].map((v, i) => (
            <Fade key={i} left>
              <div className="bg-gray-200 flex">
                <Image
                  src={v.img.src}
                  alt={`Featured photo from ${v.name}`}
                  width={640}
                  height={417}
                />
                <div className="flex flex-col items-center justify-center gap-16 px-16">
                  <Title scheme="secondary" className="!text-3xl">
                    {v.name}
                  </Title>
                  <div className="flex flex-col gap-6">
                    {v.description.map((_v, _i) => (
                      <p className="text-justify" key={_i}>
                        {_v}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </>
  );
}
