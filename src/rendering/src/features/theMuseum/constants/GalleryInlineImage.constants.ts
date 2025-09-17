import type { MotionProps } from 'framer-motion';

import { GalleryInlineImageImage } from 'theMuseum/types/GalleryInlineImage.types';

export const INLINE_IMAGE_FALLBACK: GalleryInlineImageImage = {
  src: '/images/gallery-img-1.png',
  alt: 'Gallery image',
  width: 588,
  height: 501,
};

export const GALLERY_INLINE_IMAGE_DEFAULT_ALT = {
  left: 'Left gallery image',
  right: 'Right gallery image',
} as const;

type AnimationConfig = Pick<MotionProps, 'initial' | 'whileInView' | 'transition' | 'viewport'>;

const baseAnimation: AnimationConfig = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
};

export const GALLERY_INLINE_IMAGE_ANIMATION: {
  primary: AnimationConfig;
  secondary: AnimationConfig;
} = {
  primary: baseAnimation,
  secondary: {
    ...baseAnimation,
    transition: {
      ...baseAnimation.transition,
      delay: 0.2,
    },
  },
};
