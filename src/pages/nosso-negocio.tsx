import Head from "next/head";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import LampImg from "../assets/lamp.svg";
import PuzzlePiecesImg from "../assets/puzzle-pieces.svg";
import TargetImg from "../assets/target.svg";
import TrophyImg from "../assets/trophy.svg";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Slide } from "../components/Slide";
import { Title } from "../components/Title";

export default function NossoNegocio() {
  return (
    <>
      <Head>
        <title>Rodap - Nosso negócio</title>
      </Head>

      <Banner>
        <Container>
          <Fade appear>
            <Title className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text-center">
              Nosso Negócio
            </Title>
          </Fade>
        </Container>
      </Banner>

      <Container className="my-8 lg:my-16 flex flex-col gap-4">
        <div className="flex max-lg:flex-col items-center justify-center gap-8 lg:gap-16">
          <Zoom bottom>
            <PuzzlePiecesImg className="w-full lg:w-[409px] h-auto" />
          </Zoom>
          <Fade cascade>
            <p className="text-justify flex-1">
              O Grupo Rodap é um empreendimento que se orgulha de seus
              princípios sólidos e políticas que dão suporte ao planejamento
              estratégico e visam o desenvolvimento de ações e projetos de longa
              duração e sustentáveis. Entendemos que a melhoria contínua da
              gestão é essencial para aumentar a satisfação dos colaboradores e
              da comunidade. Por isso, estamos sempre em busca de maneiras de
              melhorar nossos processos e aprimorar nossos serviços, para
              garantir que estamos sempre alcançando nossos objetivos e fazendo
              a diferença na vida das pessoas. Investimos em inovações e
              treinamento para nossos funcionários, e trabalhamos em estreita
              colaboração com nossos parceiros e fornecedores para assegurar que
              estamos oferecendo os melhores serviços possíveis. Nossa
              prioridade é sempre garantir a satisfação de nossos clientes e
              contribuir para o desenvolvimento da comunidade em que atuamos.
              <br />
              <br />
              Em 2022, revisamos o nosso Planejamento Estratégico e definimos as
              novas diretrizes que orientarão a nossa empresa para um propósito
              compartilhado, visando atingir os objetivos organizacionais até
              2025. Conheça agora a nossa visão, missão e valores; nossos
              objetivos e política da qualidade; e os nossos valores
              organizacionais:
            </p>
          </Fade>
        </div>

        <Fade bottom>
          <p className="my-4 sm:my-8 lg:my-16 !font-normal !normal-case italic !text-primary text-justify lg:text-center">
            &ldquo;Transportar pessoas com carinho, pontualidade e segurança é
            nossa missão. Garantir que cada viagem seja uma experiência
            agradável e segura é a nossa prioridade. Estamos sempre buscando a
            excelência através da gestão da qualidade, garantindo que todos os
            processos estejam de acordo com os requisitos e eficazes, para
            garantir a satisfação de nossos clientes e buscar a melhoria
            contínua.&rdquo;
          </p>
        </Fade>

        <div className="grid md:grid-cols-3 items-start gap-8">
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <TargetImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Missão</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                Transportar pessoas com qualidade, segurança e sustentabilidade
                é a nossa razão de existir. Acreditamos que o transporte público
                deve ser acessível e confiável para todos, e nos esforçamos
                diariamente para alcançar esses objetivos. Além disso,
                acreditamos que a inovação é fundamental para o sucesso de nossa
                empresa e buscamos sempre implementar novas tecnologias e
                práticas para melhorar nossos serviços e oferecer a melhor
                experiência para nossos clientes.
              </p>
            </Fade>
          </div>
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <LampImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Visão</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                Sermos referência em gestão de transportes de pessoas é o nosso
                objetivo maior. Queremos ser reconhecidos por nossos clientes
                como a melhor opção de transporte público, oferecendo serviços
                de qualidade, segurança e sustentabilidade. Além disso, buscamos
                ser líderes em inovação e tecnologia, sempre buscando
                implementar soluções que melhorem a experiência do usuário e
                tornem o transporte público ainda mais acessível e confiável.
                Queremos ser uma empresa responsável e comprometida com a
                comunidade, que contribua para o desenvolvimento econômico e
                social da região onde atuamos. Nossa visão é ser uma empresa
                respeitada e admirada por todos os stakeholders.
              </p>
            </Fade>
          </div>
          <div className="flex items-center justify-center gap-8 flex-col">
            <Zoom>
              <TrophyImg />
            </Zoom>
            <Fade>
              <Title asChild scheme="tertiary" className="!text-xl">
                <h3>Valores</h3>
              </Title>
            </Fade>
            <Fade bottom>
              <p className="text-justify">
                O compromisso com a qualidade dos serviços prestados aos
                clientes é a base de tudo o que fazemos. Também valorizamos a
                integração, aproximação, capacitação e desenvolvimento de nossos
                funcionários, pois acreditamos que eles são a chave para o
                sucesso da empresa. Além disso, buscamos manter relações
                harmônicas com os públicos de relacionamento, promover ações
                visando a sustentabilidade e garantir o retorno do capital
                investido aos cotistas. Acreditamos que esses valores são
                fundamentais para o crescimento e sucesso de nossa empresa.
              </p>
            </Fade>
          </div>
        </div>

        <Zoom>
          <Slide />
        </Zoom>

        <Fade cascade>
          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Pessoas</h2>
          </Title>
          <div>
            <p className="text-justify">
              A Rodap tem como filosofia empresarial a prestação de serviços de
              transporte de passageiros com segurança, conforto e pontualidade,
              conforme estabelecido pelos órgãos gestores. Para isso, a empresa
              trabalha orientada para o profissionalismo, integração,
              disciplina, qualidade, atualização tecnológica e reciclagem de
              pessoal, fatores que representam à essência dos nossos valores.
            </p>
          </div>
          <div>
            <p className="text-justify">
              A satisfação dos clientes é uma preocupação diária da Rodap e
              sabemos que o atendimento é o verdadeiro diferencial na prestação
              de serviços. Nosso Grupo considera seu capital humano um item
              decisivo para o alcance deste objetivo e o sucesso de suas
              empresas e, por isso, realiza constantemente capacitações para
              qualificar ainda mais seus funcionários.
            </p>
          </div>
          <div>
            <p className="text-justify">
              Nossos programas estão voltados para as reais necessidades do
              Grupo e seus diferentes setores, além de satisfazer as exigências
              do mercado. Procuramos aperfeiçoar, treinar, reciclar e motivar
              nossos funcionários para que, juntos, possamos proporcionar um
              excelente atendimento aos nossos clientes.
            </p>
          </div>
          <div>
            <p className="text-justify">
              O Grupo possui o programa CapacitAÇÃO que é composto por diversos
              treinamentos dentro do Programa Anual de Treinamento – PAT,
              construído através do Levantamento de Necessidades de Treinamento
              – LNT de cada unidade. As prioridades de treinamentos são
              orientadas pelos planos de ação definidos no planejamento
              estratégico.
            </p>
          </div>
          <div>
            <p className="text-justify">
              Entre os diversos treinamentos oferecidos aos funcionários do
              Grupo podemos citar:
            </p>
          </div>
          <ul className="list-disc my-4 text-justify ml-5">
            <li>
              Treinamento Introdutório e de Integração, responsável por
              ambientar e capacitar o novo funcionário à rotina da empresa;
            </li>
            <li>
              Treinamentos voltados para a melhoria na gestão, que incluem
              Métodos de Análise de Solução de Problemas (MASP) e Mapeamento de
              Competências;
            </li>
            <li>
              Treinamentos voltados às equipes operacionais, que incluem, dentre
              outros, o Programa de Condução Inteligente (PCI), cujo objetivo é
              melhorar a satisfação dos motoristas com menor desgaste físico,
              reduzir o impacto ambiental e o consumo de óleo diesel, melhorar a
              qualidade do serviço prestado através da direção mais segura. Para
              incentivar a participação dos operadores, os participantes recebem
              prêmios mensais sempre que as metas são alcançadas;
            </li>
            <li>
              Treinamentos voltados para segurança, preservação da saúde física,
              mental e qualidade de vida do trabalhador;
            </li>
            <li>
              Programas de promoção interna, que buscam oferecer oportunidades
              de crescimento aos profissionais que já atuam no Grupo;
            </li>
            <li>
              Programas voltados para a melhoria na gestão, como por exemplo, o
              Programa de Desenvolvimento de Líderes (PDL);
            </li>
            <li>
              Treinamentos voltados para a melhoria na qualidade do atendimento
              entre os setores como o de Qualidade no Atendimento interno.
            </li>
          </ul>
        </Fade>

        <Fade cascade>
          <Title
            asChild
            scheme="tertiary"
            className="!text-xl sm:!text-2xl mt-4 sm:mt-8"
          >
            <h2>Meio ambiente</h2>
          </Title>
          <Title
            asChild
            scheme="tertiary"
            className="!text-sm sm:!text-lg !font-medium mt-3"
          >
            <h3>Sistema de Gestão Ambiental – SGA</h3>
          </Title>
          <div>
            <p className="text-justify">
              A Rodap tem inserido em seu Planejamento Estratégico a promoção da
              sustentabilidade, aliadas ao desenvolvimento da mobilidade urbana
              nos municípios em que atua. O Grupo realiza programas de controle
              e monitoramento ambiental. Essas ações têm como objetivo buscar a
              melhoria na qualidade de vida de seus funcionários, usuários do
              transporte e municípios atendidos, além de atender a legislação
              ambiental em vigor.
            </p>
          </div>
          <Title
            asChild
            scheme="tertiary"
            className="!text-sm sm:!text-lg !font-medium mt-4"
          >
            <h3>Programas ambientais adotados</h3>
          </Title>
          <ul className="list-disc my-4 flex flex-col gap-4 text-justify ml-5">
            <li>
              <strong>Gerenciamento de Resíduos Sólidos -</strong> Para resíduos
              perigosos, o Grupo Rodap possui contrato com empresas
              especializadas e licenciadas para coleta, transporte, tratamento e
              destinação final. Já para resíduos sólidos recicláveis e comuns,
              os colaboradores recebem orientações para a realização da coleta
              seletiva.
            </li>
            <li>
              <strong>Monitoramento de Efluentes Líquidos -</strong> Inseridas
              no Programa de Recebimento e Controle dos Efluentes Não Domésticos
              (PRECEND), as empresas do Grupo Rodap atendem as Normas Técnicas
              da Companhia de Saneamento de Minas Gerais (COPASA/MG). As
              unidades possuem o sistema de drenagem dos efluentes não
              domésticos totalmente separados da drenagem dos efluentes
              domésticos e das águas pluviais. Realizam em prazos determinados
              pela COPASA os automonitoramentos dos parâmetros físico-químicos
              antes do lançamento dos efluentes à rede pública coletora. Além
              disso, as empresas possuem aparelhagem moderna para reciclagem dos
              efluentes gerados na lavagem de veículos. Os equipamentos das
              Estações de Tratamento de Esgoto (ETE’s) acoplados ao lava-jato
              das unidades tratam 100% da água utilizada no processo e as
              reutilizam.
            </li>
            <li>
              <strong>Monitoramento de Emissões Atmosféricas -</strong> As
              instalações do Sistema de Armazenamento Aéreo de Combustível –
              SAAC das unidades possuem instalados equipamentos para o controle
              de vapores. Nesse programa ainda, é realizado o Projeto Despoluir
              – Programa Ambiental do Transporte, da Confederação Nacional do
              Transporte (CNT), onde a emissão de poluentes por veículos
              automotores são monitorados.
            </li>
            <li>
              <strong>Prêmio FRETRAM de Qualidade do Ar -</strong> Em junho de
              2022, o Grupo Rodap recebeu o Prêmio FRETRAM de Qualidade do Ar. A
              empresa foi reconhecida como uma das organizações do setor de
              transporte que se destacou durante todo o ano de 2021 no uso
              racional de combustível e na baixa de emissão de poluentes pelos
              veículos, através de sua participação no Programa Despoluir,
              coordenado pela Federação das Empresas de Transporte de
              Passageiros do Estado de Minas Gerais (FETRAM).
            </li>
            <li>
              <strong>Boas Práticas Ambientais –</strong> Os funcionários
              recebem orientações e treinamentos constantes sobre as questões
              ambientais, como sobre a preservação dos recursos naturais, o
              controle da poluição, da promoção da sustentabilidade. Dentre as
              informações disponíveis encontra-se a utilização consciente da
              água e energia. Anualmente, realizamos a Semana do Meio Ambiente e
              contamos com participação dos colaboradores em um projeto amplo e
              de muita aprendizagem sobre o tema.
            </li>
            <li>
              <strong>Frota menos poluente –</strong> A empresa conta com
              auto-monitoramento da frota (teste de opacidade) para averiguar a
              emissão de poluentes no meio ambiente, com o objetivo de
              controlá-los.
            </li>
            <li>
              <strong>Geramos nossa própria energia –</strong> Contamos com
              usina de energia solar fotovoltaica. Através da radiação solar,
              geramos energia renovável e limpa, o que consequentemente
              contribui com a sustentabilidade do planeta.
            </li>
          </ul>
        </Fade>
      </Container>
    </>
  );
}
