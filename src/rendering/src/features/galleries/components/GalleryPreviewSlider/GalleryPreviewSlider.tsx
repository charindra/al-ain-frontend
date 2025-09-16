'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// interface FirstSlideItem {
//   topHeading?: string;
//   heading?: string;
//   subHeading: string;
//   origin?: string;
//   material?: string;
//   description?: string;
//   img: string;
//   galleryID: string;
// }

// interface SecondSlideItem {
//   img: string;
// }

// type GalleryPreviewSliderProps = {
//   slider1: FirstSlideItem[];
//   slider2: SecondSlideItem[];
//   galleryID?: string;
// };

const pageData = [
  {
    topHeading: 'GALLERY NAME',
    heading: 'Artefact Name',
    subHeading: 'ca -2300 to ca -1900',
    origin: 'Lorem ipsum dolor sit amet, Lorem ipsum',
    material: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/images/gallery-img-1.png',
    galleryID: 'Artefact Name',
  },
  {
    topHeading: 'ROYAL TREASURES',
    heading: 'Gold Necklace of Queen Puabi',
    subHeading: 'ca -2600 BCE',
    origin: 'Royal Cemetery of Ur, Mesopotamia',
    material: 'Gold, lapis lazuli, and carnelian beads',
    description:
      'Discovered in the tomb of Queen Puabi, this exquisite gold necklace represents the pinnacle of Sumerian jewelry craftsmanship. The intricate design features alternating gold and semi-precious stone beads, showcasing the advanced metallurgical skills of ancient artisans.',
    img: '/images/gal1.jpg',
    galleryID: 'Gold Necklace of Queen Puabi',
  },
  {
    topHeading: 'RELIGIOUS ICONS',
    heading: 'Ziggurat Model',
    subHeading: 'ca -2000 BCE',
    origin: 'Southern Mesopotamia',
    material: 'Terracotta with painted decoration',
    description:
      'This miniature model of a ziggurat temple represents the architectural marvels of ancient Mesopotamia. Ziggurats were massive stepped pyramids that served as temples and were believed to be dwelling places for the gods.',
    img: '/images/gallery-img-1.png',
    galleryID: 'Ziggurat Model',
  },
  {
    topHeading: 'DAILY LIFE',
    heading: "Potter's Wheel Fragment",
    subHeading: 'ca -3000 BCE',
    origin: 'Ancient workshop site, Mesopotamia',
    material: 'Terracotta with wear patterns',
    description:
      "This fragment from an ancient potter's wheel demonstrates the technological advancements in ceramic production during the Neolithic period. The wheel revolutionized pottery making, allowing for more efficient and consistent production.",
    img: '/images/gallery-img-1.png',
    galleryID: "Potter's Wheel Fragment",
  },
];

const slideData = [
  {
    img: '/images/gallery-img-1.png',
  },
  {
    img: '/images/gal1.jpg',
  },
  {
    img: '/images/gallery-img-1.png',
  },
  {
    img: '/images/gallery-img-1.png',
  },
];

// const GalleryPreviewSlider = (props: GalleryPreviewSliderProps): JSX.Element => {

const GalleryPreviewSlider = (): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  // Initialize slide from URL parameter (using galleryID)
  useEffect(() => {
    const slideParam = searchParams.get('slide');
    if (slideParam) {
      // Convert underscores back to spaces for matching
      const normalizedSlideParam = slideParam.replace(/_/g, ' ');
      const slideIndex = pageData.findIndex((item) => item.galleryID === normalizedSlideParam);
      if (slideIndex !== -1) {
        setActiveSlide(slideIndex);
      } else {
        // Fallback to numeric index for backward compatibility
        const numericIndex = parseInt(slideParam, 10);
        if (!isNaN(numericIndex) && numericIndex >= 0 && numericIndex < pageData.length) {
          setActiveSlide(numericIndex);
        }
      }
    }
  }, [searchParams]);

  // Initialize galleryID from URL parameter if not provided as prop
  //   useEffect(() => {
  //     const urlGalleryID = searchParams.get('galleryID');
  //     if (urlGalleryID && !galleryID) {
  //       // If galleryID is in URL but not provided as prop, you might want to handle this
  //       // For now, we'll just use the prop value
  //     }
  //   }, [searchParams, galleryID]);

  // Navigate to slide when swiper is ready and URL has slide parameter
  useEffect(() => {
    const slideParam = searchParams.get('slide');
    if (slideParam && swiperReady && mainSwiperRef.current) {
      // Convert underscores back to spaces for matching
      const normalizedSlideParam = slideParam.replace(/_/g, ' ');
      let slideIndex = pageData.findIndex((item) => item.galleryID === normalizedSlideParam);

      if (slideIndex === -1) {
        // Fallback to numeric index for backward compatibility
        slideIndex = parseInt(slideParam, 10);
      }

      if (slideIndex !== -1 && slideIndex >= 0 && slideIndex < pageData.length) {
        mainSwiperRef.current.slideTo(slideIndex);
      }
    }
  }, [searchParams, swiperReady]);

  const updateURL = (slideIndex: number) => {
    const params = new URLSearchParams(searchParams.toString());

    // Use galleryID if available, otherwise fallback to numeric index
    const currentSlide = pageData[slideIndex];
    if (currentSlide?.galleryID) {
      // Convert spaces to underscores for URL
      const urlSafeGalleryID = currentSlide.galleryID.replace(/ /g, '_');
      params.set('slide', urlSafeGalleryID);
    } else {
      params.set('slide', slideIndex.toString());
    }

    router.replace(`?${params.toString()}`, { scroll: false });
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
                    <p
                      className={`text-[#1B1F27] text-[18px] leading-[24px] font-bold mb-[8px] transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {pageData[activeSlide]?.topHeading}
                    </p>
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
                    <h2
                      className={`text-[#1B1F27] text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] font-medium heading-font mb-[8px] transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {pageData[activeSlide]?.heading}
                    </h2>
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
                    <p
                      className={`text-[#1B1F27] text-[18px] leading-[24px] font-medium transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {pageData[activeSlide]?.subHeading}
                    </p>
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
                <p className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold">Origin</p>
                <p
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {pageData[activeSlide]?.origin}
                </p>
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
                <p className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold">Material</p>
                <p
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {pageData[activeSlide]?.material}
                </p>
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
                <p className="text-[16px] leading-[20px] text-[#1B1F27] mb-2 font-bold">
                  Description
                </p>
                <p
                  className={`text-[16px] leading-[20px] text-[#1B1F27] font-medium transition-opacity duration-300 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {pageData[activeSlide]?.description}
                </p>
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
              }}
              onSlideChange={handleSlideChange}
            >
              {pageData.map((item, index1) => (
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
                {slideData.map((item, index2) => (
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
