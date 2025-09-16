import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import UnderlineHeading from 'common/components/UnderlineHeading';
import EventCard from './EventCard';
import { SECONDARY_EVENT_CARDS } from './EventCardGrid.constants';
import { EventCardGridProps } from './EventCardGrid.types';

const EventCardGrid = ({ fields }: EventCardGridProps): JSX.Element => {
  return (
    <section className="my-[56px] lg:my-[72px]">
      <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 mb-4">
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
            heading="What's On"
            className="text-[#000000]"
            borderClass="bg-[#000000]"
          />
        </motion.div>
      </div>

      <div className="block mx-auto w-full lg:w-[83.1%]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 change-direction">
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-[537px] lg:h-[600px] relative transition-transform duration-400 event-card-wrap lg:px-0 px-[16px]">
                <div className="h-full w-full overflow-hidden">
                  <NextImage
                    field={fields?.img}
                    width={1193}
                    height={600}
                    className="w-full h-full object-center object-cover top-img"
                  />
                </div>
                <div className="absolute top-0 left-0 items-end h-full w-full lg:pt-[286px] pt-[285px] lg:px-0 px-[20px]">
                  <div className="px-4 pb-6 md:px-6 xl:px-[40px] xl:pb-[48px]">
                    <Text
                      tag="p"
                      className="text-white text-center text-[12px] leading-[12px] font-medium border border-[#A37C04] py-[7px] px-2 max-w-max mb-4 lg:mb-8 min-w-[90px] uppercase"
                      field={fields?.tag}
                    />
                    <div className="flex items-center">
                      <Text
                        tag="p"
                        className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4"
                        field={fields?.start_date}
                      />
                      <Text
                        tag="p"
                        className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4"
                        field={fields?.end_date}
                      />
                    </div>
                    <Text
                      tag="h4"
                      field={fields?.title}
                      className="heading-font text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] text-white font-medium max-w-[530px] mb-4"
                    />
                    <Link
                      href="/"
                      className="page-btn outline-white-btn lg:min-w-[165px] min-w-[147px] lg:min-h-[48px] min-h-[44px] more-btn"
                    >
                      Know More
                      <Image src="/images/right-arrow.svg" alt="arrow" width="13" height="13" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {SECONDARY_EVENT_CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <EventCard data={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCardGrid;
