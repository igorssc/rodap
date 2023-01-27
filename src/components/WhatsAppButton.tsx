import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";

export const WhatsAppButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5531991207600"
      target="_blank"
      className="fixed z-50 cursor-pointer bg-[#00bb2d] hover:scale-110 text-gray-100 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 right-7 bottom-5 lg:right-14 lg:bottom-10"
    >
      <WhatsappLogo size={30} />
    </Link>
  );
};
