import { VisitorGuidelinesContent } from './VisitorGuidelinesBlock.types';

export const VISITOR_GUIDELINES_DEFAULT: VisitorGuidelinesContent = {
  topHeading: {
    value: 'VISITOR GUIDELINES',
  },
  heading: {
    value: 'Lorem Ipsum Dolor Sit Amet',
  },
  description: {
    value:
      'We look forward to welcoming you to Al Ain Museum. All visitors entering the museum agree to abide by the Visitor Regulations for their own safety and enjoyment, and that of others.',
  },
  btnText: {
    value: 'Guidelines',
  },
  btnLink: {
    value: {
      href: '/guidelines',
      text: 'Guidelines',
    },
  },
  img: {
    value: {
      src: '/images/visit-page/Visitor-Guidelines.jpg',
      alt: 'Visitor Guidelines',
    },
  },
};
