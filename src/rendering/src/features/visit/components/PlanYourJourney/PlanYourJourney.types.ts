import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type PlanYourJourneyItem = {
  title: string;
  description: string;
};

export type PlanYourJourneyHeading = {
  topTitle: string;
  title: string;
};

export type PlanYourJourneyProps = {
  fields?: {
    data: {
      datasource: {
        heading: {
          topTitle: Field<string>;
          title: Field<string>;
        };
        accordionItems: {
          targetItems: {
            title: Field<string>;
            description: Field<string>;
          }[];
        };
      };
    };
  };
};
