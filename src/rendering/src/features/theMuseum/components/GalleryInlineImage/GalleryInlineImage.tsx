import GalleryInlineImageView from 'theMuseum/views/GalleryInlineImageView';
import { useGalleryInlineImage } from 'theMuseum/hooks/useGalleryInlineImage';
import { GalleryInlineImageProps } from 'theMuseum/types/GalleryInlineImage.types';

const GalleryInlineImage = ({ fields }: GalleryInlineImageProps): JSX.Element => {
  const viewModel = useGalleryInlineImage(fields);

  return <GalleryInlineImageView {...viewModel} />;
};

export default GalleryInlineImage;
