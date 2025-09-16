'use client';

import { motion } from 'framer-motion';
import { VISITOR_FACILITIES_DEFAULT } from './VisitorFacilities.constants';
import { VisitorFacilitiesProps } from './VisitorFacilities.types';

const VisitorFacilities = ({
  content = VISITOR_FACILITIES_DEFAULT,
}: VisitorFacilitiesProps): JSX.Element => {
  return (
    <div className="w-full bg-[#EBEBEB] flex-shrink-0">
      <div className="w-full bg-white py-16">
        <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[18px] leading-[24px] font-bold text-[#312C22] mb-2 uppercase">
              {content.heading}
            </p>
            <div className="w-[66px] h-[3px] bg-[#1B1F27] mb-6"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[48px] leading-[56px] font-medium text-[#1B1F27] heading-font"
          >
            {content.subHeading}
          </motion.h2>
        </div>
      </div>

      <div className="w-full bg-[#E9E9E9] h-[851px] flex-shrink-0">
        <div className="hidden md:block">
          <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto py-8 md:py-16">
            <div className="flex justify-between items-start mt-[5px] mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="text-[38px] leading-[40px] font-medium text-black heading-font">
                  {content.sectionHeading}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex w-[516px] justify-center items-center gap-[10px]"
              >
                <p className="text-[20px] leading-[28px] font-normal text-[#4D4E56]">
                  {content.sectionContent}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {content.cards.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: card.animationDelay }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="w-full h-[456px] bg-[#1B1F27] mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <p className="text-[24px] leading-[32px] font-normal text-[#33130A]">
                    {card.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto py-8">
            <h1 className="text-[28px] leading-[32px] font-medium text-black mb-4 mt-8 heading-font">
              {content.sectionHeading}
            </h1>

            <p className="text-[16px] leading-[24px] font-normal text-[#4D4E56] mb-8">
              {content.sectionContent}
            </p>

            <div className="flex gap-4 overflow-x-auto pb-5">
              {content.cards.map((card) => (
                <div className="flex-shrink-0" key={card.title}>
                  <div
                    className="flex w-[386px] h-[456px] items-start bg-[#1B1F27] mb-3 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <p className="text-[16px] leading-[24px] font-normal text-[#33130A]">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorFacilities;
