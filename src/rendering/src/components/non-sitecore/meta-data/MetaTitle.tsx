import { Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';

const MetaTitle = ({
  field,
}: {
  field: Field<GenericFieldValue> | Item | Item[] | undefined;
}): JSX.Element => {
  const innerField = field as Field<GenericFieldValue>;
  return (
    <>
      {innerField?.value && (
        <>
          <meta itemProp="title" content={(innerField?.value as string) || ''} />
          <meta property="og:title" content={(innerField?.value as string) || ''} />
          <meta name="twitter:title" content={(innerField?.value as string) || ''} />
        </>
      )}
    </>
  );
};

export default MetaTitle;
