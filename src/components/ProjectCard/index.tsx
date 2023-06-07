import Image from "next/image";
import Badge from "../Badge";
import { SiNextdotjs } from "react-icons/si";
import { LinkProject } from "../LinkProject";
import { HiArrowNarrowRight } from "react-icons/hi";

interface ProjectCardProps {
  className?: string;
}

export const ProjectCard = ({ className }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-5 flex-col lg:flex-row my-5">
      <div
        className="w-full h-full max-w-[400px] lg:max-w-[400px] lg:min-h-[300px]
      "
      >
        <Image
          src="/feneco.jpg"
          width={569}
          height={300}
          alt="ProjectCard"
          className=" w-full  h-[200px]  sm:h-[300px] lg:w-[400px] 
          
          lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div className="">
        <h3 className="flex items-center gap-3 font-medium text-2xl text-gray-500">
          <Image src="/next.svg" width={20} height={20} alt="" />
          Projeto 1
        </h3>
        <p
          className="my-6 text-gray-600 text-justify font-light leading-relaxed
        
        "
        >
          O Feneco Talent foi criado como uma ideia de um novo modelo de
          Processo Seletivo, baseado em Microtarefas. Usado como Trabalho de
          Conclusão de Curso.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <Badge icon={<SiNextdotjs />}>NextJS</Badge>
          <Badge icon={<SiNextdotjs />}>NextJS</Badge>
          <Badge icon={<SiNextdotjs />}>NextJS</Badge>
        </div>
        <LinkProject href={"/Projects"}>
          Ver Projeto
          <HiArrowNarrowRight />
        </LinkProject>
      </div>
    </div>
  );
};
