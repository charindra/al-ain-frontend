import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type FaqItem = {
  id: string;
  name: string;
  question: Field<string>;
  answer: Field<string>;
};

export type FaqListProps = {
  fields: {
    data: {
      datasource: {
        children: {
          results: FaqItem[];
        };
      };
    };
  };
};
