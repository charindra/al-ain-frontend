import { ImageField, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type PromoFields = {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2?: Field<string>;
};

export type PromoComponentProps = {
  params: { [key: string]: string };
  fields?: PromoFields;
};
