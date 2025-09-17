'use client';

import { motion } from 'framer-motion';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { OpeningHoursProps } from './OpeningHours.types';

const OpeningHours = (props: OpeningHoursProps): JSX.Element => {
  const { fields } = props;
  return (
    <div className="w-full">
      <div className="w-full lg:w-[83.1%] md:px-6 lg:px-0 mx-auto">
        <div className="block bg-[#33130A] min-h-[290px] p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-start gap-6 selection: border-b md:border-r md:border-b-0 pb-12 md:pb-0 border-[#534C3D]"
            >
              <Text
                tag="h3"
                className="text-3xl lg:text-5xl font-medium text-white heading-font"
                field={fields?.heading}
              />
              <div className="flex w-full md:max-w-[609px] items-start gap-2 flex-shrink">
                <Text
                  tag="h3"
                  className="text-2xl md:text-[28px] lg:text-[32px] text-white"
                  field={fields?.subHeading}
                />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4"
            >
              <Text
                tag="h3"
                className="text-2xl md:text-[28px] text-white heading-font font-medium"
                field={fields?.content}
              />

              <div className="space-y-5">
                <div className="flex justify-between text-lg text-white">
                  <Text
                    tag="h3"
                    className="text-[24px] font-bold text-white"
                    field={fields?.closedDays}
                  />
                  <Text
                    tag="h3"
                    className="text-[24px] font-bold text-white"
                    field={fields?.closedTag}
                  />
                </div>

                <div className="flex justify-between text-lg text-white">
                  <Text
                    tag="h3"
                    className="text-[24px] font-bold text-white"
                    field={fields?.openingWeekDays}
                  />
                  <Text
                    tag="h3"
                    className="text-[24px] font-normal text-white"
                    field={fields?.openingHoursWeekDays}
                  />
                </div>

                <div className="flex justify-between text-lg text-white">
                  <Text
                    tag="h3"
                    className="text-[24px] font-bold text-white"
                    field={fields?.openingWeekEnds}
                  />
                  <Text
                    tag="h3"
                    className="text-[24px] text-white font-normal"
                    field={fields?.openingHoursWeekEnds}
                  />
                </div>
              </div>

              <div className="border-t border-[#534C3D] mt-4 pt-4"></div>
              <Text tag="h3" className="text-[20px] text-white" field={fields?.specialNotes} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
