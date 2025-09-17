'use client';

import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GalleryItem, GalleryPreviewSliderProps } from './GalleryPreviewSlider.types';

const GalleryPreviewSlider = (props: GalleryPreviewSliderProps): JSX.Element => {
  const searchParams = useSearchParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  // Bind data from Sitecore
  const slider1: GalleryItem[] = props.fields.data.datasource.children.results.map((item) => ({
    galleryID: item.name.value || 'gallery-' + Math.random().toString(36).substr(2, 5),
    heading: item.heading?.value || 'Sample Heading',
    subHeading: item.subHeading?.value || 'Sample Heading',
    topHeading: item.subHeading?.value || 'Sample Top Heading',
    description: item.description?.value || 'Sample description text goes here.',
    descriptionTitle: item.descriptionTitle?.value || 'Description ',
    originTitle: item.originTitle?.value || 'Origin',
    origin: item.origin?.value || 'Sample Origin',
    materialTitle: item.materialTitle?.value || 'Material',
    material: item.material?.value || 'Sample Material',
    img: item.img?.jsonValue?.value?.href
      ? item.img.jsonValue.value.href.startsWith('/')
        ? item.img.jsonValue.value.href
        : '/' + item.img.jsonValue.value.href.split('/').filter(Boolean).join('/')
      : '/images/cokkection-slider-1',
  }));

  // Use same data for thumbnails for simplicity
  const slider2: GalleryItem[] = slider1;

  // Initialize slide from URL parameter
  useEffect(() => {
    const slideParam = searchParams.get('slide');
    if (slideParam) {
      const normalizedSlideParam = slideParam.replace(/_/g, ' ');
      const slideIndex = slider1.findIndex((item) => item.galleryID === normalizedSlideParam);
      if (slideIndex !== -1) {
        setActiveSlide(slideIndex);
      } else {
        const numericIndex = parseInt(slideParam, 10);
        if (!isNaN(numericIndex) && numericIndex >= 0 && numericIndex < slider1.length) {
          setActiveSlide(numericIndex);
        }
      }
    }
  }, [searchParams, slider1]);

  const updateURL = (slideIndex: number) => {
    const params = new URLSearchParams(window.location.search);
    const currentSlide = slider1[slideIndex];

    if (currentSlide?.heading) {
      // Convert heading to url-safe version
      const urlSafeHeading = currentSlide.heading.replace(/\s+/g, '_');
      params.set('slide', urlSafeHeading);
    } else {
      params.set('slide', slideIndex.toString());
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsFading(true);
    setActiveSlide(swiper.activeIndex);
    updateURL(swiper.activeIndex);
    setTimeout(() => {
      setIsFading(false);
    }, 150);
  };

  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current) {
      setIsFading(true);
      setActiveSlide(index);
      updateURL(index);
      mainSwiperRef.current?.slideTo(index);
      setTimeout(() => {
        setIsFading(false);
      }, 150);
    }
  };

  return (
    <section className="my-[56px] xl:my-[72px]">
      <div className="block mx-auto w-full lg:w-[83.1%] relative">
        <div className="flex flex-wrap gap-6 lg:gap-[5%] xl:gap-[11.7%] items-center">
          {/* Left side - Text content with static navigation */}
          <div className="w-full lg:w-[40%] xl:w-[29.5%] order-1 lg:order-0 px-4 md:px-6 lg:px-0">
            <div className="border-b border-[#D8D8D8] pb-[17px] lg:pb-[31px]">
              <div className="flex flex-wrap justify-between">
                <div className="w-[calc(100%-112px)] lg:w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Text
                      tag="p"
                      className={`text-[#1B1F27] text-[18px] leading-[24px] font-bold mb-[8px] transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                      field={{ value: slider1[activeSlide]?.topHeading }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeOut',
                      delay: 0.6,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Text
                      tag="h2"
                      className={`text-[#1B1F27] text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] font-medium heading-font mb-[8px] transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                      field={{ value: slider1[activeSlide]?.heading }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeOut',
                      delay: 0.8,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Text
                      tag="p"
                      className={`text-[#1B1F27] text-[18px] leading-[24px] font-medium transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                      field={{ value: slider1[activeSlide]?.subHeading }}
                    />
                  </motion.div>
                </div>
                {/* mobile navigation */}
                <div className="w-[96px]">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="lg:hidden flex flex-wrap items-center border border-[#8D8F94] w-max">
                      <button
                        onClick={() => mainSwiperRef.current?.slidePrev()}
                        className="transform rotate-180 rtl:rotate-0 h-12 w-12 flex flex-wrap items-center justify-center border-l border-[#8D8F94] hover:bg-gray-100 transition-colors"
                      >
                        <Image
                          src="/images/slider-nav-arrow.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </button>
                      <button
                        onClick={() => mainSwiperRef.current?.slideNext()}
                        className="transform rotate-0 rtl:rotate-180 h-12 w-12 flex flex-wrap items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Image
                          src="/images/slider-nav-arrow.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="border-b border-[#D8D8D8] py-[17px] lg:py-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Text
                  tag="p"
                  className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold"
                  field={{ value: slider1[activeSlide]?.originTitle }}
                />
                <Text
                  tag="p"
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                  field={{ value: slider1[activeSlide]?.origin }}
                />
              </motion.div>
            </div>
            <div className="border-b border-[#D8D8D8] py-[17px] lg:py-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 1.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Text
                  tag="p"
                  className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold"
                  field={{ value: slider1[activeSlide]?.materialTitle }}
                />
                <Text
                  tag="p"
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                  field={{ value: slider1[activeSlide]?.material }}
                />
              </motion.div>
            </div>
            <div className="py-[17px] lg:py-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Text
                  tag="p"
                  className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold"
                  field={{ value: slider1[activeSlide]?.descriptionTitle }}
                />
                <Text
                  tag="p"
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                  field={{ value: slider1[activeSlide]?.description }}
                />
              </motion.div>
            </div>

            {/* desktop navigation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="hidden lg:flex flex-wrap items-center border border-[#8D8F94] w-max lg:mt-6 xl:mt-[51px]">
                <button
                  onClick={() => mainSwiperRef.current?.slidePrev()}
                  className="cursor-pointer transform rotate-180 rtl:rotate-0 h-12 w-12 flex flex-wrap items-center justify-center border-l border-[#8D8F94] hover:bg-gray-100 transition-colors"
                >
                  <Image src="/images/slider-nav-arrow.svg" alt="arrow" width={20} height={20} />
                </button>
                <button
                  onClick={() => mainSwiperRef.current?.slideNext()}
                  className="cursor-pointer transform rotate-0 rtl:rotate-180 h-12 w-12 flex flex-wrap items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Image src="/images/slider-nav-arrow.svg" alt="arrow" width={20} height={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Main image and static thumbnails */}
          <div className="w-full lg:w-[55%] xl:w-[49%] order-0 lg:order-1">
            {/* Main image swiper */}
            <Swiper
              spaceBetween={0}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiper2 change-direction"
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
                setSwiperReady(true);
                console.log('Swiper is ready:', swiperReady);
              }}
              onSlideChange={handleSlideChange}
            >
              {slider1.map((item, index1) => (
                <SwiperSlide key={index1}>
                  <div className="h-[659px]">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full"
                    >
                      <Image
                        src={item.img}
                        width={586}
                        height={659}
                        className="w-full h-full object-cover"
                        alt="slider image"
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Static thumbnail section under main image */}
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={8}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper preview-bottom-slider change-direction"
                breakpoints={{
                  0: {
                    slidesPerView: 7,
                  },
                  390: {
                    slidesPerView: 7,
                  },
                }}
              >
                {slider2.map((item, index2) => (
                  <SwiperSlide key={index2}>
                    <div
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => handleThumbnailClick(index2)}
                    >
                      <div className="overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: index2 * 0.2,
                          }}
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            src={item.img}
                            width={73}
                            height={74}
                            className="w-full h-full object-cover"
                            alt="slider image"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSlider;
