'use client';

import { Link, NextImage, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import { EXPLORE_BOTTOM_SECTION_THEME } from './ExploreBottomSection.constants';
import { ExploreBottomSectionProps } from './ExploreBottomSection.types';

const ExploreBottomSection = (props: ExploreBottomSectionProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
    >
      <div className="relative overflow-hidden h-full md:h-[380px] explore-banner">
        <div className="w-full h-full">
          {props?.fields?.desktopImage?.value && (
            <NextImage
              field={props.fields.desktopImage}
              width={1440}
              height={380}
              className="w-full h-full object-cover hidden md:block"
            />
          )}

          {props?.fields?.mobileImage?.value && (
            <NextImage
              field={props.fields.mobileImage}
              width={390}
              height={406}
              className="w-full h-full object-cover block md:hidden"
            />
          )}
        </div>

        <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-[#0000004D] pb-[40px] md:pb-0">
          <div className="flex flex-wrap items-center flex-col md:flex-row justify-end md:justify-between mx-auto w-full lg:w-[88.82%] px-6 lg:px-0 h-full">
            <div className="w-full md:w-[50%] text-wrap">
              <div
                className="shape-1 hidden md:block"
                style={{ backgroundColor: EXPLORE_BOTTOM_SECTION_THEME.shadeColor }}
              />
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
                  tag="h3"
                  className="relative text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font text-white z-[2] mt-0 md:mt-[-20px] mb-8 md:mb-0  max-w-[320px]"
                  field={props?.fields?.heading}
                />
              </motion.div>

              <div
                className="shape-2 hidden md:block"
                style={{ backgroundColor: EXPLORE_BOTTOM_SECTION_THEME.shadeColor }}
              />
            </div>
            <div className="w-full md:w-[50%] max-w-[628px]">
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
                <RichText
                  tag="p"
                  field={props?.fields?.description}
                  className="relative text-[18px] lg:text-[20px] leading-[32px] lg:leading-[32px] font-light lg:font-medium text-white mb-8 z-[2]"
                />
              </motion.div>

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
                <Link
                  field={props?.fields?.ctaButton}
                  className="relative page-btn bg-white-btn z-[2] min-w-full md:min-w-[150px]"
                />
              </motion.div>
            </div>

            <div
              className="shape-3 hidden md:block"
              style={{ backgroundColor: EXPLORE_BOTTOM_SECTION_THEME.shadeColor }}
            />
          </div>
        </div>

        <div className="block md:hidden relative bg-[#94442E]">
          <div
            className="absolute top-[-42px] left-0 right-0 bg-[#94442E] h-[136px]"
            style={{ transform: 'skewY(calc(-8deg * -1))' }}
          />

          <div className="px-4 pb-8">
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
                tag="h3"
                className="relative text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font text-white z-[2] mt-0 md:mt-[-20px] mb-8 md:mb-0 lg:max-w-[500px]"
                field={props?.fields?.heading}
              />
            </motion.div>

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
              <RichText
                tag="p"
                field={props?.fields?.description}
                className="relative text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-light lg:font-medium text-white mb-8 z-[2]"
              />
            </motion.div>

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
              <Link
                field={props?.fields?.ctaButton}
                className="relative page-btn bg-white-btn z-[2] min-w-[46px] md:min-w-[150px] leading-[18px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreBottomSection;
