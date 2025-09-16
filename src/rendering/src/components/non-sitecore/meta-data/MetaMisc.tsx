import { LayoutServiceContextData, RouteData } from '@sitecore-jss/sitecore-jss-nextjs';

type MetaMiscProps = {
  sitecore: LayoutServiceContextData & {
    route: RouteData | null;
  };
};

export interface FieldValue {
  value: string | boolean;
}

export interface ContentTypeSelection {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: ContentTypeSelectionFields;
}

export interface ContentTypeSelectionFields {
  termName: FieldValue;
  description: FieldValue;
}

const MetaMisc = (props: MetaMiscProps): JSX.Element => {
  const url = `${process.env.PUBLIC_URL}${props.sitecore.context.itemPath}`;
  const language = props.sitecore?.context?.language ?? '';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const contentTypeField = props.sitecore?.route?.fields
    ?.contentTypeSelection as unknown as ContentTypeSelection;

  const contentType = (contentTypeField?.fields?.termName?.value ?? '') as string;

  return (
    <>
      {contentType && <meta property="og:type" content={contentType} />}

      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={`${language}`} />
      <meta property="twitter:site" content={siteName} />
    </>
  );
};

export default MetaMisc;
