import { Link, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_TEXT_BUTTON_FALLBACK } from './GalleryTextContent.constants';
import { GalleryTextContentProps } from './GalleryTextContent.types';

const GalleryTextContent = ({ fields }: GalleryTextContentProps): JSX.Element => {
  const buttonText =
    fields?.btnText?.value || fields?.btnLink?.value?.text || GALLERY_TEXT_BUTTON_FALLBACK;

  return (
    <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 mb-8 mt-[56px] lg:mt-[72px] lg:mb-[72px] change-direction">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Text
            tag="h2"
            className="text-[18px] md:text-[16px] leading-[24px] font-bold uppercase change-direction text-[#1B1F27] mb-4"
            field={fields.topHeading}
          />
          <div className="text-[#1B1F27] mb-4 h-[3px] w-[66px] block mt-2 bg-[#1B1F27]" />
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-0 lg:gap-6 items-center">
        <div className="w-full lg:w-[43.8%]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text
              tag="h1"
              className="text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font lg:max-w-[500px] text-[#33130A]"
              field={fields.heading}
            />
          </motion.div>
        </div>

        <div className="w-full lg:w-[48.3%]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <RichText
              tag="p"
              field={fields.description}
              className="text-[20px] lg:text-[24px] leading-[24px] text-[#33130A] font-medium mb-8 lg:mb-6 mt-8 lg:mt-4 heading-font"
            />

            {fields?.btnLink?.value?.href && (
              <Link
                field={fields.btnLink}
                className="page-btn outline-black-btn min-w-full md:min-w-[150px] flex items-center justify-center gap-2"
              >
                {buttonText}
                <Image src="/images/right-arrow.svg" alt="arrow" width={24} height={24} />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTextContent;
