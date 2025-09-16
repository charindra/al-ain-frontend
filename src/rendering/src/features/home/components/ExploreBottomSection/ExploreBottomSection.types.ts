import { ComponentProps } from 'services/sitecore/component-props';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type ExploreBottomSectionProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    ctaButton: LinkField;
    desktopImage: ImageField;
    mobileImage: ImageField;
  };
};
