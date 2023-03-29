import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { BackdropProvider } from "../hooks/useBackdrop";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const pages = [
    { name: "Página Inicial", to: "/" },
    // { name: "Blog", to: "/blog" },
    { name: "Trabalhe conosco", to: "/trabalhe-conosco" },
    { name: "Contato", to: "/contato" },
    { name: "Nosso negócio", to: "/nosso-negocio" },
    { name: "Sobre", to: "/sobre-nos" },
    // { name: "Venda de veículos", to: "/venda-de-veiculos" },
    // { name: "Horários", to: "/horarios" },
    { name: "Serviços", to: "/servicos" },
  ];

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <BackdropProvider>
          <Container>
            <Navbar.Nav>
              {pages.map((page) => (
                <Navbar.Item key={page.name} name={page.name} to={page.to} />
              ))}
            </Navbar.Nav>
          </Container>
          <Component {...pageProps} />
          <WhatsAppButton />
          <ScrollTopButton />
          <Footer />
        </BackdropProvider>
      </SnackbarProvider>
    </>
  );
}
