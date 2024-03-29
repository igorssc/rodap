import clsx from "clsx";
import Image from "next/image";
import { Clock } from "phosphor-react";
import { Title } from "./Title";

interface FeaturedPostProps {
  isSummary?: boolean;
}

export const FeaturedPost = ({ isSummary = false }: FeaturedPostProps) => {
  return (
    <>
      <Image
        src="https://picsum.photos/400/300"
        width={400}
        height={300}
        alt="Imagem de destaque do Post"
        className={clsx("object-center rounded min-w-full object-cover")}
      />
      <div
        className={clsx(
          "flex flex-col md:gap-0 justify-between summary",
          isSummary ? "gap-2 md:gap-4" : "gap-4"
        )}
      >
        <Title
          scheme="tertiary"
          className={clsx(
            "normal-case !font-bold",
            isSummary ? "!text-base md:!text-lg" : "!text-xl md:!text-2xl"
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing el...
        </Title>
        {!isSummary && (
          <>
            <span className={clsx("text-gray-500")}>Igor Santos</span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget ante a tortor luctus elementum in vitae purus.
              Morbi semper augue ut fringilla venenatis. Donec ut mi eget sem
              congue faucibus.
            </p>
          </>
        )}
        <div
          className={clsx("flex gap-4 items-center", isSummary && "text-xs")}
        >
          <Clock size={isSummary ? 18 : 24} className="text-gray-500" />
          <span className="text-gray-500">12/12/2022 23h00</span>
        </div>
      </div>
    </>
  );
};
