import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type HeroBannerProps = {
  fields: {
    data: {
      datasource: {
        heading: Field<string>;
        subHeading: Field<string>;
        heroImages: {
          targetItems: {
            url: {
              url: string;
            };
          }[];
        };
      };
    };
  };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  const data = props?.fields?.data?.datasource;
  return (
    <div className="pt-[99px] lg:pt-[135px]">
      <div className="relative home-slider-banner">
        <Swiper
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (_index, className) => `<span class="${className}"></span>`,
          }}
          effect={'fade'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1500}
          // creativeEffect={{
          //   prev: {
          //     shadow: false,
          //     translate: ['-20%', 0, -1],
          //   },
          //   next: {
          //     translate: ['100%', 0, 0],
          //   },
          // }}
          loop
          modules={[Autoplay, EffectFade, Pagination]}
          className="slider change-direction h-[calc(100vh-106px)] lg:h-[calc(100vh-135px)]"
        >
          {data?.heroImages?.targetItems?.map((slide, index) => (
            <SwiperSlide key={`${index.toString()}`}>
              <div className="w-full h-full">
                <Image
                  src={slide?.url?.url}
                  alt="Hero Banner"
                  className="w-full h-full object-cover"
                  width={1440}
                  height={960}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Content */}
        <div className="absolute bottom-16 ltr:left-0 rtl:right-0 home-banner-overlay change-direction">
          <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
            <div className="mb-4 z-[1] relative">
              <Text
                tag="h2"
                className="text-[18px] leading-[24px] font-bold uppercase change-direction text-white"
                field={data?.subHeading}
              />
              <span className={`h-[3px] w-[66px] block mt-2 bg-white`} />
            </div>

            <Text
              tag="h1"
              className="text-white text-[40px] leading-[48px] lg:text-[56px] lg:leading-[72px] xl:text-[72px] xl:leading-[88px] font-medium heading-font uppercase mb-4 z-[1] relative"
              field={data?.heading}
            />

            <div className="custom-pagination flex md:gap-6 justify-start z-[1] relative"></div>
          </div>
        </div>

        <style jsx>{`
          .custom-pagination {
            display: flex;
            flex-direction: row;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            margin-top: 16px;
          }
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #ffffff;
            width: 16px;
            height: 16px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroBanner;
