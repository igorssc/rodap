import Link from "next/link";
import { Banner } from "./Banner";

export const Footer = () => {
  return (
    <>
      <Banner className="py-7 flex flex-col gap-3 sm:gap-5 max-sm:text-xs">
        <span className="block text-center font-bold">
          Rua Ana Batista da Cruz, nº 850, Belo Vale - Santa Luzia/MG
        </span>
        <p>
          <span className="font-bold">SAC</span>{" "}
          <Link href="tel:0800 941 9680">0800 941 9680</Link>
        </p>
        <div className="">
          <Link
            href="http://189.112.2.95:8081/TeminalWeb/Login.aspx?ReturnUrl=%2fTeminalWeb"
            target="_blank"
          >
            Área do funcionário
          </Link>{" "}
          -{" "}
          <Link href="http://webmail.rodap.com.br/" target="_blank">
            Webmail
          </Link>
        </div>
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
        <strong className="font-normal">
          © 2022 - {new Date().getFullYear()} - Rodap Transportes Coletivos
        </strong>
      </Banner>
    </>
  );
};
