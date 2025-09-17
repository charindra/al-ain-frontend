import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type GalleryTextContentFields = {
  topHeading: Field<string>;
  heading?: Field<string>;
  description?: Field<string>;
  btnLink?: LinkField;
  btnText?: Field<string>;
};

export type GalleryTextContentProps = ComponentProps & {
  fields: GalleryTextContentFields;
};
