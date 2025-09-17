export type GalleryPreviewSlide = {
  topHeading?: string;
  heading?: string;
  subHeading: string;
  origin?: string;
  material?: string;
  description?: string;
  img: string;
  galleryID: string;
};

export type GalleryPreviewThumbnail = {
  img: string;
};

export type GalleryPreviewSliderProps = {
  slides?: GalleryPreviewSlide[];
  thumbnails?: GalleryPreviewThumbnail[];
};
