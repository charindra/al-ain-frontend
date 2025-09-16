export type VisitorFacilityCard = {
  image: string;
  title: string;
  animationDelay: number;
};

export type VisitorFacilitiesContent = {
  heading: string;
  subHeading: string;
  sectionHeading: string;
  sectionContent: string;
  cards: VisitorFacilityCard[];
};

export type VisitorFacilitiesProps = {
  content?: VisitorFacilitiesContent;
};
