import { HorizontalDivider } from "@/components/HorizontalDivider";
import { ProjectCard } from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { Project } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { FaReact } from "react-icons/fa";

interface PageData {
  page: {
    id: string;
  };
  projects: Project[];
}

const getPageData = async (): Promise<PageData> => {
  const query = `
   query ProjectsQuery {
  page(where: {slug: "projects"}) {
    id
  }
  projects {
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

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

type ProjectsProps = {
  highlightProjects: Project[];
};

export default function Projects({ highlightProjects }: ProjectsProps) {
  console.log(highlightProjects);
  return (
    <section className="container pt-10   md:pt-0 sm:pt-16 2xl:pt-16 mx-auto  w-full h-full sm:mt-5">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center justify-center flex-col mt-5">
        <SectionTitle title="Projetos" />

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
  );
}

export async function getStaticProps() {
  const response = await getPageData();
  console.log(response);

  return {
    props: {
      highlightProjects: response?.projects,
    },
  };
}
