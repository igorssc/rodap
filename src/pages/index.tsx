import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import isoImg from "../assets/selo_ISO_9001_2015.png";
import { Banner } from "../components/Banner";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FeaturedPost } from "../components/FeaturedPost";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodap</title>
      </Head>

      <Header />

      <Banner>
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
          {Array.from({ length: 5 }, (_, index) => (
            <Fade appear key={index}>
              <Box className="lg:shadow-none relative h-auto">
                <div className="grid relative max-h-auto overflow-hidden min-[300px]:grid-cols-3 gap-5 items-center min-[300px]:[&_.summary]:col-span-2 max-[300px]:[&_.summary]:px-4 max-[300px]:[&_.summary]:pb-4">
                  <FeaturedPost isSummary />
                </div>
              </Box>
            </Fade>
          ))}
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
      </Container>

      <Banner className="py-16">
        <Container className="flex flex-col items-center gap-16">
          <Fade appear cascade>
            <Title className="!text-xl sm:!text-2xl text-center">
              Trabalhe conosco
            </Title>
            <div>
              <p className="text-justify lg:text-center">
                Você quer fazer parte de uma empresa líder em transporte
                coletivo? A Rodap está sempre em busca de profissionais
                talentosos, dedicados e apaixonados por transporte. Nós
                acreditamos que nossa equipe é a chave para o sucesso e estamos
                comprometidos em oferecer oportunidades de crescimento e
                desenvolvimento. Se você tem a paixão pelo transporte e quer
                fazer parte de uma equipe incrível, clique no botão abaixo e
                confira as oportunidades disponíveis. Não perca mais tempo,
                junte-se a nós e faça a diferença no transporte coletivo.
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
              A Rodap é mais do que apenas uma empresa de transporte coletivo, é
              uma história de dedicação e paixão. Com uma história rica e uma
              visão ambiciosa, acreditamos que todos devem ter acesso a viagens
              seguras, confortáveis e acessíveis. Nossos valores de segurança,
              inovação e atendimento excepcional são a base de tudo o que
              fazemos. Não perca a oportunidade de conhecer mais sobre a nossa
              equipe, objetivos e como estamos contribuindo para uma sociedade
              melhor. Clique no botão abaixo para descobrir mais sobre a Rodap e
              se apaixonar por nossa empresa também!
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
          items={Array.from({ length: 8 }, () => ({
            original: "https://picsum.photos/1080/864",
            thumbnail: "https://picsum.photos/1080/864",
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
              Você sabia que além de oferecer transporte coletivo, a Rodap
              também tem serviços de encomendas e fretamentos? Nossa frota
              diversificada e equipe especializada está pronta para atender às
              suas necessidades de transporte de mercadorias e grupos. Seja para
              uma entrega urgente ou para um evento especial, podemos ajudá-lo a
              encontrar a solução perfeita. Descubra mais sobre, acessando nossa
              página de serviços. Não perca mais tempo, escolha Rodap para suas
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
              O Grupo Rodap se orgulha de possuir o selo ISO 9001, que é um
              reconhecimento internacionalmente reconhecido de que a empresa
              possui uma gestão de qualidade sólida e eficaz. Este selo é
              concedido após uma avaliação rigorosa dos processos internos da
              empresa e demonstra nossa dedicação em atender aos mais altos
              padrões de qualidade. A obtenção deste selo é um indicativo de que
              a empresa está sempre buscando a excelência e se esforçando para
              fornecer serviços e produtos de qualidade superior aos nossos
              clientes. Além disso, é uma garantia de que seguimos práticas de
              negócios éticas e transparentes. Isso mostra que a empresa se
              preocupa em estar sempre em constante evolução e melhoria, e isso
              é algo que nos diferencia e nos orgulha muito.
            </p>
          </div>
        </Fade>
      </Container>
    </>
  );
}
