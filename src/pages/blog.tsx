import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Banner } from "../components/Banner";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FeaturedPost } from "../components/FeaturedPost";
import { Title } from "../components/Title";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Rodap - Blog</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Blog
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 my-8 lg:my-16">
        {Array.from({ length: 12 }, (_, index) => (
          <Zoom key={index}>
            <Link href="#">
              <Box className="[&_.summary]:p-4">
                <FeaturedPost />
              </Box>
            </Link>
          </Zoom>
        ))}
      </Container>

      <Container className="my-16">
        <Zoom>
          <div className="w-full">
            <Button className="m-auto block">Ver mais</Button>
          </div>
        </Zoom>
      </Container>
    </>
  );
}
