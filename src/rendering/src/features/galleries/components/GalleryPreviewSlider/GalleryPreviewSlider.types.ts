import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type GalleryPreviewSlide = {
  galleryID: string;
  heading?: string;
  topHeading?: string;
  description?: string;
  origin?: string;
  material?: string;
  descriptionTitle?: string;
  originTitle?: string;
  materialTitle?: string;
  img: string;
  subHeading: string;
};

export type GalleryPreviewThumbnail = {
  img: string;
};

export type GalleryItem = GalleryPreviewSlide;

export type GalleryPreviewSlider = {
  fields: {
    data: {
      datasource: {
        id: Field<string>;
        name: Field<string>;
        children: {
          results: {
            __typename: Field<string>;
            id: Field<string>;
            name: Field<string>;
            heading?: Field<string>;
            subHeading?: Field<string>;
            description?: Field<string>;
            descriptionTitle?: Field<string>;
            material?: Field<string>;
            materialTitle?: Field<string>;
            origin?: Field<string>;
            originTitle?: Field<string>;
            img: {
              jsonValue?: {
                value?: {
                  href?: string;
                };
              };
            };
          }[];
        };
      };
    };
  };
};

export type GalleryPreviewSliderProps = {
  fields: GalleryPreviewSlider['fields'];
};
