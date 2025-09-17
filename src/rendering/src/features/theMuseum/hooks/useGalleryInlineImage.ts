import {
  GALLERY_INLINE_IMAGE_DEFAULT_ALT,
  INLINE_IMAGE_FALLBACK,
} from 'theMuseum/constants/GalleryInlineImage.constants';
import {
  GalleryInlineImageFields,
  GalleryInlineImageImage,
  GalleryInlineImageViewModel,
  InlineImageField,
} from 'theMuseum/types/GalleryInlineImage.types';

const resolveImage = (
  field: InlineImageField | null | undefined,
  fallbackAlt: string
): GalleryInlineImageImage => {
  const value = field?.value;
  const fallback = { ...INLINE_IMAGE_FALLBACK, alt: fallbackAlt };

  if (!value || !value.src) {
    return fallback;
  }

  return {
    src: value.src,
    alt: value.alt?.trim() || fallback.alt,
    width: value.width ?? fallback.width,
    height: value.height ?? fallback.height,
  };
};

export const useGalleryInlineImage = (
  fields?: GalleryInlineImageFields | null
): GalleryInlineImageViewModel => {
  const leftImage = resolveImage(fields?.leftImg, GALLERY_INLINE_IMAGE_DEFAULT_ALT.left);
  const rightImage = resolveImage(fields?.rightImg, GALLERY_INLINE_IMAGE_DEFAULT_ALT.right);

  return {
    leftImage,
    rightImage,
  };
};
