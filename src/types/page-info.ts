import type { RichTextContent } from "@graphcms/rich-text-types";

export type Social = {
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
  techonologies: Technologies[];
};

export type HomePageType = {
  pageData: {
    page: HomePageInfo;
  };
};
