'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { motion } from 'framer-motion';
import Heading from 'common/components/HeadingText';
import UnderlineHeading from 'common/components/UnderlineHeading';
import {
  PLAN_YOUR_JOURNEY_HEADING,
  PLAN_YOUR_JOURNEY_ITEMS,
  PLAN_YOUR_JOURNEY_MAP_URL,
} from './PlanYourJourney.constants';
import { PlanYourJourneyProps } from './PlanYourJourney.types';

const PlanYourJourney = ({ fields }: PlanYourJourneyProps): JSX.Element => {
  const datasource = fields?.data?.datasource;
  const headingValues = datasource?.heading;
  const heading = {
    topTitle: headingValues?.topTitle?.value ?? PLAN_YOUR_JOURNEY_HEADING.topTitle,
    title: headingValues?.title?.value ?? PLAN_YOUR_JOURNEY_HEADING.title,
  };

  const items =
    datasource?.accordionItems?.targetItems?.map((item) => ({
      title: item.title?.value ?? '',
      description: item.description?.value ?? '',
    })) ?? PLAN_YOUR_JOURNEY_ITEMS;

  return (
    <section>
      <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 py-[56px] lg:py-[72px]">
        <div className="change-direction">
          <div className="block lg:hidden mb-[17px]">
            <UnderlineHeading heading={heading.topTitle} />
            <Heading heading={heading.title} className="text-[#1B1F27] heading-font mt-4" />
          </div>

          <div className="grid grid-cols-1 gap-0 lg:gap-4 xl:gap-[40px] lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 lg:order-0"
            >
              <div className="hidden lg:block">
                <UnderlineHeading
                  heading={heading.topTitle}
                  className="text-[#1B1F27]"
                  borderClass="bg-[#1B1F27]"
                />
                <Heading heading={heading.title} className="text-[#1B1F27] heading-font mt-4" />
              </div>
              <div className="map-accordion mt-2 lg:mt-2">
                <Accordion className="p-0" defaultExpandedKeys={['0']}>
                  {items.map((item) => (
                    <AccordionItem key={item.title} title={item.title} className="accordion-item">
                      <p className="content">{item.description}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="order-0 lg:order-1 h-[388px] lg:h-[637px]"
            >
              <iframe
                src={PLAN_YOUR_JOURNEY_MAP_URL}
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
