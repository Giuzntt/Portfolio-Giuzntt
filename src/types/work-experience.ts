import { Technologies } from './page-info';
import type { RichTextContent } from '@graphcms/rich-text-types';
export type WorkExperience = {
  companyName: string;
  role: string;
  companyLogo: {
    url: string;
  };
  companyUrl: string;
  description: {
    raw: RichTextContent;
  };
  order: number;
  startDate: string;
  endDate: string;
  technologies: Technologies[];
};
