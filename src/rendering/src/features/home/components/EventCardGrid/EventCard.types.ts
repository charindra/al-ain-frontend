export type EventCardData = {
  img: string;
  tag: string;
  title: string;
  date: string;
  btnText: string;
  btnLink: string;
};

export type EventCardProps = {
  data: EventCardData;
};
