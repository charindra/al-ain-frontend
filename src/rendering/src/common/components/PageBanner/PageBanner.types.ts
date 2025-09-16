import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type PageBannerProps = ComponentProps & {
  fields: {
    image: ImageField;
    title: Field<string>;
  };
};
