import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { FeaturedPost } from "../components/FeaturedPost";
import { Title } from "../components/Title";

export default function Blog() {
  return (
    <>
      <Banner>
        <Container>
          <Title className="text-2xl text-center">Blog</Title>
        </Container>
      </Banner>

      <Container className="grid grid-cols-3 gap-10 my-14">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="">
            <FeaturedPost />
          </div>
        ))}
      </Container>
    </>
  );
}
