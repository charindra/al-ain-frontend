import { Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';

const MetaKeywords = ({
  field,
}: {
  field: Field<GenericFieldValue> | Item | Item[] | undefined;
}): JSX.Element => {
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
