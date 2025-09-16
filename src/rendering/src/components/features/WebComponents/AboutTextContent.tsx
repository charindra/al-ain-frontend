import { motion } from 'framer-motion';

import { Field, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type AboutTextContentProps = {
  fields: {
    heading: Field<string>;
    topHeading: Field<string>;
    subHeading: Field<string>;
    description: Field<string>;
  };
};

const AboutTextContent = (props: AboutTextContentProps): JSX.Element => {
  // console.log('museum data', props);
  return (
    <section className="overflow-hidden">
      <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 mt-[56px] lg:mt-[72px] mb-[56px] lg:mb-[50px] change-direction">
        <div className="flex flex-wrap gap-0 lg:gap-6">
          <div className="w-full lg:w-[43.8%]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Text
                tag="h2"
                className="text-[18px] leading-[24px] font-bold uppercase change-direction text-[#1B1F27]"
                field={props?.fields?.topHeading}
              />
              <div className="text-[#1B1F27] mb-4 h-[3px] w-[66px] block mt-2 bg-[#1B1F27]" />

              <Text
                tag="h2"
                className="text-[36px] xl:text-[60px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font my-4 lg:max-w-[400px] text-[#1B1F27]"
                field={props?.fields?.heading}
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-[48.3%]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Text
                tag="h1"
                className="text-[24px] leading-[32px] text-[#1B1F27] font-bold mb-4"
                field={props?.fields?.subHeading}
              />

              <RichText
                field={props?.fields?.description}
                className="text-[18px] leading-[24px] text-[#1B1F27] font-normal mb-4"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTextContent;
