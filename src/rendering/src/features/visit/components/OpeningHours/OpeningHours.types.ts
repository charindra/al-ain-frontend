import { ComponentProps } from 'services/sitecore/component-props';

export type OpeningHoursFields = {
  heading: string;
  subHeading: string;
  content: string;
  openingWeekDays: string;
  openingWeekEnds: string;
  openingHoursWeekDays: string;
  openingHoursWeekEnds: string;
  specialNotes: string;
};

export type OpeningHoursProps = ComponentProps & {
  fields?: OpeningHoursFields;
};
