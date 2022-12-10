import type { AppProps } from "next/app";
import { Container } from "../components/Container";
import { Divider } from "../components/Divider";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const pages = [
    { name: "Página Inicial", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "Trabalhe conosco", to: "/trabalhe-conosco" },
    { name: "Contato", to: "/contato" },
    { name: "Sobre", to: "/sobre" },
    { name: "Venda de veículos", to: "/venda-de-veiculos" },
    { name: "Horários", to: "/horarios" },
    { name: "Serviços", to: "/servicos" },
  ];

  return (
    <>
      <Container>
        <Navbar.Nav>
          {pages.map((page) => (
            <Navbar.Item key={page.name} name={page.name} to={page.to} />
          ))}
        </Navbar.Nav>
      </Container>
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </>
  );
}
