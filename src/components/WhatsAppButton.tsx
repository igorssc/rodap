import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import melImg from "../assets/mel.webp";

export const WhatsAppButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5531999056065"
      target="_blank"
      className="fixed flex z-50 cursor-pointer hover:scale-110 transition-all duration-300 right-3 bottom-2 md:right-7 md:bottom-5 lg:right-14 lg:bottom-10 gap-4 bg-white rounded-full border-[#00bb2d] border-2"
    >
      <div className="flex justify-center items-center gap-4">
        <Image
          src={melImg}
          className="w-8 h-8 md:w-10 md:h-10 ml-4"
          alt="mel icon"
        />
        Fale com a Mel
      </div>
      <div className="bg-[#00bb2d] text-gray-100 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full">
        <WhatsappLogo className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </Link>
  );
};
