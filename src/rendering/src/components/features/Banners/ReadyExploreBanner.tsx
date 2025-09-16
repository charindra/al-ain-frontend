'use client';

import { motion } from 'framer-motion';
import { ComponentProps } from 'lib/component-props';

const ReadyToExploreData = {
  heading: 'TICKETS & OPENING HOURS',
  bannerImage: '/images/visit-page/explore-section.png',
  subtitle: 'Ready To Explore?',
  content:
    'Al Ain Museum showcases the rich heritage of the UAE through archaeological finds, traditional objects, and cultural exhibits.',
  btnText: 'Book Now',
  btnUrl: '/',
};

type ReadyExploreBannerProps = ComponentProps & {
  fields: {
    heading: string;
    bannerImage: string;
    subtitle: string;
    content: string;
    btnText: string;
    btnUrl: string;
  };
};

const ReadyExploreBanner = (props: ReadyExploreBannerProps): JSX.Element => {
  // const ReadyExploreBanner = (): JSX.Element => {
  console.log('ReadyExploreBanner props', props);
  return (
    <>
      <div id="hours-admission">
        <div className="w-full bg-white pt-[60px] pb-[16px]">
          <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[18px] leading-[24px] font-bold text-black mb-2 uppercase">
                {ReadyToExploreData?.heading}
              </p>
              <div className="w-[66px] h-[3px] bg-[#060606]"></div>
            </motion.div>
          </div>
        </div>

        {/* Ready To Explore Section - Black Box */}
        <div className="w-full mb-0 md:mb-5">
          <div className="w-full lg:w-[83.1%] md:px-6 lg:px-0 mx-auto">
            <div
              className="bg-[#000000] h-[242px] md:h-[438px] flex flex-col justify-start items-start bg-cover bg-center relative"
              style={{ backgroundImage: `url(${ReadyToExploreData?.bannerImage})` }}
            >
              <div className="w-full px-6 lg:px-8 relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.3,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-[80px] md:mt-[140px] mb-4 md:mb-6 md:ml-8 text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-white font-medium heading-font"
                >
                  {ReadyToExploreData?.subtitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.45,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="mb-8 md:mb-12 md:ml-8 text-[20px] leading-[28px] font-medium text-white max-w-[600px]"
                >
                  {ReadyToExploreData?.content}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.6,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center justify-center gap-2 w-[193px] px-6 py-[14px] bg-white text-black text-[16px] font-semibold border-none cursor-pointer md:ml-8"
                >
                  {ReadyToExploreData?.btnText}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyExploreBanner;
