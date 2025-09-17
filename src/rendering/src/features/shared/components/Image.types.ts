import { ImageField, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type ImageFields = {
  Image: ImageField & { metadata?: { [key: string]: unknown } };
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
};

export type ImageRenderingParams = {
  [key: string]: string | undefined;
  RenderingIdentifier?: string;
  styles?: string;
};

export type ImageProps = {
  params: ImageRenderingParams;
  fields?: ImageFields;
};
