import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';
import { MetaFieldProps } from './Meta.types';

const MetaKeywords = ({ field }: MetaFieldProps): JSX.Element => {
  const innerField = field as Field<GenericFieldValue>;
  return (
    <>
      {innerField?.value && (
        <>
          <meta name="keywords" content={(innerField?.value as string) || ''} />
        </>
      )}
    </>
  );
};

export default MetaKeywords;
