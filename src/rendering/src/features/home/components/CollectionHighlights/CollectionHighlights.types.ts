export type CollectionHighlight = {
  subHeading: string;
  heading: string;
  tag: string;
  img: string;
};

type BaseProps = {
  highlights?: CollectionHighlight[];
};

export type CollectionHighlightsProps = BaseProps;
