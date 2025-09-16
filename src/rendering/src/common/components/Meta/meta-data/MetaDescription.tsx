import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';
import { MetaFieldProps } from './Meta.types';

const MetaDescription = ({ field }: MetaFieldProps): JSX.Element => {
  const innerField = field as Field<GenericFieldValue>;
  return (
    <>
      {innerField?.value && (
        <>
          <meta name="description" content={(innerField?.value as string) || ''} />
          <meta property="og:description" content={(innerField?.value as string) || ''} />
          <meta itemProp="description" content={(innerField?.value as string) || ''} />
          <meta name="twitter:description" content={(innerField?.value as string) || ''} />
        </>
      )}
    </>
  );
};

export default MetaDescription;
