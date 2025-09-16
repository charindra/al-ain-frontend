import { Field, ImageField, LinkField, NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import { ComponentProps } from 'services/sitecore/component-props';
import Image from 'next/image';
import Link from 'next/link';
import UnderlineHeading from '../../../../common/components/UnderlineHeading';
import EventCard from './EventCard';

const eventData = [
  {
    img: '/images/event-img-1.jpg',
    tag: 'EXHIBITION',
    title: 'Ancient Civilizations of the UAE',
    date: '1 July ➜ 12 September 2025',
    btnText: 'Know More',
    btnLink: '/',
  },
  {
    img: '/images/event-img-2.jpg',
    tag: 'WORKSHOP',
    title: 'Traditional Crafts and Heritage',
    date: '15 August  ➜  30 October 2025',
    btnText: 'Learn More',
    btnLink: '/',
  },
  {
    img: '/images/event-img-3.jpg',
    tag: 'LECTURE',
    title: 'Archaeological Discoveries in Al Ain',
    date: '5 September  ➜  20 November 2025',
    btnText: 'Register',
    btnLink: '/',
  },
];

type EventGridViewProps = ComponentProps & {
  fields: {
    img: ImageField;
    tag: Field<string>;
    title: Field<string>;
    start_date: Field<string>;
    end_date: Field<string>;
    btnText: Field<string>;
    btnLink: LinkField;

    left_img: ImageField;
    left_tag: Field<string>;
    left_title: Field<string>;
    left_start_date: Field<string>;
    left_end_date: Field<string>;
    left_btnText: Field<string>;
    left_btnLink: LinkField;

    right_img: ImageField;
    right_tag: Field<string>;
    right_title: Field<string>;
    right_start_date: Field<string>;
    right_end_date: Field<string>;
    right_btnText: Field<string>;
    right_btnLink: LinkField;
  };
};

// type EventGridViewProps = {
//   data: cardItem[];
// };

const EventCardGrid = (props: EventGridViewProps): JSX.Element => {
  console.log('EventGridView props', props);

  // const EventGridView = (): JSX.Element => {
  return (
    <>
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
                      field={props?.fields?.img}
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
                        field={props?.fields?.tag ?? 'EXHIBITION'}
                      />
                      <div className="flex items-center">
                        <Text
                          tag="p"
                          className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4"
                          field={props?.fields?.start_date}
                        />
                        <Text
                          tag="p"
                          className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4"
                          field={props?.fields?.end_date}
                        />
                      </div>
                      <Text
                        tag="h4"
                        field={props?.fields?.title}
                        className="heading-font text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] text-white font-medium max-w-[530px] mb-4"
                      />
                      {/* <Link
                        field={props?.fields?.btnLink || '/'}
                        className="page-btn outline-white-btn lg:min-w-[165px] min-w-[147px] lg:min-h-[48px] min-h-[44px] more-btn"
                      >
                        {props?.fields?.btnText.value}
                        <Image src="/images/right-arrow.svg" alt="arrow" width="13" height="13" />
                      </Link> */}

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
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <EventCard data={eventData[1]} />
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <EventCard data={eventData[2]} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventCardGrid;
