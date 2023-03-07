import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import featuredImg from "../assets/about-us-page-featured.webp";
import featuredBeloHorizonteImg from "../assets/featured-units/belo-horizonte.webp";
import featuredJustinopolisImg from "../assets/featured-units/justinopolis.webp";
import featuredSantaLuziaImg from "../assets/featured-units/santa-luzia.webp";
import featuredSaoBeneditoImg from "../assets/featured-units/sao-benedito.webp";
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
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Nossa história
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="[&_p]:text-justify [&_p]:my-6">
        <Fade>
          <Image
            src={featuredImg}
            width={1280}
            height={489}
            alt="featured photo of the page"
            className="w-full h-auto my-8 lg:my-16"
          />
        </Fade>

        <Fade cascade>
          <div>
            <p>
              Fundado no início da década de 70, o Grupo Rodap é o resultado de
              uma visão empreendedora e uma paixão incansável por transporte.
              Tudo começou com Heloísio Marcos Silveira, um vendedor de frutas
              que trabalhava no Mercado Central de Belo Horizonte e cujo sonho
              foi inspirado pelo ofício de seu pai, Gracino João Diniz Silveira,
              que trabalhou com transporte coletivo de 1928 a 1946.
            </p>
          </div>
          <div>
            <p>
              Juntamente com seu irmão, Nilton Jorge da Silveira, outro sócio
              fundador, eles construíram a Rodap a partir de um capital que
              adquiriram com o comércio. Naquele momento, a empresa contava com
              apenas 14 ônibus e uma garagem. Mas isso não impediu que eles
              vissem além e se esforçassem para ampliar a frota e crescer no
              setor.
            </p>
          </div>
          <div>
            <p>
              Hoje, o Grupo Rodap é uma empresa líder e referência no ramo de
              transporte coletivo, com uma frota de aproximadamente 800 ônibus e
              administra cinco garagens próprias, contando com 2.600
              funcionários dedicados e apaixonados pelo que fazem. Nossas
              garagens estão localizadas nas cidades de Belo Horizonte,
              Contagem, Betim, Santa Luzia e Ribeirão das Neves. A história da
              Rodap é a história de uma paixão, dedicação e sucesso. Atualmente,
              contamos com as seguintes unidades:
            </p>
          </div>
        </Fade>

        <div className="w-full justify-center grid min-[300px]:grid-cols-2 md:grid-cols-4 my-8 lg:my-16 gap-4 md:gap-10 cursor-pointer">
          <>
            {[
              ["Belo Horizonte", "unidade-belo-horizonte"],
              ["Santa Luzia", "unidade-santa-luzia"],
              ["São Benedito", "unidade-sao-benedito"],
              ["Justinópolis", "unidade-justinopolis"],
            ].map((v, i) => (
              <Fade key={i} bottom>
                <div
                  className="text-center bg-primary py-5 text-white max-md:px-6"
                  onClick={() => {
                    const id = document.getElementById(v[1]);
                    const targetOffset = id?.offsetTop;

                    targetOffset &&
                      window.scrollTo({
                        top: targetOffset - 58,
                        behavior: "smooth",
                      });
                  }}
                >
                  <span className="block font-medium">Unidade</span>
                  <span>{v[0]}</span>
                </div>
              </Fade>
            ))}
          </>
        </div>

        <Fade cascade>
          <div>
            <p>
              A Rodap entende que a segurança e a qualidade dos serviços
              prestados à comunidade estão diretamente ligadas ao cuidado que
              temos com nossa frota. Por isso, investimos em oficinas próprias,
              equipadas com tecnologia de ponta, para garantir que nossos
              veículos estejam sempre em ótimas condições.
            </p>
          </div>
          <div>
            <p>
              Nossos profissionais altamente especializados e treinados estão
              sempre de prontidão, realizando vistorias, manutenções preventivas
              e corretivas, sempre com o objetivo de garantir a qualidade e
              segurança dos nossos passageiros.
            </p>
          </div>
          <div>
            <p>
              Além disso, nossos pátios são devidamente organizados para atender
              às necessidades da logística da empresa, sem prejudicar o processo
              de abastecimento, limpeza, manutenção e operação. A Rodap se
              preocupa com cada detalhe para oferecer a melhor experiência de
              transporte aos nossos clientes.
            </p>
          </div>
        </Fade>

        <div className="my-8 lg:my-16 flex flex-col gap-8">
          {[
            {
              name: "Unidade Belo Horizonte",
              description: [
                "A unidade de transporte de Belo Horizonte foi fundada em 1977 com o objetivo de conectar a cidade a outras localidades próximas. Através das nossas linhas, os viajantes podem desfrutar de deslocamentos seguros e confortáveis para as cidades vizinhas de Taquaraçú de Minas, Jaboticatubas, São José de Almeida e São José da Serra.",
                "Temos orgulho em contar com uma equipe altamente capacitada e dedicada a oferecer o melhor transporte para nossos clientes. Estamos constantemente procurando maneiras de melhorar e aperfeiçoar nossos serviços, sempre com o objetivo de atender às necessidades da comunidade local.",
              ],
              img: featuredBeloHorizonteImg,
              id: "unidade-belo-horizonte",
            },
            {
              name: "Unidade Santa Luzia",
              description: [
                "A unidade mais antiga do Grupo Rodap iniciou suas atividades em 1968 e foi incorporada ao Grupo em 1974. Desde então, temos orgulho em atender vários bairros da região de Santa Luzia, proporcionando deslocamentos seguros e confortáveis para o centro do município, o Distrito de São Benedito e Belo Horizonte. Esses serviços são gerenciados pela Secretaria de Estado de Transporte e Obras Públicas - SETOP-MG e pela Prefeitura de Santa Luzia, garantindo a qualidade e a eficiência dos nossos serviços.",
                "Além disso, essa unidade também oferece serviços de transporte escolar e fretamento de empregados, para atender às necessidades da comunidade local. Temos um histórico de sucesso e estamos sempre em busca de melhorias para oferecer o melhor transporte para nossa comunidade.",
              ],
              img: featuredSantaLuziaImg,
              id: "unidade-santa-luzia",
            },
            {
              name: "Unidade São Benedito",
              description: [
                "A unidade do Distrito de São Benedito foi fundada em 1974 com o objetivo de oferecer transporte de qualidade para a comunidade local. Desde então, temos orgulho em operar linhas que atendem os bairros do Distrito, proporcionando deslocamentos seguros e confortáveis para Belo Horizonte. Essas linhas são gerenciadas pela SETOP-MG, garantindo a qualidade e a eficiência dos nossos serviços.",
                "Além disso, nesta unidade estão alocados os setores administrativos, onde trabalhamos diariamente para garantir a excelência no atendimento e a satisfação dos nossos clientes. Temos um histórico de sucesso e estamos sempre em busca de melhorias para oferecer o melhor transporte para nossa comunidade.",
              ],
              img: featuredSaoBeneditoImg,
              id: "unidade-sao-benedito",
            },
            {
              name: "Unidade Justinópolis",
              description: [
                "Fundada em 1986, a unidade de Justinópolis tem o objetivo de oferecer transporte de qualidade para a comunidade local. Atendemos a região de Justinópolis em Ribeirão das Neves, proporcionando deslocamentos seguros e confortáveis para o centro do município, Distrito de Justinópolis e Belo Horizonte. Esses serviços são gerenciados pela SETOP-MG e Secretaria de Transporte de Ribeirão das Neves, garantindo a qualidade e a eficiência dos nossos serviços.",
              ],
              img: featuredJustinopolisImg,
              id: "unidade-justinopolis",
            },
          ].map((v, i) => (
            <Fade key={i} left>
              <div
                className="bg-gray-200 flex lg:grid lg:grid-cols-6 max-lg:flex-col min-h-[380px]"
                id={v.id}
              >
                <Image
                  src={v.img.src}
                  alt={`Featured photo from ${v.name}`}
                  width={640}
                  height={417}
                  className="w-full min-h-full object-cover lg:col-span-2"
                />
                <div className="flex flex-col md:items-center md:justify-center gap-4 px-4 sm:px-8 lg:px-16 py-4 md:py-8 lg:col-span-4">
                  <Title
                    scheme="secondary"
                    className="!text-xl sm:!text-2xl md:!text-3xl"
                  >
                    {v.name}
                  </Title>
                  <div className="flex flex-col">
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
