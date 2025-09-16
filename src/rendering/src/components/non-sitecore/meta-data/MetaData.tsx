import { RouteData, Field, LayoutServiceContextData } from '@sitecore-jss/sitecore-jss-nextjs';
import MetaDescription from './MetaDescription';
import MetaKeywords from './MetaKeywords';
import MetaShareImage from './MetaShareImage';
import MetaTitle from './MetaTitle';
import MetaMisc from './MetaMisc';
import { isDisabledForIndexing } from 'lib/utils/indexing-utils';

type MetaDataProps = {
  sitecore: LayoutServiceContextData & {
    route: RouteData | null;
  };
};

const MetaData = ({ sitecore }: MetaDataProps): JSX.Element => {
  const innerRoute = sitecore.route;
  return (
    <>
      <MetaTitle field={innerRoute?.fields?.metaPageTitle} />
      <MetaDescription field={innerRoute?.fields?.metaDescription} />
      <MetaKeywords field={innerRoute?.fields?.metaKeywords} />
      <MetaShareImage field={innerRoute?.fields?.metaShareImage} />
      <MetaMisc sitecore={sitecore} />

      {(((innerRoute?.fields?.disableIndexing as Field)?.value as boolean) === true ||
        isDisabledForIndexing(sitecore?.context?.itemPath?.toString() || '')) && (
        <meta name="robots" content="noindex,nofollow"></meta>
      )}
    </>
  );
};

export default MetaData;
