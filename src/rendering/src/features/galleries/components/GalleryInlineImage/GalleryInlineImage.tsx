import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageField = {
  value: {
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
  };
};

type GalleryInlineImageProps = {
  fields: {
    leftImg: ImageField;
    rightImg: ImageField;
  };
};

const GalleryInlineImage = (props: GalleryInlineImageProps): JSX.Element => {
  const { leftImg, rightImg } = props.fields;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 change-direction pt-0 lg:pt-[72px] pb-[56px] lg:pb-[72px]">
      {/* Left Image */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-[292.5px] lg:h-[540px]">
            <Image
              src={leftImg.value.src}
              alt={leftImg.value.alt || 'Left gallery image'}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="md:block">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-[292.5px] lg:h-[540px]">
            <Image
              src={rightImg.value.src}
              alt={rightImg.value.alt || 'Right gallery image'}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryInlineImage;
