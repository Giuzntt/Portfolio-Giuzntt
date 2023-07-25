import type { RichTextContent } from "@graphcms/rich-text-types";

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

export type Technologies = {
  name: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };

  socials: Social[];
  knowTechs: KnowTech[];
  technologies: Technologies[];
};

export type HomePageType = {
  pageData: {
    page: HomePageInfo;
  };
};
