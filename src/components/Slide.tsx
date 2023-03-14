import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide01Img from "../assets/our-business/1.webp";
import slide02Img from "../assets/our-business/2.webp";
import slide03Img from "../assets/our-business/3.webp";
import slide04Img from "../assets/our-business/4.webp";
import slide05Img from "../assets/our-business/5.webp";

export const Slide = () => {
  const slideImages = [
    {
      url: slide01Img,
    },
    {
      url: slide02Img,
    },
    {
      url: slide03Img,
    },
    {
      url: slide04Img,
    },
    {
      url: slide05Img,
    },
  ];

  return (
    <>
      <div className="mt-12">
        <Fade arrows={false} autoplay duration={10000} infinite indicators>
          {slideImages.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center bg-cover`}
            >
              <Image
                className="h-auto sm:h-[500px] w-full sm:w-auto"
                src={item.url}
                alt={"Item slide"}
                width={1280}
                height={768}
              />
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};
