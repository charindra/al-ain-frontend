import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type ReadyExploreFields = {
  heading: Field<string>;
  bannerImage: ImageField;
  subtitle: Field<string>;
  content: Field<string>;
  btnText: Field<string>;
  btnUrl: LinkField;
};

export type ReadyExploreBannerProps = ComponentProps & {
  fields?: ReadyExploreFields;
};
