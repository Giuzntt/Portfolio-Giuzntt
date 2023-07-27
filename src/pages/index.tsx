import Image from "next/image";
import Head from "next/head";
import { FaReact } from "react-icons/fa";
import { Timeline } from "flowbite-react";
import Link from "next/link";
import Card from "@/components/Card";
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
import { ExperienceItem } from "@/components/ExperienceItem";

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
  workExperiences {
    companyName
    companyUrl
    endDate
    startDate
    description {
      raw
    }
    role
    technologies {
      name
    }
    companyLogo {
      id
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
  const { workExperiences } = pageData;

  console.log(
    "🚀 ~ file: index.tsx:115 ~ Home ~ workExperiences:",
    workExperiences
  );

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
          <div className="flex items-center justify-between">
            <SectionTitle title="Projetos em destaque" />
            <Link
              href={"/"}
              className="text-cornflower-blue hover:text-periwinkle-blue font-semibold text-lg"
            >
              Ver todos os projetos
            </Link>
          </div>

          <HorizontalDivider className="mb-16" />

          <div>
            {highlightProjects?.map((project) => (
              <div key={`project-${project.title}`}>
                <ProjectCard
                  title={project.title}
                  src={project.thumbnail.url}
                  description={project.shortDescription}
                  badges={project.technologies.map((tech) => ({
                    icon: (
                      <FaReact
                        key={`project-${project.title}-${tech.name}`}
                        className="text-xl"
                      />
                    ),
                    nameIcon: tech.name,
                  }))}
                  linkRepository={project.liveProjectUrl}
                  linkGithub={project.gitHubUrl}
                  href={project.slug}
                />
                <HorizontalDivider className="mb-16" />
              </div>
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
            {workExperiences?.map((work) => (
              <div key={`work-${work.companyName}`}>
                <ExperienceItem experience={work} />
              </div>
            ))}
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
