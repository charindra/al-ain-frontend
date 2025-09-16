import { Field, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';

export type LinkCustomizations = {
  noFollow?: Field<boolean>;
};

export type NextLinkProps = {
  field: LinkField | LinkFieldValue | undefined | null;
  editable?: boolean;
  role?: string;
  className?: string;
  children?: React.ReactNode;
  placeholder?: string;
  hideText?: boolean;
  ariaLabel?: string;
  id?: string;
  onClick?: () => void;
  linkCustomizations?: LinkCustomizations;
};

export type LinkFieldJsonValue = {
  [key: string]: string;
};
