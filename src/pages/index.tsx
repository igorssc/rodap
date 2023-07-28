import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import gallery01ThumbImg from "../assets/gallery/gallery-01-thumb.webp";
import gallery01Img from "../assets/gallery/gallery-01.webp";
import gallery02ThumbImg from "../assets/gallery/gallery-02-thumb.webp";
import gallery02Img from "../assets/gallery/gallery-02.webp";
import gallery03ThumbImg from "../assets/gallery/gallery-03-thumb.webp";
import gallery03Img from "../assets/gallery/gallery-03.webp";
import gallery04ThumbImg from "../assets/gallery/gallery-04-thumb.webp";
import gallery04Img from "../assets/gallery/gallery-04.webp";
import gallery05ThumbImg from "../assets/gallery/gallery-05-thumb.webp";
import gallery05Img from "../assets/gallery/gallery-05.webp";
import gallery06ThumbImg from "../assets/gallery/gallery-06-thumb.webp";
import gallery06Img from "../assets/gallery/gallery-06.webp";
import gallery07ThumbImg from "../assets/gallery/gallery-07-thumb.webp";
import gallery07Img from "../assets/gallery/gallery-07.webp";
import gallery08ThumbImg from "../assets/gallery/gallery-08-thumb.webp";
import gallery08Img from "../assets/gallery/gallery-08.webp";
import isoImg from "../assets/selo_ISO_9001_2015.webp";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

const galleryImgs = [
  { original: gallery01Img, thumbnail: gallery01ThumbImg },
  { original: gallery02Img, thumbnail: gallery02ThumbImg },
  { original: gallery03Img, thumbnail: gallery03ThumbImg },
  { original: gallery04Img, thumbnail: gallery04ThumbImg },
  { original: gallery05Img, thumbnail: gallery05ThumbImg },
  { original: gallery06Img, thumbnail: gallery06ThumbImg },
  { original: gallery07Img, thumbnail: gallery07ThumbImg },
  { original: gallery08Img, thumbnail: gallery08ThumbImg },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodap</title>
      </Head>

      <Header />

      {/* <Banner>
        <Container>
          <Title className="!text-xl sm:!text-2xl md:!text-3xl text-center">
            ÚLTIMAS POSTAGENS
          </Title>
        </Container>
      </Banner>
      <Container className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-10 justify-center mt-8 lg:mt-16">
        <div className="col-span-3 gap-8 flex flex-col justify-between">
          <Fade appear cascade>
            <Box className="lg:shadow-none">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-lg:[&_.summary]:px-4 max-lg:[&_.summary]:pb-4">
                <FeaturedPost />
              </div>
            </Box>
            <Box className="lg:shadow-none">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-lg:[&_.summary]:px-4 max-lg:[&_.summary]:pb-4">
                <FeaturedPost />
              </div>
            </Box>
          </Fade>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:flex lg:flex-col gap-8 min-[300px]:gap-3">
          <Fade appear>
            {Array.from({ length: 5 }, (_, index) => (
              <Box key={index} className="lg:shadow-none overflow-hidden">
                <div className="grid min-[300px]:grid-cols-3 gap-5 items-stretch min-[300px]:[&_.summary]:col-span-2 max-[300px]:[&_.summary]:px-4 max-[300px]:[&_.summary]:pb-4">
                  <FeaturedPost isSummary />
                </div>
              </Box>
            ))}
          </Fade>
        </div>
      </Container>
      <Container className="flex justify-center my-8 lg:my-16">
        <Zoom>
          <div className="max-w-full">
            <Link href="/blog">
              <Button>Ver mais</Button>
            </Link>
          </div>
        </Zoom>
      </Container> */}

      <Banner className="py-16">
        <Container className="flex flex-col items-center gap-16">
          <Fade appear cascade>
            <Title className="!text-xl sm:!text-2xl text-center">
              Trabalhe conosco
            </Title>
            <div>
              <p className="text-justify lg:text-center">
                Quer fazer parte de uma empresa que preza por qualidade no
                transporte coletivo? A Rodap é perfeita para você! Estamos
                sempre em busca de profissionais talentosos, dedicados e
                apaixonados por transporte. Acreditamos que nossa equipe é a
                chave para o sucesso e estamos comprometidos em oferecer
                oportunidades de crescimento e desenvolvimento profissional. Se
                você tem paixão pelo transporte e quer fazer parte de um time
                incrível, clique no botão abaixo e confira as oportunidades
                disponíveis. Não perca mais tempo, junte-se a nós e faça a
                diferença no transporte coletivo.
              </p>
            </div>
          </Fade>
          <Zoom>
            <div className="max-w-full">
              <Link href="/trabalhe-conosco">
                <Button scheme="secondary">Quero fazer parte</Button>
              </Link>
            </div>
          </Zoom>
        </Container>
      </Banner>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Sobre Nós
          </Title>
          <div>
            <p className="text-justify lg:text-center">
              A Rodap nasceu de uma história de dedicação e paixão pelo
              transporte coletivo. Com muito trabalho e visão de futuro,
              conseguimos nos transformar numa empresa sólida e que hoje, além
              de transportar centenas de vidas todos os dias e com total
              segurança, garantimos, também, o sustento de milhares de famílias.
              Conheça mais sobre como começamos. Clique nos botões abaixo para
              descobrir mais sobre a Rodap e se apaixonar por nossa empresa
              também!
            </p>
          </div>
          <div className="flex gap-4 lg:gap-8 flex-col md:flex-row max-w-full">
            <Zoom left>
              <Link href="/sobre-nos">
                <Button>Nossa história</Button>
              </Link>
            </Zoom>
            <Zoom right>
              <Link href="/nosso-negocio">
                <Button>Nosso negócio</Button>
              </Link>
            </Zoom>
          </div>
        </Fade>
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Veja um pouco de nossa estrutura
          </Title>
        </Fade>
        <Gallery
          items={Array.from({ length: 8 }, (_, i) => ({
            original: galleryImgs[i].original,
            thumbnail: galleryImgs[i].thumbnail,
          }))}
        />
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Você sabia?
          </Title>
          <div>
            <p className="text-justify lg:text-center">
              Além de atuar no ramo de transporte coletivo, o Grupo Rodap também
              conta com serviços de fretamento para empresas. Através da Santa
              Luzia Fretamentos e Turismo, oferecemos a solução perfeita de
              transporte para os funcionários da sua empresa e/ou para grupos de
              forma rápida e segura. Descubra mais sobre nosso serviço de
              fretamento ao acessar o site:{" "}
              <Link href="www.slfretamento.com.br" target="_blank">
                www.slfretamento.com.br
              </Link>
              . Não perca mais tempo, escolha o Grupo Rodap para todas as suas
              necessidades de transporte!
            </p>
          </div>
        </Fade>
        <Zoom>
          <div className="max-w-full">
            <Link href="/servicos">
              <Button>Serviços</Button>
            </Link>
          </div>
        </Zoom>
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Selo de Qualidade: Nossa Garantia de Excelência
          </Title>
          <Image src={isoImg} width={100} height={87} alt="ISO 9001" />
          <div>
            <p className="text-justify lg:text-center">
              O Grupo Rodap orgulha-se de possuir o selo de certificação ISO
              9001 - um reconhecimento internacional que assegura a constante
              busca da empresa na melhoria de sua gestão de processos ao avaliar
              e acompanhar de forma frequente o melhor aproveitamento de
              recursos, redução de erros e de retrabalhos, fatores que impactam
              diretamente no aumento da qualidade do serviço prestado. A ISO
              9001 atesta que o Grupo Rodap está no caminho certo e quer seguir
              alcançando metas e objetivos na busca pela excelência em gestão no
              transporte coletivo.
            </p>
          </div>
        </Fade>
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Objetivo de qualidade
          </Title>
          <ul className="flex max-sm:flex-col items-center justify-center gap-4 text-white">
            <li className="bg-primary py-16 px-8 text-center rounded max-sm:w-full">
              Aperfeiçoar a gestão de acordo com a dinâmica dos negócios;
            </li>
            <li className="bg-primary py-16 px-8 text-center rounded max-sm:w-full">
              Buscar a satisfação dos clientes com serviços de qualidade;
            </li>
            <li className="bg-primary py-16 px-8 text-center rounded max-sm:w-full">
              Promover o desenvolvimento e capacitação profissional.
            </li>
          </ul>
        </Fade>
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title
            className="!text-xl sm:!text-2xl text-center"
            scheme="secondary"
          >
            Política da Qualidade
          </Title>
          <div>
            <p className="text-justify lg:text-center">
              Transportar pessoas com pontualidade e segurança, assegurar o
              atendimento aos requisitos e a eficácia dos processos através da
              gestão da qualidade, buscando a melhoria contínua e a satisfação
              dos clientes.
            </p>
          </div>
        </Fade>
      </Container>
    </>
  );
}
