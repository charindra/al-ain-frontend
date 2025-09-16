import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { GenericFieldValue } from '@sitecore-jss/sitecore-jss/types/layout/models';
import { MetaFieldProps } from './Meta.types';

const MetaShareImage = ({ field }: MetaFieldProps): JSX.Element => {
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
