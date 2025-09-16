'use client';

import HeadingText from 'common/components/HeadingText';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TEXT_WITH_IMAGE_ITEMS } from './TextWithImageBlock.constants';
import { TextWithImageBlockResponse, TextWithImageItem } from './TextWithImageBlock.types';

const TextWithImageBlock = ({ data }: TextWithImageBlockResponse): JSX.Element => {
  const cmsItems = data?.datasource?.children?.results ?? [];
  const mappedItems: TextWithImageItem[] = cmsItems.map((item) => ({
    heading: item.heading?.value ?? '',
    subHeading: item.subHeading?.value,
    description: item.description?.value ?? '',
    img: item.img?.value ?? '',
    imgText: item.img?.value,
    isRightImg: item.isRightImg?.value === '1',
    lightBack: item.lightBack?.value === '1',
    btnText: item.btnText?.value,
    btnLink: item.btnLink?.value,
  }));

  const items = mappedItems.length > 0 ? mappedItems : TEXT_WITH_IMAGE_ITEMS;

  return (
    <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
      {items.map((item, index) => (
        <div key={`${item.heading}-${index}`}>
          <div className="py-[56px] lg:py-[72px]">
            <div className={clsx('flex flex-wrap items-center lg:justify-between', item.bgColor)}>
              <div
                className={clsx(
                  'max-w-[510px] md:w-[50.9%] px-4 md:px-6 lg:px-0',
                  item.isRightImg ? 'order-0' : 'order-1'
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <HeadingText
                    heading={item.heading}
                    className={clsx(
                      'mb-4 lg:mb-6 text-left text-[32px] lg:text-[48px]',
                      item.lightBack ? 'text-[#1B1F27]' : 'text-white'
                    )}
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={clsx(
                    'text-[18px] leading-[28px] font-normal mb-8 lg:mb-6',
                    item.lightBack ? 'text-[#4D4E56]' : 'text-white/80'
                  )}
                >
                  {item.description}
                </motion.p>

                {item.btnText && item.btnLink && (
                  <Link
                    className={clsx(
                      'page-btn min-w-full md:min-w-[150px]',
                      item.lightBack ? 'outline-black-btn' : 'outline-white-btn'
                    )}
                    href={item.btnLink}
                  >
                    {item.btnText}
                    <Image src="/images/right-arrow.svg" alt="arrow" width={24} height={24} />
                  </Link>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className={clsx(
                  'w-full md:w-[49.1%] px-4 md:px-0 mb-9 md:mb-0',
                  item.isRightImg ? 'order-1' : 'order-0'
                )}
              >
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={589}
                  height={501}
                  className="w-full object-cover h-[250px] md:h-[501px]"
                />
                {item.imgText && (
                  <p className="text-[14px] text-gray-600 mt-[10px]">{item.imgText}</p>
                )}
              </motion.div>
            </div>
          </div>
          {index !== items.length - 1 && (
            <div className="flex justify-center">
              <div className="w-full h-px bg-[#D8D8D8]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TextWithImageBlock;
