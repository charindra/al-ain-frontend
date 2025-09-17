import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VisitorGuidelinesBlockProps } from './VisitorGuidelinesBlock.types';

const VisitorGuidelinesBlock = (props: VisitorGuidelinesBlockProps): JSX.Element => {
  const { fields } = props;
  const buttonLink = fields?.btnLink;
  const buttonText = fields?.btnText?.value;

  return (
    <div className="w-full bg-[#EBEBEB] flex-shrink-0">
      <div
        className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto py-[56px] lg:py-[72px] hidden md:block"
        dir="ltr"
      >
        <div className="flex items-center justify-between ">
          <div className="flex-1 max-w-[615px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-6"
            >
              <Text
                tag="h3"
                className="text-[18px] leading-[24px] font-bold text-[#1B1F27] mb-2 uppercase"
                field={fields?.topHeading}
              />

              <div className="w-[66px] h-[3px] bg-[#1B1F27]"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[48px] leading-[56px] font-medium text-[#1B1F27] mb-6 heading-font"
            >
              <Text
                tag="h1"
                className="text-[48px] leading-[56px] font-medium text-[#1B1F27] mb-6 heading-font"
                field={fields?.heading}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[20px] leading-[28px] font-normal text-[#4D4E56] mb-6"
            >
              <Text
                tag="h1"
                className="text-[20px] leading-[28px] font-normal text-[#4D4E56] mb-6"
                field={fields?.description}
              />
            </motion.div>

            {buttonLink && buttonText && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.9,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link className="page-btn outline-black-btn" field={buttonLink}>
                  {buttonText}
                  <Image src="/images/right-arrow.svg" alt="arrow" width="20" height="20" />
                </Link>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 1.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-shrink-0"
          >
            <div
              className="w-[385px] h-[466px] bg-[#1B1F27] bg-cover bg-center"
              style={{ backgroundImage: `url(${fields?.img?.value?.src})` }}
            ></div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto md:hidden flex flex-col justify-center items-center py-[56px] lg:py-[72px]">
        <div className="mb-6">
          <div
            className="max-w-[470px] h-[433px] bg-[#1B1F27] bg-cover bg-center"
            style={{ backgroundImage: `url(${fields?.img?.value?.src})` }}
          ></div>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-6">
            <Text
              tag="h3"
              className="text-[18px] leading-[24px] font-bold text-[#1B1F27] mb-2 uppercase"
              field={fields?.topHeading}
            />

            <div className="w-[66px] h-[3px] bg-[#1B1F27]"></div>
          </div>

          <Text
            tag="h1"
            className="text-[48px] leading-[56px] font-medium text-[#1B1F27] mb-6"
            field={fields?.heading}
          />

          <Text
            tag="h4"
            className="text-[20px] leading-[28px] font-normal text-[#4D4E56] mb-6"
            field={fields?.description}
          />

          {buttonLink && buttonText && (
            <div className="group flex items-center gap-2 w-fit px-6 py-[14px] border border-[#818388] bg-transparent text-[#1B1F27] text-[16px] leading-[18px] font-semibold cursor-pointer hover:bg-[#1B1F27] hover:text-white transition-colors">
              <Link className="flex gap-3" field={buttonLink}>
                {buttonText}{' '}
                <Image src="/images/right-arrow.svg" alt="arrow" width="20" height="20" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitorGuidelinesBlock;
