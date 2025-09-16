import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeroBannerProps = {
  fields: {
    data: {
      datasource: {
        heading: Field<string>;
        subHeading: Field<string>;
        heroImages: {
          targetItems: {
            url: {
              url: string;
            };
          }[];
        };
      };
    };
  };
};
