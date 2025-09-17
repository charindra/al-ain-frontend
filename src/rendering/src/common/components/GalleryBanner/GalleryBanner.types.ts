import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type MenuItem = {
  name: string;
  link: string;
  isCurrent?: boolean;
};

export type GalleryChild = {
  id: string;
  name: string;
  link: {
    jsonValue?: {
      value?: {
        href?: string;
      };
    };
  };
};

export type GalleryBannerData = {
  id: string;
  name: string;
  heading: Field<string>;
  description: Field<string>;
  children: {
    results: GalleryChild[];
  };
};

export type GalleryBannerProps = {
  fields: {
    data: {
      datasource: GalleryBannerData;
    };
  };
};
