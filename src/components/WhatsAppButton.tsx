import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";

export const WhatsAppButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5531993185969&text=Ol%C3%A1,%20estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20me%20ajudar%20a%20expandir%20meu%20neg%C3%B3cio."
      target="_blank"
      className="fixed z-50 cursor-pointer bg-[#00bb2d] hover:scale-110 text-gray-100 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 right-7 bottom-5 lg:right-14 lg:bottom-10"
    >
      <WhatsappLogo size={30} />
    </Link>
  );
};
