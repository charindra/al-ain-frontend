'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import Heading from 'common/components/HeadingText';
import UnderlineHeading from 'common/components/UnderlineHeading';

const data = [
  {
    title: 'By Car',
    description:
      'Al Ain Museum showcases the rich heritage of the UAE through archaeological finds, traditional objects, and cultural exhibits. Visitors can explore galleries dedicated to daily life, ancient craftsmanship, and the legacy of the region’s communities.',
  },
  {
    title: 'By Taxi',
    description:
      'Al Ain Museum showcases the rich heritage of the UAE through archaeological finds, traditional objects, and cultural exhibits. Visitors can explore galleries dedicated to daily life, ancient craftsmanship, and the legacy of the region’s communities.',
  },
  {
    title: 'By Bus',
    description:
      'Al Ain Museum showcases the rich heritage of the UAE through archaeological finds, traditional objects, and cultural exhibits. Visitors can explore galleries dedicated to daily life, ancient craftsmanship, and the legacy of the region’s communities.',
  },
];

// interface AccordionContent {

//   title: Field<string>;
//   description: Field<string>;
// }

// interface FaqHeading {
//   topTitle: Field<string>;
//   title: Field<string>;
// }

type PlanYourJourneyProps = {
  fields: {
    data: {
      datasource: {
        heading: {
          topTitle: Field<string>;
          title: Field<string>;
        };
        accordionItems: {
          targetItems: {
            title: Field<string>;
            description: Field<string>;
          }[];
        };
      };
    };
  };
};

const PlanYourJourney = (props: PlanYourJourneyProps): JSX.Element => {
  console.log('PlanYourJourney', props);

  // const PlanYourJourney = (): JSX.Element => {
  return (
    <section>
      <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 py-[56px] lg:py-[72px]">
        <div className="change-direction">
          <div className="block lg:hidden mb-[17px]">
            <UnderlineHeading heading="Getting Here" />
            <Heading heading="Plan Your Journey" className="text-[#1B1F27] heading-font mt-4" />
          </div>

          <div className="grid grid-cols-1 gap-0 lg:gap-4 xl:gap-[40px] lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 lg:order-0"
            >
              <div className="hidden lg:block">
                <UnderlineHeading
                  heading="Getting Here"
                  className="text-[#1B1F27]"
                  borderClass="bg-[#1B1F27]"
                />
                <Heading heading="Plan Your Journey" className="text-[#1B1F27] heading-font mt-4" />
              </div>
              <div className="map-accordion mt-2 lg:mt-2">
                <Accordion className="p-0" defaultExpandedKeys={['0']}>
                  {data.map((item, index) => (
                    <AccordionItem
                      key={`${index.toString()}`}
                      title={item.title}
                      className="accordion-item"
                    >
                      <p className="content">{item.description}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="order-0 lg:order-1 h-[388px] lg:h-[637px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4515.88790186929!2d55.771483776061125!3d24.216153970735206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab6db5a7beca7%3A0x78e62b0656050886!2sAl%20Ain%20Museum!5e1!3m2!1sen!2slk!4v1757486147903!5m2!1sen!2slk"
                width="100%"
                height="637"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourJourney;
