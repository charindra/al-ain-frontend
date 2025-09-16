import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type TitleAndTextBgBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    ctaButton: LinkField;
    desktopImage: ImageField;
    mobileImage: ImageField;
  };
};
