import Image, { StaticImageData } from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

interface GalleryProps {
  items: {
    original: StaticImageData | string;
    thumbnail: StaticImageData | string;
  }[];
}

export const Gallery = ({ items }: GalleryProps) => {
  const [dimensionItem, setDimensionItem] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-ignore:next-line
      lightbox = null;
    };
  }, []);

  const handleWindowResize = () => {
    const itemWidth =
      document.querySelector("#gallery")?.children[0]?.clientWidth;

    setDimensionItem({ width: itemWidth || 0, height: (itemWidth || 0) * 0.8 });
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        id="gallery"
        className="grid gap-3 justify-center items-center grid-cols-2 lg:grid-cols-4 lg:gap-6 w-full"
      >
        {items.map((item, index) => (
          <Fade appear cascade key={"gallery" + "-" + index}>
            <a
              href={
                typeof item.original === "string"
                  ? item.original
                  : item.original.src
              }
              data-pswp-width={1080}
              data-pswp-height={864}
              target="_blank"
              rel="noreferrer"
              className="flex relative rounded cursor-pointer border-4 border-white m-auto w-full hover:scale-[1.02] transition-all"
              style={{ height: dimensionItem.height }}
            >
              <Image
                src={
                  typeof item.thumbnail === "string"
                    ? item.thumbnail
                    : item.thumbnail.src
                }
                alt="gallery item"
                loading="lazy"
                fill
              />
            </a>
          </Fade>
        ))}
      </div>
    </>
  );
};
