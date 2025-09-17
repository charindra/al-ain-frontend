type SecondaryEventCard = {
  img: string;
  tag: string;
  title: string;
  date: string;
  btnText: string;
  btnLink: string;
};

export const SECONDARY_EVENT_CARDS: SecondaryEventCard[] = [
  {
    img: '/images/event-img-2.jpg',
    tag: 'WORKSHOP',
    title: 'Traditional Crafts and Heritage',
    date: '15 August  ➜  30 October 2025',
    btnText: 'Learn More',
    btnLink: '/',
  },
  {
    img: '/images/event-img-3.jpg',
    tag: 'LECTURE',
    title: 'Archaeological Discoveries in Al Ain',
    date: '5 September  ➜  20 November 2025',
    btnText: 'Register',
    btnLink: '/',
  },
];
