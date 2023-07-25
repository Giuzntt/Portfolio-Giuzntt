import Image from "next/image";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaReact,
  FaMale,
} from "react-icons/fa";
import { Button, Timeline, Tooltip } from "flowbite-react";
import Link from "next/link";
import Card from "@/components/Card";
import {
  SiAuth0,
  SiCsharp,
  SiFigma,
  SiGit,
  SiJavascript,
  SiJest,
  SiMaterialdesign,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { HomePageType } from "@/types/page-info";
import { RichText } from "@/components/rich-text";

const getPageData = async () => {
  const query = `
    query Assets {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    knowTechs {
      iconSvg
      name
      startDate
    }
    techonologies {
      name
    }
  }
}
  `;

  return fetchHygraphQuery(query);
};

export default function Home({ pageData }: HomePageType) {
  const { introduction, knowTechs, techonologies } = pageData.page;
  console.log(pageData);

  return (
    <>
      <Head>
        <title>Meu Portifolio</title>
      </Head>

      <main
        className=" flex flex-col items-center justify-center w-full h-full 
         bg-gradient-to-r from-cornflower-blue to-periwinkle-blue  bg-no-repeat bg-cover mt-5

      
      "
      >
        <section
          className="container pt-10   md:pt-0 sm:pt-16 2xl:pt-16 mx-auto  w-full h-full sm:mt-5
        
        "
        >
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2
                  className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl
                  text-gray-50
                "
                >
                  Olá 👋 <br className="block sm:hidden" />
                  <span className="relative text-md inline-block">
                    Meu nome é Giulianno
                  </span>
                </h2>
                <div
                  className="max-w-lg mt-3 text-2xl leading-relaxed  md:mt-8 text-gray-50 font-light
                "
                >
                  <RichText content={introduction.raw} />
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] my-3">
                  {techonologies?.map((tech) => (
                    <Badge key={tech.name} className="text-gray-50 bg-blue-400">
                      {tech.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 items-center justify-start ">
                  <Tooltip content="Github" placement="bottom">
                    <Link href="https://www.github.com/Giuzntt" target="_blank">
                      <FaGithub className="text-4xl text-gray-50 cursor-pointer hover:text-gray-950 transition-all duration-200" />
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn" placement="bottom">
                    <Link
                      href="https://www.linkedin.com/in/giulianno-zanetti/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-4xl text-gray-50 cursor-pointer hover:text-linkedin-blue transition-all duration-200" />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Meu Currículo" placement="bottom">
                    <Link
                      href="https://drive.google.com/file/d/1JorcAk_RnvzfQC3d6QVdcq4GR64jJ1eg/view?usp=sharing"
                      target="_blank"
                    >
                      <FaFilePdf className="text-4xl text-gray-50 cursor-pointer hover:text-red-600 transition-all duration-200" />
                    </Link>
                  </Tooltip>
                </div>

                <div className="w-full flex justify-start mt-5  flex-col">
                  <h3 className="text-2xl  leading-tight text-white font-semibold">
                    Me mande um e-mail
                  </h3>

                  <button className="w-full  bg-white text-cornflower-blue font-bold rounded-lg px-4 py-2 mt-5 transition duration-300 ease-in-out hover:bg-gray-200 mr-6 uppercase relative">
                    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                      <AiOutlineMail />
                    </span>
                    giuzntt@gmail.com
                  </button>
                </div>
              </div>

              <div className="relative">
                <Image
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
                  src="/blob_indigo.svg"
                  alt=""
                  width={400}
                  height={300}
                />
                <Image
                  className="absolute inset-x-0 bottom-0  -translate-x-1/2 left-1/2"
                  src="/giulianno.png"
                  alt=""
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 64H48C96 64 192 64 288 53.3C384 43 480 21 576 37.3C672 53 768 107 864 117.3C960 128 1056 96 1152 80C1248 64 1344 64 1392 64H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V64Z"
          fill="url(#paint0_linear_4_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4_3"
            x1="720"
            y1="0"
            x2="720"
            y2="119.445"
            gradientUnits="userSpaceOnUse"
          >
            AEB8FE
            <stop stopColor="#8E9FFD" />
            <stop offset="1" stopColor="#8E9FFD" />
          </linearGradient>
        </defs>
      </svg>

      <section className="bg-gray-50 w-full h-full my-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Projetos em destaque" />
          <HorizontalDivider className="mb-16" />

          <div>
            <ProjectCard
              title="Feneco Talent"
              src="feneco.jpg"
              description="Plataforma de gerenciamento de talentos, onde é possível criar um perfil, adicionar projetos e habilidades, e se conectar com outros usuários."
              badges={[
                {
                  icon: <FaReact className="text-xl" />,
                  nameIcon: "React",
                },
                {
                  icon: <SiMaterialdesign className="text-xl" />,
                  nameIcon: "Material UI",
                },
                {
                  icon: <SiTypescript className="text-xl" />,
                  nameIcon: "Typescript",
                },
              ]}
              linkRepository="https://feneco.vercel.app/"
              linkGithub="https://github.com/Giuzntt/Feneco"
            />
            <HorizontalDivider className="mb-16" />
            <ProjectCard
              title="MINHAS .HQS"
              src="minhasHQS.jpg"
              description="Aplicação web que consome a API da Marvel, onde é possível pesquisar por personagens e HQ's, e adicionar HQ's aos favoritos."
              badges={[
                {
                  icon: <FaReact className="text-xl" />,
                  nameIcon: "React",
                },
                {
                  icon: <SiRedux className="text-xl" />,
                  nameIcon: "Redux",
                },
                {
                  icon: <SiTailwindcss className="text-xl" />,
                  nameIcon: "TailwindCSS",
                },
                {
                  icon: <SiTypescript className="text-xl" />,
                  nameIcon: "Typescript",
                },
              ]}
              linkRepository="https://desafio-m-ind-thru.vercel.app/"
              linkGithub="https://github.com/Giuzntt/Desafio-MIndThru"
            />

            <HorizontalDivider className="mb-16" />

            <ProjectCard
              title="Easy Courrier"
              src="easyCourrier2.jpg"
              description="Desafio Processo Seletivo: Buscar o rastreio  de uma encomenda e exibir o status atual via API REST."
              badges={[
                {
                  icon: <FaReact className="text-xl" />,
                  nameIcon: "React",
                },
                {
                  icon: <SiStyledcomponents className="text-xl" />,
                  nameIcon: "Styled Components",
                },
                {
                  icon: <FaReact className="text-xl" />,
                  nameIcon: "Context API",
                },
                {
                  icon: <SiTypescript className="text-xl" />,
                  nameIcon: "Typescript",
                },
                {
                  icon: <SiReactrouter className="text-xl" />,
                  nameIcon: "React Router",
                },
              ]}
              linkRepository="https://projeto-easy-courrier.vercel.app/"
              linkGithub="https://github.com/Giuzntt/Projeto-Easy-Courrier"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 w-full h-full my-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Conhecimentos" />

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-1 
          
          gap-5 mt-8"
          >
            {/* create card */}
            <Card
              icon={<FaReact className="text-4xl text-blue-500 mx-auto mt-5" />}
              skill="React"
              time="+2 anos de experiência"
            />
            <Card
              icon={<SiRedux className="text-4xl text-redux mx-auto mt-5" />}
              skill="Redux"
              time="+2 anos de experiência"
            />
            <Card
              icon={
                <SiNextdotjs className="text-4xl text-gray-950 mx-auto mt-5" />
              }
              skill="Next.js"
              time="+1 ano de experiência"
            />
            <Card
              icon={
                <SiTypescript className="text-4xl text-blue-400 mx-auto mt-5" />
              }
              skill="Typescript"
              time="+2 anos de experiência"
            />
            <Card
              icon={
                <SiJavascript className="text-4xl text-yellow-300 mx-auto mt-5" />
              }
              skill="Javascript"
              time="+2 anos de experiência"
            />
            <Card
              icon={
                <SiTailwindcss className="text-4xl text-cyan-300 mx-auto mt-5" />
              }
              skill="TailwindCSS"
              time="+1 ano de experiência"
            />

            <Card
              skill="GIT"
              time="+2 anos de experiência"
              icon={<SiGit className="text-4xl text-orange-400 mx-auto mt-5" />}
            />

            <Card
              icon={<SiMysql className="text-4xl text-gray-950 mx-auto mt-5" />}
              skill="MySQL"
              time="+1 ano de experiência"
            />
            <Card
              icon={
                <SiPython className="text-4xl text-gray-950 mx-auto mt-5" />
              }
              skill="Python"
              time="+1 ano de experiência"
            />
            <Card
              icon={
                <SiPostgresql className="text-4xl text-gray-950 mx-auto mt-5" />
              }
              skill="PostgreSQL"
              time="+1 ano de experiência"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 w-full h-full my-5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Experiência Profissional" />
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Dezembro de 2022 - Maio de 2023</Timeline.Time>
                <Timeline.Title>INTRABANK - Desenvolvedor JR.</Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-500 text-lg leading-7">
                    Contribui com o desenvolvimento de uma plataforma de gestão
                    de processos de análise de crédito, seguindo em visões de
                    Compliance, Comercial e Crédito. A automação das etapas do
                    processo de análise de crédito, desde a coleta de
                    informações até a avaliação de risco e a aprovação de
                    crédito. Incluindo contribui na integração de um OCR que
                    atualizava e acompanhava em tempo real o processamento dos
                    arquivos.
                    <br />
                  </p>
                  <h4 className=" text-lg leading-7 mt-5 font-medium text-gray-950 mb-3">
                    Tecnologias Utilizadas:
                  </h4>

                  <div className="flex flex-wrap gap-2 ">
                    <Badge icon={<FaReact className="text-xl" />}>
                      React.JS
                    </Badge>
                    <Badge icon={<SiRedux className="text-xl" />}>
                      Redux.js
                    </Badge>
                    <Badge icon={<SiTailwindcss className="text-xl" />}>
                      TailwindCSS
                    </Badge>
                    <Badge icon={<SiTypescript className="text-xl" />}>
                      Typescript
                    </Badge>
                    <Badge icon={<SiJavascript className="text-xl" />}>
                      Javascript
                    </Badge>
                    <Badge icon={<SiPostgresql className="text-xl" />}>
                      PostgreSQL
                    </Badge>
                    <Badge icon={<SiReactquery className="text-xl" />}>
                      React Query (Cache)
                    </Badge>
                    <Badge icon={<SiAuth0 className="text-xl" />}>Auth0</Badge>
                    <Badge icon={<SiCsharp className="text-xl" />}>C#</Badge>
                    <Badge icon={<SiJest className="text-xl" />}>Jest</Badge>
                    <Badge icon={<SiFigma className="text-xl" />}>Figma</Badge>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Junho de 2022 - Dezembro de 2022</Timeline.Time>
                <Timeline.Title>MANAGEMENT SOLUTIONS -Trainee</Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-500 text-lg leading-7">
                    A utilização do Python para processamento e análise de dados
                    com persistência SQL. A criação de uma interface gráfica em
                    ReactJS.
                    <br />
                  </p>
                  <h4 className=" text-lg leading-7 mt-5 font-medium text-gray-950 mb-3">
                    Tecnologias Utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2 ">
                    <Badge icon={<FaReact className="text-xl" />}>
                      React.JS
                    </Badge>

                    <Badge icon={<SiPython className="text-xl" />}>
                      Python
                    </Badge>
                    <Badge icon={<SiJavascript className="text-xl" />}>
                      Javascript
                    </Badge>
                    <Badge icon={<SiSqlite className="text-xl" />}>
                      SQLite
                    </Badge>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Outubro de 2021 - Abril de 2022</Timeline.Time>
                <Timeline.Title>
                  GRUPO MULTIPLICA - Estágio em Desenvolvimento Front-end
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-500 text-lg leading-7">
                    Contribui na construção de um sistema para a automação de
                    processos internos da empresa.
                    <br />
                  </p>
                  <h4 className=" text-lg leading-7 mt-5 font-medium text-gray-950 mb-3">
                    Tecnologias Utilizadas:
                  </h4>

                  <div className="flex flex-wrap gap-2 ">
                    <Badge icon={<FaReact className="text-xl" />}>
                      React.JS
                    </Badge>
                    <Badge icon={<SiRedux className="text-xl" />}>
                      Redux.js
                    </Badge>
                    <Badge icon={<SiTailwindcss className="text-xl" />}>
                      TailwindCSS
                    </Badge>
                    <Badge icon={<SiTypescript className="text-xl" />}>
                      Typescript
                    </Badge>
                    <Badge icon={<SiJavascript className="text-xl" />}>
                      Javascript
                    </Badge>
                    <Badge icon={<SiReacthookform className="text-xl" />}>
                      React Hook Form
                    </Badge>
                    <Badge icon={<SiJest className="text-xl" />}>Jest</Badge>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Agosto de 2021 - Outubro de 2021</Timeline.Time>
                <Timeline.Title>FIAP - Estágio em Suporte de TI</Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-500 text-lg leading-7">
                    Estagio na área de monitoria, onde auxiliava os professores
                    durante as aulas e prestava suporte no funcionamento das
                    máquinas dos laboratórios.
                    <br />
                  </p>
                  <h4 className=" text-lg leading-7 mt-5 font-medium text-gray-950 mb-3">
                    Tecnologias Utilizadas:
                  </h4>

                  <div className="flex flex-wrap gap-2 ">
                    <Badge>Nenhuma</Badge>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await getPageData();
  console.log(response);

  return {
    props: {
      pageData: response,
    },
  };
}
