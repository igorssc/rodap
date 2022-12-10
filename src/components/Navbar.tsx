import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import logoImg from "../assets/logo.png";

interface NavbarComponentProps {
  children: ReactNode;
}

const NavbarComponent = ({ children }: NavbarComponentProps) => {
  return (
    <>
      <div className="flex flex-row justify-between pages-center py-14">
        <Image src={logoImg} alt="Logo from Rodap" priority />
        <ul className="flex flex-row gap-4">{children}</ul>
      </div>
    </>
  );
};

interface NavbarItemProps {
  name: string;
  to: string;
}

const NavbarItem = ({ name, to }: NavbarItemProps) => {
  const { pathname } = useRouter();

  return (
    <>
      <Link href={to}>
        <li
          className={clsx(
            pathname == to &&
              "text-primary font-medium underline underline-offset-4",
            "hover:text-primary"
          )}
        >
          {name}
        </li>
      </Link>
    </>
  );
};

export const Navbar = {
  Nav: NavbarComponent,
  Item: NavbarItem,
};
