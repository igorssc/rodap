import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, X } from "phosphor-react";
import { ReactNode, useEffect, useState } from "react";
import logoImg from "../assets/logo.png";

interface NavbarComponentProps {
  children: ReactNode;
}

const NavbarComponent = ({ children }: NavbarComponentProps) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [router?.pathname]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowY = !isOpen
      ? "visible"
      : "hidden";
  }, [isOpen]);

  return (
    <>
      <div>
        <div className="fixed z-[99998] top-0 inset-x-0 md:relative bg-primary md:bg-transparent flex flex-row items-center justify-between py-2 px-5 md:px-0 md:py-14">
          <Image
            src={logoImg}
            alt="Logo from Rodap"
            priority
            className="h-7 md:h-10 w-auto"
          />
          <ul className="flex-row gap-4 items-center justify-center hidden md:flex">
            {children}
          </ul>
          <List
            size={32}
            color="#ffffff"
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <div
            className={clsx(
              "absolute md:hidden h-screen top-0 z-[99999] text-white bg-primary transition-all duration-200 px-4 pt-4 w-[220px] max-w-full",
              isOpen ? "left-0" : "-left-full"
            )}
          >
            <X
              size={32}
              color="#ffffff"
              className="ml-auto"
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-4 items-start">{children}</ul>
          </div>
          <div
            className={clsx(
              "absolute inset-x-0 top-0 h-screen transition-all duration-500 block md:hidden",
              isOpen
                ? "z-[99997] bg-black/50 opacity-100 delay-100"
                : "bg-transparent opacity-0 -z-50"
            )}
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
        <div className="mb-[48px] md:hidden"></div>
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
              "text-white md:text-primary font-medium underline underline-offset-4",
            "hover:text-white md:hover:text-primary"
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
