import {
  EditMode,
  NextImage as JssImage,
  Link as JssLink,
  Text,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React, { CSSProperties } from 'react';

import type { ImageProps } from './Image.types';

const ImageDefault = (props: ImageProps): JSX.Element => (
  <div className={`component image ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Image</span>
    </div>
  </div>
);

export const Banner = (props: ImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;
  const isMetadataMode = sitecoreContext?.editMode === EditMode.Metadata;
  const fields = props.fields;

  if (!fields?.Image) {
    return <ImageDefault {...props} />;
  }

  const classHeroBannerEmpty =
    isPageEditing && fields.Image?.value?.class === 'scEmptyImage' ? 'hero-banner-empty' : '';
  const backgroundStyle = (fields.Image?.value?.src && {
    backgroundImage: `url('${fields.Image.value.src}')`,
  }) as CSSProperties;
  const modifyImageProps = !isMetadataMode
    ? {
        ...fields.Image,
        editable: fields.Image?.editable
          ?.replace(`width="${fields.Image?.value?.width}"`, 'width="100%"')
          .replace(`height="${fields.Image?.value?.height}"`, 'height="100%"'),
      }
    : {
        ...fields.Image,
        value: {
          ...fields.Image.value,
          style: { width: '100%', height: '100%' },
        },
      };

  return (
    <div
      className={`component hero-banner ${props?.params?.styles} ${classHeroBannerEmpty}`}
      id={id ? id : undefined}
    >
      <div className="component-content sc-sxa-image-hero-banner" style={backgroundStyle}>
        {sitecoreContext.pageEditing ? <JssImage field={modifyImageProps} /> : ''}
      </div>
    </div>
  );
};

export const Default = (props: ImageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const { fields } = props;

  if (!fields?.Image) {
    return <ImageDefault {...props} />;
  }

  const ImageElement = () => <JssImage field={fields.Image} />;
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component image ${props?.params?.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        {sitecoreContext.pageState === 'edit' || !fields.TargetUrl?.value?.href ? (
          <ImageElement />
        ) : (
          <JssLink field={fields.TargetUrl}>
            <ImageElement />
          </JssLink>
        )}
        <Text tag="span" className="image-caption field-imagecaption" field={fields.ImageCaption} />
      </div>
    </div>
  );
};
