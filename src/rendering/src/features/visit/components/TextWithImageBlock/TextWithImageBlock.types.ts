import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type TextWithImageItem = {
  subHeading?: string;
  heading: string;
  description: string;
  imgText?: string;
  img: string;
  btnText?: string;
  btnLink?: string;
  isRightImg?: boolean;
  lightBack?: boolean;
  bgColor?: string;
};

export type TextImageBlockItem = {
  id: string;
  name: string;
  heading?: Field<string>;
  subHeading?: Field<string>;
  description?: Field<string>;
  img?: {
    jsonValue?: {
      value?: {
        href?: string;
      };
    };
  };
  isRightImg?: Field<string>;
  lightBack?: Field<string>;
  btnText?: Field<string>;
  btnLink?: {
    jsonValue?: {
      value?: {
        href: string;
      };
    };
  };
};
export type TextImageBlockItemProps = {
  data?: TextImageBlockItem;
};

export type TextImageBlockResponse = {
  data?: {
    datasource: {
      children: {
        results: TextImageBlockItem[];
      };
    };
  };
  fields?: {
    data: {
      datasource: {
        children: {
          results: TextImageBlockItem[];
        };
      };
    };
  };
};

export type TextImageBlockResponseProps = {
  fields: TextImageBlockResponse['data' | 'fields'];
};
