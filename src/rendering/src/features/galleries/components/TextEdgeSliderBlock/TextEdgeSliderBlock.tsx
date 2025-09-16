'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadingText from '../HeadingText';

interface SliderItem {
  img: string;
  text: string;
}

interface Description {
  text: string;
}

interface Item {
  heading?: string;
  subHeading?: string;
  description: Description[];
  isRightImg: boolean;
  sliderData: SliderItem[];
}

type TextEdgeSliderBlockProps = {
  changeBlock?: boolean;
};

const pageData: Item[] = [
  {
    heading: 'Aflaj & Wells',
    subHeading: 'An enduring system of survival, ingenuity, and heritage.',
    description: [
      {
        text: 'This gallery brings you face-to-face with the deep history of water management in Al Ain, where ancient wells and falaj shafts reveal how communities harnessed natural resources to thrive in an arid landscape.',
      },
    ],
    isRightImg: true,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Origins & Encounters',
    subHeading: 'Foundations of the museum, global connections, and enduring vision',
    description: [
      {
        text: 'This gallery explores how the Al Ain Museum came into being, its early mission, and its place within a broader network of global heritage. From its founding vision to its status within a UNESCO World Heritage Site, the gallery highlights how archaeology, international exchange, and Emirati leadership helped shape one of the region’s most important cultural institutions.',
      },
    ],
    isRightImg: false,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Tomb Gallery',
    subHeading: 'Burial rituals, archaeological layers, and a view across time',
    description: [
      {
        text: 'This gallery presents one of Al Ain’s most revealing archaeological finds — a pre-Islamic cemetery where monumental tombs, burial artefacts, and camel remains offer a window into the beliefs and rituals of a society that lived more than 2,000 years ago.',
      },
    ],
    isRightImg: true,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Beneath The Surface',
    subHeading: 'Exploring the Aflaj: Traditional Water Systems Revealed',
    description: [
      {
        text: 'This gallery offers a rare opportunity to walk alongside a fully exposed falaj, a traditional underground irrigation channel, and witness the ingenuity behind one of the region’s most enduring water systems.',
      },
    ],
    isRightImg: false,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Palaeolithic Beginnings',
    subHeading: 'Early humans, shifting climates, and the tools they left behind',
    description: [
      {
        text: 'This gallery introduces visitors to the deep past of the Al Ain region, tracing human presence back over 300,000 years through stone tools found near Jebel Hafit, some of the oldest evidence of life in the UAE.',
      },
    ],
    isRightImg: true,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Neolithic, Bronze and Iron Age',
    subHeading: 'Innovation, community, and continuity from 6000 to 300 BCE',
    description: [
      {
        text: 'This gallery spans over five millennia of life in Al Ain, showcasing how communities adapted, innovated, and expressed their identities through daily practices, material culture, and monumental traditions.',
      },
    ],
    isRightImg: false,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Islamic Era to 20th Century',
    subHeading: 'Faith, exchange, and transformation from 600 CE to 1960 CE',
    description: [
      {
        text: 'This gallery explores how Islam shaped daily life and how Al Ain remained connected to the wider world through trade, pilgrimage, and shared traditions across centuries.',
      },
    ],
    isRightImg: true,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'Late Islamic Period',
    subHeading: 'Resilience, skill, and social expression from 1650 to 1995 CE',
    description: [
      {
        text: 'This section explores a vibrant period of continuity and innovation in Al Ain, where communities adapted to shifting economic, political, and environmental conditions. Spanning over three centuries, the gallery highlights local craftsmanship, domestic life, agriculture, and social traditions that continue to echo in the present day.',
      },
    ],
    isRightImg: false,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'The Visible Storage',
    subHeading: 'Behind the scenes of collections care and research',
    description: [
      {
        text: 'This section opens a window into what happens beyond the gallery walls — the essential work that preserves the museum’s collections for future generations.',
      },
    ],
    isRightImg: true,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    heading: 'The Fort',
    subHeading: 'Strategic landmark and village heart',
    description: [
      {
        text: 'This section explores Sultan Fort as both a historic structure and a cultural anchor for Al Ain. Built in 1910 by Sheikh Sultan bin Zayed, father of Sheikh Zayed, the fort served multiple purposes — from defense and territorial marking to communal gatherings. It stands today as part of the UNESCO-listed Cultural Sites of Al Ain.',
      },
    ],
    isRightImg: false,
    sliderData: [
      {
        img: '/images/al-ain-gallery-img-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        img: '/images/al-ain-gallery-img-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
];

interface GalleryItemProps {
  item: Item;
  changeBlock: boolean;
}

const GalleryItem = ({ item, changeBlock }: GalleryItemProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768;
    const lastIndex = Math.max(0, item.sliderData.length - 1);

    if (isMobile) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideTo(item.isRightImg ? 0 : lastIndex);
    }
  }, [item]);
  return (
    <div className="al-ain-gallery-wrap">
      <div
        className={clsx(
          'flex flex-wrap pt-8 md:pt-[56px] lg:pt-[72px] pb-8 md:pb-[56px] lg:pb-8 lg:justify-between change-direction',
          { 'items-center': !changeBlock }
        )}
      >
        <div
          className={clsx(
            'w-full md:w-[50.7%] px-4 md:px-6 pt-5 md:pt-0',
            item.isRightImg
              ? 'order-1 md:order-0 lg:pl-[8.45%] lg:pr-[46px]'
              : 'order-1 md:order-1 lg:pr-[8.45%] lg:pl-16'
          )}
        >
          {changeBlock ? (
            <div className="max-w-[506px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <HeadingText heading={item.heading ?? ''} className="text-[#1B1F27] mb-[14px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {item.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-[18px] leading-[24px] text-[#1B1F27] font-normal mb-6 last:mb-0"
                  >
                    {desc.text}
                  </p>
                ))}
              </motion.div>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h5 className="text-[28px] lg:text-[36px] leading-[32px] lg:leading-[40px] text-[#1B1F27] font-medium heading-font mb-[14px]">
                  {item.heading}
                </h5>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-[18px] leading-[24px] text-[#1B1F27] font-bold mb-6">
                  {item.subHeading}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {item.description.map((desc, idx) => (
                  <p key={idx} className="text-[18px] leading-[24px] text-[#1B1F27] font-normal">
                    {desc.text}
                  </p>
                ))}
              </motion.div>
            </>
          )}
        </div>

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
                      src={slide.img}
                      alt={slide.text}
                      width={588}
                      height={501}
                      className="w-full h-full object-cover"
                    />
                    <p
                      className={clsx(
                        'text-[#1B1F27] text-[14px] leading-[18px] font-normal mt-4',
                        {
                          'text-left md:text-right rtl:md:text-right rtl:text-left':
                            !item.isRightImg,
                        }
                      )}
                    >
                      {slide.text}
                    </p>
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

const TextEdgeSliderBlock = ({ changeBlock = false }: TextEdgeSliderBlockProps) => {
  return (
    <section className="lg:pb-[100px]">
      {pageData.map((item, index) => (
        <GalleryItem key={index} item={item} changeBlock={changeBlock} />
      ))}
    </section>
  );
};

export default TextEdgeSliderBlock;
