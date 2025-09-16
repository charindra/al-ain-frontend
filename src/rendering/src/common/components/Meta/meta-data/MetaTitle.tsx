import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';
import { MetaFieldProps } from './Meta.types';

const MetaTitle = ({ field }: MetaFieldProps): JSX.Element => {
  const innerField = field as Field<GenericFieldValue>;
  return (
    <>
      {innerField?.value && (
        <>
          <title>{(innerField?.value as string) || ''}</title>
          <meta property="og:title" content={(innerField?.value as string) || ''} />
          <meta itemProp="name" content={(innerField?.value as string) || ''} />
          <meta name="twitter:title" content={(innerField?.value as string) || ''} />
        </>
      )}
    </>
  );
};

export default MetaTitle;
