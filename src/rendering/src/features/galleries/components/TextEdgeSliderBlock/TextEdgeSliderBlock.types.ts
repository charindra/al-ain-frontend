export type TextEdgeSliderItem = {
  heading?: string;
  subHeading?: string;
  description: { text: string }[];
  isRightImg: boolean;
  sliderData: { img: string; text: string }[];
};

export type TextEdgeSliderBlockProps = {
  changeBlock?: boolean;
};
