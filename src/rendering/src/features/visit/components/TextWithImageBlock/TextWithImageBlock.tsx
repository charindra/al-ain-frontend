import clsx from 'clsx';
import HeadingText from 'common/components/HeadingText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { TextImageBlockItem, TextImageBlockResponseProps } from './TextWithImageBlock.types';

const TextWIthImageBlock = (props: TextImageBlockResponseProps): JSX.Element => {
  const rawData = extractItems(props.fields);

  const data = rawData.map((item) => mapItem(item));

  return (
    <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
      {data.map((item, i) => (
        <div key={i}>
          <div className="py-[56px] lg:py-[72px]">
            <div className="flex flex-wrap items-center">
              <div
                className={clsx(
                  'md:w-[50.9%]',
                  item.isRightImg
                    ? 'order-1 md:order-0 pr-0 md:pr-[36px] lg:pr-[60px]'
                    : 'order-1 pl-0 lg:pl-[60px] md:pl-[36px]'
                )}
              >
                <div className="max-w-[510px] md:pb-[34px]">
                  {item.heading && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <HeadingText
                        heading={item.heading}
                        className="mb-6 text-left text-[#1B1F27]"
                      />
                    </motion.div>
                  )}

                  {item.subHeading && (
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-[24px] leading-[24px] font-bold text-[#1B1F27] mb-6"
                    >
                      {item.subHeading}
                    </motion.p>
                  )}

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className={clsx(
                      item.btnText && item.btnLink ? 'mb-6' : 'mb-0',
                      item.subHeading
                        ? 'text-[24px] leading-[28px] font-medium text-[#1B1F27]'
                        : 'text-[18px] leading-[28px] font-normal text-[#60626C]'
                    )}
                  >
                    {item.description}
                  </motion.p>

                  {item.btnText && item.btnLink && (
                    <Link
                      className="page-btn min-w-full md:min-w-[150px] outline-black-btn"
                      href={item.btnLink}
                    >
                      {item.btnText}
                      <Image src="/images/right-arrow.svg" alt="arrow" width={24} height={24} />
                    </Link>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className={clsx(
                  'w-full md:w-[49.1%] mb-[40px] md:mb-0',
                  item.isRightImg ? 'order-0 md:order-1' : 'order-0'
                )}
              >
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={589}
                  height={501}
                  className="w-full object-cover h-[250px] md:h-[501px]"
                />
                <p className="text-[18px] leading-[18px] text-[#1B1F27] mt-4">{item.imgText}</p>
              </motion.div>
            </div>
          </div>
          {i !== data.length - 1 && (
            <div className="flex justify-center">
              <div className="w-full h-px bg-[#D8D8D8]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

function extractItems(fields: TextImageBlockResponseProps['fields']): TextImageBlockItem[] {
  if (!fields) {
    return [];
  }

  if ('datasource' in fields) {
    return fields.datasource?.children?.results ?? [];
  }

  if ('data' in fields) {
    return fields.data?.datasource?.children?.results ?? [];
  }

  return [];
}

function mapItem(item: TextImageBlockItem) {
  const heading = item.heading?.value ?? '';
  const subHeading = item.subHeading?.value ?? '';
  const description = item.description?.value ?? '';
  const img = item.img?.jsonValue?.value?.href
    ? `/${item.img.jsonValue.value.href.replace(/^\/+/, '')}`
    : '/images/cokkection-slider-1';
  const btnText = item.btnText?.value ?? '';
  const btnLink = item.btnLink?.jsonValue?.value?.href ?? '#';
  const isRightImg = item.isRightImg?.value === '1';
  const lightBack = item.lightBack?.value === '1';

  return {
    heading,
    subHeading,
    description,
    img,
    imgText: subHeading,
    btnText,
    btnLink,
    isRightImg,
    lightBack,
  };
}

export default TextWIthImageBlock;
