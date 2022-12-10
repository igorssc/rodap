import Image from "next/image";
import Link from "next/link";
import featuredImg from "../assets/featured.png";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Divider } from "../components/Divider";
import { FeaturedPost } from "../components/FeaturedPost";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <>
      <Container className="grid grid-cols-2 gap-16 items-stretch mb-14">
        <div className="flex flex-col justify-around">
          <Title scheme="secondary" className="text-4xl leading-[3.5rem]">
            Qualidade em transporte?
            <br />
            Tem aqui!
          </Title>
          <p className="uppercase leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget ante a tortor luctus elementum in vitae purus. Morbi semper
            augue ut fringilla venenatis.
          </p>
          <span className="text-primary font-bold">
            Confira o horário do seu ônibus aqui
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Image
            src={featuredImg}
            alt="Imagem de destaque"
            priority
            className="rounded"
          />
        </div>
      </Container>

      <Divider />

      <Banner scheme="secondary">
        <Container>
          <Title scheme="secondary" className="text-2xl text-center">
            ÚLTIMAS POSTAGENS
          </Title>
        </Container>
      </Banner>
      <Container className="grid grid-cols-5 gap-10 justify-center">
        <div className="col-span-3 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <FeaturedPost />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FeaturedPost />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-5 items-center [&_.summary]:col-span-2"
            >
              <FeaturedPost isSummary />
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex justify-center my-16">
        <Button asChild>
          <Link href="/blog">Ver mais</Link>
        </Button>
      </Container>

      <Banner className="py-16">
        <Container className="flex flex-col items-center gap-16">
          <Title className="text-2xl">Trabalhe conosco</Title>
          <p>Se inscreva em nosso site e venha fazer parte do nosso time!</p>
          <Button scheme="secondary" asChild>
            <Link href="/trabalhe-conosco">Quero fazer parte</Link>
          </Button>
        </Container>
      </Banner>

      <Container className="flex flex-col gap-14 justify-center items-center my-16">
        <Title className="text-2xl" scheme="secondary">
          Sobre Nós
        </Title>
        <p>
          Conheça mais sobre a história de nossa empresa, nossa visão e valores
        </p>
        <div className="flex gap-16">
          <Button asChild>
            <Link href="#">Nossa história</Link>
          </Button>
          <Button asChild>
            <Link href="#">Nosso negócio</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
