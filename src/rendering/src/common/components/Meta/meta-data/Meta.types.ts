import {
  Field,
  Item,
  LayoutServiceContextData,
  RouteData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';

export type MetaSitecoreContext = LayoutServiceContextData & {
  route: RouteData | null;
};

export type MetaDataProps = {
  sitecore: MetaSitecoreContext;
};

export type MetaFieldProps = {
  field: Field<GenericFieldValue> | Item | Item[] | undefined;
};

export type FieldValue = {
  value: string | boolean;
};

export type ContentTypeSelectionFields = {
  termName: FieldValue;
  description: FieldValue;
};

export type ContentTypeSelection = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: ContentTypeSelectionFields;
};

export type MetaMiscProps = {
  sitecore: MetaSitecoreContext;
};
