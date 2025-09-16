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

export type TextWithImageDatasourceItem = {
  id: string;
  name: string;
  heading?: Field<string>;
  subHeading?: Field<string>;
  description?: Field<string>;
  img?: Field<string>;
  isRightImg?: Field<string>;
  lightBack?: Field<string>;
  btnText?: Field<string>;
  btnLink?: Field<string>;
};

export type TextWithImageBlockResponse = {
  data: {
    datasource: {
      children: {
        results: TextWithImageDatasourceItem[];
      };
    };
  };
};
