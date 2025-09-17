import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from 'common/components/HeadingText/HeadingText';
import UnderlineHeading from 'common/components/UnderlineHeading/UnderlineHeading';

// Types
export type TextEdgeImageListProps = {
  fields: {
    data: {
      datasource: {
        children: {
          results: TextEdgeImageItem[];
        };
      };
    };
  };
};

export type TextEdgeImageItem = {
  id: string;
  name: string;
  heading: Field<string>;
  subHeading: Field<string>;
  description: Field<string>; // Pass entire RichText field
  img?: {
    jsonValue?: {
      value?: {
        href?: string;
      };
    };
  };
  btnText: Field<string>;
  btnLink: {
    jsonValue?: {
      value?: {
        href?: string;
      };
    };
  };
  isRightImg: Field<string>; // value: '1' or ''
  lightBack: Field<string>; // value: '1' or ''
  bgColor: Field<string>; // Tailwind class
};

// Helper to convert Sitecore checkbox field
const isChecked = (val?: string): boolean => val === '1';

// Component
const TextEdgeImageBlock = (props: TextEdgeImageListProps): JSX.Element => {
  const data = props?.fields?.data?.datasource?.children?.results ?? [];
  console.log(data, 'jio');
  return (
    <>
      {data.map((item, index) => {
        const isRightImg = isChecked(item.isRightImg?.value);
        const lightBack = isChecked(item.lightBack?.value);
        const bgColor = item.bgColor?.value || '';

        const imgSrc = item.img?.jsonValue?.value?.href
          ? `/${item.img?.jsonValue?.value?.href.replace(/^\/+/, '')}`
          : '/images/cokkection-slider-1';

        const btnHref = item.btnLink?.jsonValue?.value?.href ?? '';

        return (
          <div
            key={item.id || index}
            className={clsx(
              'flex flex-wrap items-center lg:justify-between change-direction',
              bgColor
            )}
          >
            {/* Text Column */}
            <div
              className={clsx(
                'w-full md:w-[50.9%] px-4 md:px-6',
                isRightImg
                  ? 'order-1 md:order-0 lg:pl-[8.45%] lg:pr-[46px]'
                  : 'order-1 md:order-1 lg:pr-[8.45%] lg:pl-16'
              )}
            >
              {/* Subheading (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:block"
              >
                <UnderlineHeading
                  heading={item.subHeading?.value ?? ''}
                  className={clsx('mb-4 lg:mb-6', lightBack ? 'text-[#1B1F27]' : 'text-white')}
                  borderClass={lightBack ? 'bg-[#1B1F27]' : 'bg-white'}
                />
              </motion.div>

              {/* Heading (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:block"
              >
                <HeadingText
                  heading={item.heading?.value ?? ''}
                  className={clsx('mb-4 lg:mb-6', lightBack ? 'text-[#1B1F27]' : 'text-white')}
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <RichText
                  field={item.description}
                  className={clsx(
                    'text-[18px] leading-[24px] font-normal mb-8',
                    lightBack ? 'text-[#1B1F27]' : 'text-white'
                  )}
                />
              </motion.div>

              {/* Button */}
              {btnHref && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link
                    href={btnHref}
                    className={clsx(
                      'page-btn min-w-full md:min-w-[150px]',
                      lightBack ? 'outline-black-btn' : 'outline-white-btn'
                    )}
                  >
                    {item.btnText?.value}
                    <Image src="/images/right-arrow.svg" alt="arrow" width={24} height={24} />
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Image Column */}
            <div
              className={clsx(
                'w-full md:w-[49.1%] px-4 md:px-0 mb-9 md:mb-0',
                isRightImg ? 'order-0 md:order-1' : 'order-0 md:order-0'
              )}
            >
              {/* Subheading (Mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="block md:hidden mb-4"
              >
                <UnderlineHeading
                  heading={item.subHeading?.value ?? ''}
                  className={clsx(lightBack ? 'text-[#1B1F27]' : 'text-white')}
                  borderClass={lightBack ? 'bg-[#1B1F27]' : 'bg-white'}
                />
              </motion.div>

              {/* Heading (Mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="block md:hidden mb-4"
              >
                <HeadingText
                  heading={item.heading?.value ?? ''}
                  className={clsx(lightBack ? 'text-[#1B1F27]' : 'text-white')}
                />
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative w-full h-[268px] lg:h-[530px]">
                  <Image
                    src={imgSrc}
                    alt={item.subHeading?.value ?? 'Image'}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TextEdgeImageBlock;
