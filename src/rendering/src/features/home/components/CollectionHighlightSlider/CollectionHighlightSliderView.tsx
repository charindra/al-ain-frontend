import { useTheme } from 'common/components/commonHooks/useTheme';
import UnderlineHeading from 'common/components/UnderlineHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { COLLECTION_HIGHLIGHT_SLIDES } from './CollectionHighlightSlider.constants';
import { CollectionHighlightSliderProps } from './CollectionHighlightSlider.types';

const CollectionHighlightSliderView = ({
  slides = COLLECTION_HIGHLIGHT_SLIDES,
}: CollectionHighlightSliderProps): JSX.Element => {
  const { dir } = useTheme();
  return (
    <section className="bg-[#ECE0CA] py-[56px] lg:py-[72px] mt-4">
      <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 change-direction">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <UnderlineHeading
            heading="Collection Highlights"
            className="text-[#000000] mb-4"
            borderClass="bg-[#000000]"
          />
        </motion.div>

        <div className="flex flex-wrap justify-between gap-4">
          <div className="hidden md:block">
            <Link href="/" className="page-btn outline-black-btn min-w-[164px]">
              View All
              <Image src="/images/right-arrow.svg" alt="arrow" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>

      <Swiper
        key={dir}
        slidesPerView={3.6}
        spaceBetween={16}
        //   autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false,
        //   }}
        //   speed={1500}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar]}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 2.8,
          },
          1440: {
            slidesPerView: 3.6,
          },
          1600: {
            slidesPerView: 4.5,
          },
        }}
        className="slider collection-slider change-direction"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="slide-item"
            >
              <div className="bg-[#1B1F27] top-img relative overflow-hidden group">
                <Image
                  src={slide.img}
                  alt={slide.heading}
                  width="388"
                  height="291"
                  className="w-full h-[291px] object-cover transition-transform duration-400 group-hover:scale-110"
                />
              </div>
              <div className="px-4 pt-6 pb-8 md:px-6 slide-text-wrap">
                <p className="uppercase text-[16px] leading-[20px] font-bold mb-8">{slide.tag}</p>
                <p className="text-[16px] leading-[20px] font-bold mb-[12px]">{slide.subHeading}</p>
                <p className="text-[36px] leading-[40px] lg:text-[32px] lg:leading-[40px] font-medium heading-font">
                  {slide.heading}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CollectionHighlightSliderView;
