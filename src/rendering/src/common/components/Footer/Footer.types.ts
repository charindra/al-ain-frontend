import {
  ComponentRendering,
  Field,
  ImageField,
  LayoutServiceData,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type FormValues = {
  name: string;
  email: string;
};

export type LinkValue = {
  href: string;
  text?: string;
  anchor?: string;
  linktype?: string;
  class?: string;
  title?: string;
  querystring?: string;
  id?: string;
};

export type FooterLink = {
  link?: {
    value: string;
    jsonValue: { value: LinkValue };
  };
};

export type SocialLink = {
  socialImage: {
    jsonValue: ImageField;
  };
  linkUrl: {
    value: string;
    jsonValue: { value: string };
  };
};

export type FooterColumn = {
  columnTitle: {
    value: string;
    jsonValue: { value: string };
  };
  isSocialColumn?: {
    value: string;
    jsonValue: { value: boolean };
  };
  children: {
    results: (FooterLink | SocialLink)[];
  };
};

export type FooterDatasource = {
  heading: Field<string>;
  contactDetails: Field<string>;
  copyrightText: Field<string>;
  privacyNotice: {
    jsonValue: LinkField;
  };
  cookiePolicy: {
    jsonValue: LinkField;
  };
  termsAndConditions: {
    jsonValue: LinkField;
  };
  children: {
    results: FooterColumn[];
  };
};

export type FooterProps = ComponentProps & {
  navigationFolder?: {
    datasource: FooterDatasource;
  };
};

export type FooterQueryResult = {
  datasource: FooterDatasource;
};

export type FooterComponentProps = {
  rendering: ComponentRendering;
  layoutData: LayoutServiceData;
};
