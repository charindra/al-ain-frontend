import { motion } from 'framer-motion';
import Image from 'next/image';

import { GALLERY_INLINE_IMAGE_ANIMATION } from 'theMuseum/constants/GalleryInlineImage.constants';
import { galleryInlineImageClasses } from 'theMuseum/styles/GalleryInlineImage.styles';
import { GalleryInlineImageViewModel } from 'theMuseum/types/GalleryInlineImage.types';

const { container, imageWrapper, image, secondaryColumn } = galleryInlineImageClasses;

const GalleryInlineImageView = ({
  leftImage,
  rightImage,
}: GalleryInlineImageViewModel): JSX.Element => (
  <div className={container}>
    <div>
      <motion.div {...GALLERY_INLINE_IMAGE_ANIMATION.primary}>
        <div className={imageWrapper}>
          <Image
            src={leftImage.src}
            alt={leftImage.alt}
            fill
            className={image}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </motion.div>
    </div>

    <div className={secondaryColumn}>
      <motion.div {...GALLERY_INLINE_IMAGE_ANIMATION.secondary}>
        <div className={imageWrapper}>
          <Image
            src={rightImage.src}
            alt={rightImage.alt}
            fill
            className={image}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </motion.div>
    </div>
  </div>
);

export default GalleryInlineImageView;
