import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { Project, SectionProject } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type PageDetails = {
  id: string;
  // Other properties from the GraphQL query
  projects: Project[];
};

const getPageDetails = async (slug: string): Promise<PageDetails | null> => {
  const query = `
     query ProjectsQuery() {
  projects(where: {slug: "${slug}"}) {
    slug
    title
    shortDescription
    description {
      raw
    }
    gitHubUrl
    liveProjectUrl
    technologies {
      name
      iconSvg
    }
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
      }
    }
  }
}


  `;

  return await fetchHygraphQuery(query);
};

const Projects = ({ pageDetails }: { pageDetails: PageDetails | null }) => {
  const { projects } = pageDetails || { projects: [] };

  return (
    <>
      <section>
        {projects.map((project) => (
          <Fragment key={project.slug}>
            <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="relative flex-col items-start m-auto align-middle">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                  <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                    <div className="max-w-xl text-center lg:text-left">
                      <div>
                        <p className="text-2xl font-medium tracking-tight text-cornflower-blue sm:text-4xl">
                          {project.title}
                        </p>

                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap justify-center mt-10 space-x-2 lg:justify-start">
                          {project.technologies.map((technology) => (
                            <Badge
                              key={technology.name}
                              icon={technology.iconSvg}
                            >
                              {technology.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                        <Link
                          href={project.liveProjectUrl}
                          target="_blank"
                          className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-cornflower-blue border-2 border-cornflower-blue rounded-full inline-flex hover:bg-transparent hover:border-cornflower-blue hover:text-cornflower-blue focus:outline-none lg:w-auto focus-visible:outline-cornflower-blue text-sm focus-visible:ring-cornflower-blue"
                        >
                          Ver Projeto
                        </Link>
                        <Link
                          href={project.gitHubUrl}
                          className="inline-flex items-center justify-center text-sm font-semibold text-cornflower-blue duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                        >
                          Repositório &nbsp; →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <Image
                      className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto rounded"
                      alt="hero"
                      src={project.thumbnail?.url}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-12 mx-auto lg:max-w-7xl text-gray-600 leading-relaxed text-justify">
                  <RichText content={project.description.raw} />
                </div>
              </div>
            </div>

            <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
              <h3 className="text-3xl font-medium tracking-tight text-start text-cornflower-blue sm:text-4xl">
                Páginas do Projeto
              </h3>
              <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
                <div className="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
                  {project.sections.map(
                    (section, index) =>
                      index !== 0 && (
                        <figure key={section.title}>
                          <Image
                            className="w-full bg-gray-200 rounded"
                            src={section.image.url}
                            alt=""
                            width={1310}
                            height={873}
                          />
                        </figure>
                      )
                  )}
                </div>
                {project.sections.map(
                  (section, index) =>
                    index === 0 && (
                      <figure key={section.title} className="lg:col-span-4">
                        <Image
                          className="w-full bg-gray-200 h-full rounded"
                          src={section.image.url}
                          alt=""
                          width={1310}
                          height={873}
                        />
                      </figure>
                    )
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pageDetails = await getPageDetails(slug);

  return {
    props: {
      pageDetails,
    },
  };
};
