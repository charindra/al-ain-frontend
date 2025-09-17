'use client';

import { RichText, RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadingText from 'common/components/HeadingText/HeadingText';
import { GalleryItemProps, Item, TextEdgeSliderBlockProps } from './TextEdgeSliderBlock.types';

const GalleryItem = ({ item }: GalleryItemProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current || typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768;
    const lastIndex = Math.max(0, item.sliderData.length - 1);
    swiperRef.current.slideTo(isMobile ? 0 : item.isRightImg ? 0 : lastIndex);
  }, [item]);

  return (
    <div className="al-ain-gallery-wrap">
      <div
        className={clsx(
          'flex flex-wrap pt-8 md:pt-[56px] lg:pt-[72px] pb-8 md:pb-[56px] lg:pb-8 lg:justify-between change-direction',
          { 'items-center': !item.changeBlock }
        )}
      >
        {/* Text Section */}
        <div
          className={clsx(
            'w-full md:w-[50.7%] px-4 md:px-6 pt-5 md:pt-0',
            item.isRightImg
              ? 'order-1 md:order-0 lg:pl-[8.45%] lg:pr-[46px]'
              : 'order-1 md:order-1 lg:pr-[8.45%] lg:pl-16'
          )}
        >
          {item.changeBlock ? (
            <div className="max-w-[506px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <HeadingText
                  heading={item.heading?.value ?? ''}
                  className="text-[#1B1F27] mb-[14px]"
                />
              </motion.div>

              {item.description.map((desc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.6 + idx * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <RichText
                    tag="p"
                    field={desc}
                    className="text-[18px] leading-[24px] text-[#1B1F27] font-normal mb-6 last:mb-0"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Text
                  tag="h5"
                  className="text-[28px] lg:text-[36px] leading-[32px] lg:leading-[40px] text-[#1B1F27] font-medium heading-font mb-[14px]"
                  field={item.heading}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <RichText
                  tag="p"
                  field={item.subHeading}
                  className="text-[18px] leading-[24px] text-[#1B1F27] font-bold mb-6"
                />
              </motion.div>

              {item.description.map((desc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.6 + idx * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <RichText
                    tag="p"
                    field={desc}
                    className="text-[18px] leading-[24px] text-[#1B1F27] font-normal mb-6 last:mb-0 mt-4"
                  />
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Slider Section */}
        <div
          className={clsx(
            'w-full md:w-[49.3%] px-4 md:px-0',
            item.isRightImg ? 'order-0 md:order-1' : 'order-0 md:order-0'
          )}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.2}
            spaceBetween={24}
            pagination={{ clickable: true }}
            loop
            modules={[Autoplay, Pagination]}
            className={clsx('slider change-direction galleries-slider', {
              'galleries-slider--left': !item.isRightImg,
            })}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              767: { slidesPerView: 1.1, spaceBetween: 16 },
            }}
          >
            {item.sliderData.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="slide-item">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                  >
                    <Image
                      src={slide.img?.value ?? '/images/cokkection-slider-1'}
                      alt={slide.text?.value ?? 'Gallery image'}
                      width={588}
                      height={501}
                      className="w-full h-full object-cover"
                      priority={i === 0}
                    />
                    <RichText
                      tag="p"
                      field={slide.text}
                      className={clsx(
                        'text-[#1B1F27] text-[14px] leading-[18px] font-normal mt-4',
                        {
                          'text-left md:text-right rtl:md:text-right rtl:text-left':
                            !item.isRightImg,
                        }
                      )}
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TextEdgeSliderBlock = (props: TextEdgeSliderBlockProps): JSX.Element => {
  const mappedItems: Item[] =
    props?.fields?.data.datasource.children.results.map((raw) => {
      const children = raw.children?.results ?? [];

      const sliderData = children
        .filter((c) => c.__typename === 'TextEdgeSliderData')
        .map((c) => ({
          img: {
            value: c.img?.jsonValue?.value?.href
              ? `/${c.img.jsonValue.value.href.replace(/^\/+/, '')}`
              : '/images/cokkection-slider-1',
          },
          text: { value: c.text?.value ?? '' },
        }));

      const description: RichTextField[] = children
        .filter((c) => c.__typename === 'TextEdgeDescription' && c.text !== undefined)
        .map((c) => c.text as RichTextField);

      return {
        heading: { value: raw.heading?.value ?? '' },
        subHeading: { value: raw.subHeading?.value ?? '' },
        description,
        isRightImg: raw.isRightImg?.value === '1' || raw.isRightImg?.value === 'true',
        changeBlock: raw.changeBlock?.value === '1' || raw.changeBlock?.value === 'true',
        sliderData,
      };
    }) ?? [];

  return (
    <section className="lg:pb-[100px]">
      {mappedItems.map((item, index) => (
        <GalleryItem key={index} item={item} />
      ))}
    </section>
  );
};

export default TextEdgeSliderBlock;
