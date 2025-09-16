import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type RedirectionTextCardProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    img: Field<string>;
    btnText?: Field<string>;
    btnLink: LinkField;
  };
};
