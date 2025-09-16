import { ComponentProps } from 'services/sitecore/component-props';

export type ReadyExploreFields = {
  heading: string;
  bannerImage: string;
  subtitle: string;
  content: string;
  btnText: string;
  btnUrl: string;
};

export type ReadyExploreBannerProps = ComponentProps & {
  fields?: ReadyExploreFields;
};
