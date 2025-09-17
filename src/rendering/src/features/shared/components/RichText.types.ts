import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type RichTextFields = {
  Text: Field<string>;
};

export type RichTextParams = {
  [key: string]: string | undefined;
  RenderingIdentifier?: string;
  styles?: string;
};

export type SharedRichTextProps = {
  params: RichTextParams;
  fields?: RichTextFields;
};
