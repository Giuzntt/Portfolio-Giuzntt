import Image from "next/image";
import Badge from "../Badge";
import Link from "next/link";
import { FaGithub, FaPage4 } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import { TbWorldWww } from "react-icons/tb";

interface ProjectCardProps {
  title?: string;
  description?: string;

  src?: string;
  badges: {
    icon?: any;
    nameIcon?: string;
  }[];
  linkGithub?: string;
  linkRepository?: string;
  href?: string;
}

export const ProjectCard = ({
  title,
  description,
  badges,
  src,
  linkGithub = "/",
  linkRepository = "/",
  href = "/",
}: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-5 flex-col lg:flex-row my-5">
      <div
        className="w-full h-full max-w-[400px] lg:max-w-[400px] lg:min-h-[300px]
      "
      >
        <Image
          src={`${src}`}
          width={300}
          height={400}
          alt="ProjectCard"
          className="w-full h-full  sm:h-[300px] lg:w-[400px] 
          
          lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div className="">
        <h3 className="flex items-center gap-3 font-medium text-2xl text-gray-500">
          {title}
        </h3>
        <p
          className="my-6 text-gray-600 text-justify font-light leading-relaxed
        
        "
        >
          {description}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {badges.map((badge) => (
            <Badge icon={badge.icon} key={badge.nameIcon}>
              {badge.nameIcon}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href={linkRepository} target="_blank">
            <Tooltip content="Ver Site" placement="bottom">
              <TbWorldWww className="text-4xl text-cornflower-blue" />
            </Tooltip>
          </Link>
          <Link href={linkGithub} target="_blank">
            <Tooltip content="Ver Repositório" placement="bottom">
              <FaGithub className="text-4xl text-cornflower-blue" />
            </Tooltip>
          </Link>
        </div>

        <div className="my-5 flex items-end justify-end">
          <Link
            href={`/projects/${href}`}
            className="text-cornflower-blue hover:text-periwinkle-blue font-semibold text-lg"
          >
            Ir para o projeto
          </Link>
        </div>
      </div>
    </div>
  );
};
