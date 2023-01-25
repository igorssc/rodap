import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FeaturedPost } from "../components/FeaturedPost";
import { Title } from "../components/Title";

export default function Blog() {
  return (
    <>
      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-4xl text-center">Blog</Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="grid grid-cols-3 gap-10 my-16">
        {Array.from({ length: 6 }, (_, index) => (
          <Zoom key={index}>
            <FeaturedPost />
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
