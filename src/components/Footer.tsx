import Link from "next/link";
import { Banner } from "./Banner";

export const Footer = () => {
  return (
    <>
      <Banner className="py-7 flex flex-col gap-3 sm:gap-5 max-sm:text-xs">
        <span className="block text-center font-bold">
          Rua Ana Batista da Cruz, nº 850, Belo Vale - Santa Luzia/MG
        </span>
        <strong className="font-normal">
          © 2022 - {new Date().getFullYear()} - Rodap Transportes Coletivos
        </strong>
        <p>
          Desenvolvido por{" "}
          <Link
            href="https://igsdesign.com.br"
            className="font-bold uppercase"
            target="_blank"
          >
            IGS DESIGN
          </Link>
        </p>
      </Banner>
    </>
  );
};
