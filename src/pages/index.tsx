import Link from "next/link";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FeaturedPost } from "../components/FeaturedPost";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <>
      <Header />

      <Banner>
        <Container>
          <Title className="!text-3xl text-center">ÚLTIMAS POSTAGENS</Title>
        </Container>
      </Banner>
      <Container className="grid grid-cols-5 gap-10 justify-center mt-16">
        <div className="col-span-3 flex flex-col justify-between">
          <Fade appear cascade>
            <div className="grid grid-cols-2 gap-4">
              <FeaturedPost />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeaturedPost />
            </div>
          </Fade>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          {Array.from({ length: 5 }, (_, index) => (
            <Fade appear key={index}>
              <div className="grid grid-cols-3 gap-5 items-center [&_.summary]:col-span-2">
                <FeaturedPost isSummary />
              </div>
            </Fade>
          ))}
        </div>
      </Container>
      <Container className="flex justify-center my-16">
        <Zoom>
          <Button asChild>
            <Link href="/blog">Ver mais</Link>
          </Button>
        </Zoom>
      </Container>

      <Banner className="py-16">
        <Container className="flex flex-col items-center gap-16">
          <Fade appear cascade>
            <Title className="text-2xl">Trabalhe conosco</Title>
            <p className="text-center">
              Você quer fazer parte de uma empresa líder em transporte coletivo?
              A Rodap está sempre em busca de profissionais talentosos,
              dedicados e apaixonados por transporte. Nós acreditamos que nossa
              equipe é a chave para o sucesso e estamos comprometidos em
              oferecer oportunidades de crescimento e desenvolvimento. Se você
              tem a paixão pelo transporte e quer fazer parte de uma equipe
              incrível, clique no botão abaixo e confira as oportunidades
              disponíveis. Não perca mais tempo, junte-se a nós e faça a
              diferença no transporte coletivo.
            </p>
          </Fade>
          <Zoom>
            <Button scheme="secondary" asChild>
              <Link href="/trabalhe-conosco">Quero fazer parte</Link>
            </Button>
          </Zoom>
        </Container>
      </Banner>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear cascade>
          <Title className="text-2xl" scheme="secondary">
            Sobre Nós
          </Title>
          <p className="text-center">
            A Rodap é mais do que apenas uma empresa de transporte coletivo, é
            uma história de dedicação e paixão. Com uma história rica e uma
            visão ambiciosa, acreditamos que todos devem ter acesso a viagens
            seguras, confortáveis e acessíveis. Nossos valores de segurança,
            inovação e atendimento excepcional são a base de tudo o que fazemos.
            Não perca a oportunidade de conhecer mais sobre a nossa equipe,
            objetivos e como estamos contribuindo para uma sociedade melhor.
            Clique no botão abaixo para descobrir mais sobre a Rodap e se
            apaixonar por nossa empresa também!
          </p>
          <div className="flex gap-16">
            <Zoom left>
              <Button asChild>
                <Link href="/sobre-nos">Nossa história</Link>
              </Button>
            </Zoom>
            <Zoom right>
              <Button asChild>
                <Link href="/nosso-negocio">Nosso negócio</Link>
              </Button>
            </Zoom>
          </div>
        </Fade>
      </Container>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Fade appear>
          <Title className="text-2xl" scheme="secondary">
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
          <Title className="text-2xl" scheme="secondary">
            Você sabia?
          </Title>
          <p className="text-center">
            Você sabia que além de oferecer transporte coletivo, a Rodap também
            tem serviços de encomendas e fretamentos? Nossa frota diversificada
            e equipe especializada está pronta para atender às suas necessidades
            de transporte de mercadorias e grupos. Seja para uma entrega urgente
            ou para um evento especial, podemos ajudá-lo a encontrar a solução
            perfeita. Descubra mais sobre, acessando nossa página de serviços.
            Não perca mais tempo, escolha Rodap para suas necessidades de
            transporte!
          </p>
        </Fade>
        <Zoom>
          <div className="flex gap-16">
            <Button asChild>
              <Link href="/servicos">Serviços</Link>
            </Button>
          </div>
        </Zoom>
      </Container>
    </>
  );
}
