import type { RichTextContent } from "@graphcms/rich-text-types";
import { WorkExperience } from "./work-experience";

export type Social = {
  name: string;
  url: string;
  iconSvg: string;
};

export type KnowTech = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type Profile = {
  url: string;
};

export type Technologies = {
  name: string;
  iconSvg: string;
};

export type SectionProject = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  thumbnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  description: {
    raw: RichTextContent;
  };
  technologies: Technologies[];
  liveProjectUrl: string;
  gitHubUrl: string;
  sections: SectionProject[];
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };

  socials: Social[];
  knowTechs: KnowTech[];
  technologies: Technologies[];
  profilePicture: Profile;
  highlightProjects: Project[];
};

export type HomePageType = {
  pageData: {
    page: HomePageInfo;
    workExperiences: WorkExperience[];
  };
};
