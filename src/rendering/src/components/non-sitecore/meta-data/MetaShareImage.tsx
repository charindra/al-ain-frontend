import { Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';

const MetaShareImage = ({
  field,
}: {
  field: Field<GenericFieldValue> | Item | Item[] | undefined;
}): JSX.Element => {
  const innerField = field as Field<GenericFieldValue>;
  const mediaSrc: string = (innerField?.value as { src: string })?.src;
  return (
    <>
      {mediaSrc && (
        <>
          <meta property="og:image" content={mediaSrc} />
          <meta name="twitter:image" content={mediaSrc} />
          <meta itemProp="image" content={mediaSrc} />
        </>
      )}
    </>
  );
};

export default MetaShareImage;
