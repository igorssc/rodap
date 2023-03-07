import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, X } from "phosphor-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import logoWhiteImg from "../assets/logo-branca.webp";
import logoImg from "../assets/logo.webp";

interface NavbarComponentProps {
  children: ReactNode;
}

const NavbarComponent = ({ children }: NavbarComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [isOpenBackdrop, setIsOpenBackdrop] = useState(false);

  useEffect(() => {
    setIsOpenMenuMobile(false);
  }, [router?.pathname]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowY = !isOpenMenuMobile
      ? "visible"
      : "hidden";

    setTimeout(() => setIsOpenBackdrop(isOpenMenuMobile), 50);
  }, [isOpenMenuMobile]);

  const handleWindowResize = () => {
    const windowWidth = document.querySelector("html")?.clientWidth || 0;

    if (windowWidth < 1024) {
      setIsMobile(true);
    }
    if (windowWidth >= 1024) {
      setIsMobile(false);
    }
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
        className="fixed z-[99998] top-0 inset-x-0 lg:static bg-primary border-b-2 border-white lg:border-0 lg:bg-transparent flex flex-row items-center justify-between py-3 px-5 lg:px-0 lg:py-14"
        ref={ref}
      >
        <Link href="/">
          <Image
            src={isMobile ? logoWhiteImg : logoImg}
            alt="Logo from Rodap"
            priority
            className="h-7 lg:h-10 w-auto"
          />
        </Link>
        <ul className="flex-row gap-4 items-center justify-center hidden lg:flex">
          {children}
        </ul>
        <List
          size={32}
          color="#ffffff"
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpenMenuMobile(true)}
        />
        <div
          className={clsx(
            "absolute lg:hidden h-screen top-0 z-[99999] text-white bg-primary transition-all duration-500 px-4 pt-4 w-[220px] max-w-full",
            isOpenMenuMobile ? "left-0" : "-left-full"
          )}
        >
          <X
            size={32}
            color="#ffffff"
            className="ml-auto cursor-pointer"
            onClick={() => setIsOpenMenuMobile(false)}
          />
          <ul className="flex flex-col gap-4 items-start">{children}</ul>
        </div>
        {isOpenMenuMobile && (
          <div
            className={clsx(
              "absolute inset-x-0 top-0 h-screen transition-all duration-300 block lg:hidden",
              isOpenBackdrop
                ? "z-[99997] bg-black/50 opacity-100"
                : "bg-transparent opacity-0 -z-50"
            )}
            onClick={() => setIsOpenMenuMobile(false)}
          ></div>
        )}
      </div>
      <div className="mb-[58px] lg:hidden"></div>
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
              "text-white lg:text-primary font-light lg:font-medium underline underline-offset-4",
            "hover:text-white lg:hover:text-primary"
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
