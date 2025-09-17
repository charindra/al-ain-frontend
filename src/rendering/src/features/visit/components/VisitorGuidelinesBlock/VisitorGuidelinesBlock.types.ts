import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type VisitorGuidelinesContent = {
  topHeading: Field<string>;
  heading?: Field<string>;
  description?: Field<string>;
  btnLink: LinkField;
  btnText?: Field<string>;
  img: ImageField;
};

export type VisitorGuidelinesBlockProps = {
  fields?: VisitorGuidelinesContent;
};
