import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type NavigationItem = {
  href: string;
  text: string;
  anchor?: string;
  linktype?: string;
  class?: string;
  title?: string;
  querystring?: string;
  id?: string;
  button?: boolean;
  group?: string;
};

export type NavigationFolder = {
  datasource?: {
    children?: {
      results?: unknown[];
    };
  };
};

export type TopNavigationProps = {
  anchorLinkText: Field<string>;
  className: string;
  navigationFolder: NavigationFolder | null;
  rendering: unknown;
};
