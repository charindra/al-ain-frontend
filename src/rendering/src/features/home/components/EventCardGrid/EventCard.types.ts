import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type EventCardData = {
  fields: {
    img: ImageField;
    tag: Field<string>;
    title: Field<string>;
    start_date: Field<string>;
    end_date: Field<string>;
    btnText: Field<string>;
    btnLink: LinkField;
  };
};

export type EventCardFullProps = {
  fields: EventCardData;
};
