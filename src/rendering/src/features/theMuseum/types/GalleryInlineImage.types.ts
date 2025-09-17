export type InlineImageValue = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

export type InlineImageField = {
  value?: InlineImageValue | null;
};

export type GalleryInlineImageFields = {
  leftImg?: InlineImageField | null;
  rightImg?: InlineImageField | null;
};

export type GalleryInlineImageProps = {
  fields?: GalleryInlineImageFields | null;
};

export type GalleryInlineImageImage = InlineImageValue & {
  alt: string;
};

export type GalleryInlineImageViewModel = {
  leftImage: GalleryInlineImageImage;
  rightImage: GalleryInlineImageImage;
};
