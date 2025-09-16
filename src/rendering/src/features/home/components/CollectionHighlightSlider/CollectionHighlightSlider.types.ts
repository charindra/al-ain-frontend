export type CollectionSlide = {
  subHeading: string;
  heading: string;
  tag: string;
  img: string;
};

type BaseProps = {
  slides?: CollectionSlide[];
};

export type CollectionHighlightSliderProps = BaseProps;
