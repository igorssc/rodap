import Link from "next/link";
import { Banner } from "./Banner";

export const Footer = () => {
  return (
    <>
      <span className="block text-center my-8 font-bold">
        Rua Ana Batista da Cruz, nº 850, Belo Vale - Santa Luzia/MG
      </span>
      <Banner className="py-7 flex flex-col gap-5">
        <strong className="font-normal">
          © 2022 - Rodap Transportes Coletivos
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
