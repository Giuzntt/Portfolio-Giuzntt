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
import { ButtonCopy } from "@/components/Button";
import { SocialIcon } from "@/components/SocialIcon";

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
    technologies {
      name
    }
    socials {
      name
      url
      iconSvg
    }
    profilePicture {
      url
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
      sections {
        image {
          url
        }
      }
      gitHubUrl
      liveProjectUrl
    }
  }
}

  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default function Home({ pageData }: HomePageType) {
  const {
    introduction,
    knowTechs,
    technologies,
    socials,
    profilePicture,
    highlightProjects,
  } = pageData.page;
  console.log(highlightProjects);

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
                  {technologies?.map((tech) => (
                    <Badge key={tech.name} className="text-gray-50 bg-blue-400">
                      {tech.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 items-center justify-start ">
                  {socials?.map((social) => (
                    <SocialIcon
                      key={`social-${social.name}`}
                      nameSocial={social.name}
                      icon={social.iconSvg}
                      target="_blank"
                      href={social.url}
                      placement="bottom"
                    />
                  ))}
                </div>

                <div className="w-full flex justify-start mt-5  flex-col">
                  <h3 className="text-2xl  leading-tight text-white font-semibold">
                    Me mande um e-mail
                  </h3>

                  <ButtonCopy icon={<AiOutlineMail />} copy="giuzntt@gmail.com">
                    giuzntt@gmail.com
                  </ButtonCopy>
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
                  src={profilePicture.url}
                  alt="Profile Image of Giulianno"
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
            {highlightProjects?.map((project) => (
              <>
                <ProjectCard
                  key={`project-${project.title}`}
                  title={project.title}
                  src={project.thumbnail.url}
                  description={project.shortDescription}
                  badges={project.technologies.map((tech) => ({
                    icon: <FaReact className="text-xl" />,
                    nameIcon: tech.name,
                  }))}
                  linkRepository={project.gitHubUrl}
                  linkGithub={project.liveProjectUrl}
                />
                <HorizontalDivider className="mb-16" />
              </>
            ))}
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
            {knowTechs?.map((tech) => (
              <Card
                key={tech.name}
                icon={tech.iconSvg}
                skill={tech.name}
                time={tech.startDate}
              />
            ))}
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
