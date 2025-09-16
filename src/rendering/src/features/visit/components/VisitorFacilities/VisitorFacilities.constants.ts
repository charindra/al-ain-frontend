import { VisitorFacilityCard, VisitorFacilitiesContent } from './VisitorFacilities.types';

export const VISITOR_FACILITIES_HEADING = {
  heading: 'VISITOR FACILITIES & AMENITIES',
  subHeading: 'Services To Better Your Experience',
  sectionHeading: 'Food and Retail',
  sectionContent:
    'Lorem ipsum dolor sit amet consectetur. Id tristique sed donec tellus. Platea in risus scelerisque congue. Consequat pellentesque egestas consequat sed phasellus tincidunt nisl nisl.',
};

export const VISITOR_FACILITY_CARDS: VisitorFacilityCard[] = [
  {
    image: '/images/visit-page/Foodandretail-1.png',
    title: 'Caffee Name ABC',
    animationDelay: 1.2,
  },
  {
    image: '/images/visit-page/Foodandretail-2.png',
    title: 'Caffee Name ABC',
    animationDelay: 1.5,
  },
  {
    image: '/images/visit-page/Foodandretail-3.png',
    title: 'Retail Store ABC',
    animationDelay: 1.8,
  },
];

export const VISITOR_GUIDELINES_IMAGE = '/images/visit-page/Visitor-Guidelines.jpg';

export const VISITOR_FACILITIES_DEFAULT: VisitorFacilitiesContent = {
  heading: VISITOR_FACILITIES_HEADING.heading,
  subHeading: VISITOR_FACILITIES_HEADING.subHeading,
  sectionHeading: VISITOR_FACILITIES_HEADING.sectionHeading,
  sectionContent: VISITOR_FACILITIES_HEADING.sectionContent,
  cards: VISITOR_FACILITY_CARDS,
};
