import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';

export type OpeningHoursFields = {
  heading: Field<string>;
  subHeading: Field<string>;
  closedDays: Field<string>;
  closedTag: Field<string>;
  content: Field<string>;
  openingWeekDays: Field<string>;
  openingWeekEnds: Field<string>;
  openingHoursWeekDays: Field<string>;
  openingHoursWeekEnds: Field<string>;
  specialNotes: Field<string>;
};

export type OpeningHoursProps = ComponentProps & {
  fields?: OpeningHoursFields;
};
