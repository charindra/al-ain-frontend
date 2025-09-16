import { ComponentProps } from 'services/sitecore/component-props';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type EventCardGridFields = {
  img: ImageField;
  tag: Field<string>;
  title: Field<string>;
  start_date: Field<string>;
  end_date: Field<string>;
  btnText: Field<string>;
  btnLink: LinkField;
  left_img: ImageField;
  left_tag: Field<string>;
  left_title: Field<string>;
  left_start_date: Field<string>;
  left_end_date: Field<string>;
  left_btnText: Field<string>;
  left_btnLink: LinkField;
  right_img: ImageField;
  right_tag: Field<string>;
  right_title: Field<string>;
  right_start_date: Field<string>;
  right_end_date: Field<string>;
  right_btnText: Field<string>;
  right_btnLink: LinkField;
};

export type EventCardGridProps = ComponentProps & {
  fields: EventCardGridFields;
};
