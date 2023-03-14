import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const top = 20;
  const [visible, setVisible] = useState(false);

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed z-50 cursor-pointer bg-primary hover:scale-110 text-gray-100 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all duration-300 right-7 bottom-20 md:bottom-[5.5rem] lg:right-14 lg:bottom-28 border border-white ${
        !visible && "opacity-0"
      }`}
    >
      <CaretUp className="w-10 h-10 md:w-12 md:h-12" />
    </div>
  );
};
