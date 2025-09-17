import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type ContentBlockFields = {
  heading: Field<string>;
  content: Field<string>;
};

export type ContentBlockProps = ComponentProps & {
  fields: ContentBlockFields;
};
