import { ComponentProps } from 'services/sitecore/component-props';
import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type TextEdgeSliderItem = {
  heading?: string;
  subHeading?: string;
  description: { text: string }[];
  isRightImg: boolean;
  sliderData: { img: string; text: string }[];
};

export type TextEdgeSliderItemProps = {
  textEdgeSliderItem?: boolean;
};

export type SliderItem = {
  img: {
    value: string; // URL string, normalized
  };
  text: Field<string>;
};
export type SliderItemProps = {
  sliderItem?: SliderItem;
};

export type Item = {
  heading?: Field<string>;
  subHeading?: Field<string>;
  description: RichTextField[];
  isRightImg: boolean;
  changeBlock: boolean;
  sliderData: SliderItem[];
};
export type ItemProps = {
  item?: Item;
};

export type TextEdgeSliderBlock = {
  changeBlock?: boolean;
  fields: {
    data: {
      datasource: {
        children: {
          results: {
            id: string;
            name: string;
            heading: { value: string };
            subHeading: { value: string };
            description: { value: string };
            isRightImg: { value: string };
            changeBlock: { value: string };
            children: {
              results: {
                __typename: string;
                img: {
                  jsonValue?: {
                    value?: {
                      href?: string;
                    };
                  };
                };
                text: { value: string };
              }[];
            };
          }[];
        };
      };
    };
  };
};
export type TextEdgeSliderBlockProps = ComponentProps & {
  fields?: TextEdgeSliderBlock['fields'];
};

export type GalleryItemProps = {
  item: Item;
};
