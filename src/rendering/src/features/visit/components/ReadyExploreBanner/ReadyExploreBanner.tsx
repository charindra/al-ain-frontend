'use client';

import { motion } from 'framer-motion';
import { ReadyExploreBannerProps } from './ReadyExploreBanner.types';
import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

const ReadyExploreBanner = (props: ReadyExploreBannerProps): JSX.Element => {
  const { fields } = props;
  const buttonLink = fields?.btnUrl;
  const buttonText = fields?.btnText?.value;

  return (
    <div id="hours-admission">
      <div className="w-full bg-white pt-[60px] pb-[16px]">
        <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text
              tag="p"
              className="text-[18px] leading-[24px] font-bold text-black mb-2 uppercase"
              field={fields?.heading}
            />
            <div className="w-[66px] h-[3px] bg-[#060606]"></div>
          </motion.div>
        </div>
      </div>

      <div className="w-full mb-0 md:mb-5">
        <div className="w-full lg:w-[83.1%] md:px-6 lg:px-0 mx-auto">
          <div
            className="bg-[#000000] h-auto md:h-[438px] flex flex-col justify-start items-start bg-cover bg-center relative"
            style={{ backgroundImage: `url(${fields?.bannerImage?.value?.src})` }}
          >
            <div className="w-full px-6 lg:px-10 relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-[80px] md:mt-[140px] mb-4 md:mb-6 text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-white font-medium heading-font"
              >
                <Text tag="p" className="text-[32px] md:text-[48px]" field={fields?.subtitle} />
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.45 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-8 md:mb-12 text-[20px] leading-[28px] font-medium text-white max-w-[600px]"
              >
                <Text tag="p" className="w-auto md:w-[446px]" field={fields?.content} />
              </motion.div>

              {buttonLink && buttonText && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="mb-[48px] md:mb-0"
                >
                  <Link className="bg-white-btn page-btn min-w-[150px]" field={buttonLink}>
                    {buttonText}
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyExploreBanner;
