import { motion } from 'framer-motion';
import { ComponentProps } from 'services/sitecore/component-props';

const OpeningHoursData = {
  heading: 'Opening Hours',
  subHeading: 'Galleries & Exhibitions:',
  content: 'Al Ain Museum is closed on Mondays',
  OpeningWeekDays: 'Tuesday - Thursday:',
  OpeningWeekEnds: 'Friday - Sunday:',
  OpeningHoursWeekDays: '10am - 6:30pm*',
  OpeningHoursWeekEnds: '10am - 8:30pm*',
  SpecialNotes: '* Last Entry 15 mins prior to Galleries and Exhibition closure.',
};

type OpeningHoursProps = ComponentProps & {
  fields: {
    heading: string;
    subHeading: string;
    content: string;
    openingWeekDays: string;
    openingWeekEnds: string;
    openingHoursWeekDays: string;
    openingHoursWeekEnds: string;
    specialNotes: string;
  };
};

const OpeningHours = (props: OpeningHoursProps): JSX.Element => {
  console.log('OpeningHours props', props);
  return (
    <>
      <div className="w-full">
        <div className="w-full lg:w-[83.1%] md:px-6 lg:px-0 mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex bg-[#33130A] h-[212px] items-center px-8">
            <div className="flex w-full gap-[80px] pl-5">
              {/* Left Side - Opening Hours */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.9,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-start gap-[10px] w-[435px] flex-shrink-0"
              >
                <div className="flex items-center mb-[66px]">
                  <h3 className="text-[24px] leading-[32px] font-bold text-white heading-font">
                    {OpeningHoursData?.heading}
                  </h3>
                </div>

                <div className="flex w-[435px] items-start gap-[10px] flex-shrink-0">
                  <p className="text-[18px] leading-[24px] font-normal text-white">
                    {OpeningHoursData?.content}
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Galleries & Exhibitions */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1"
              >
                <h3 className="text-[24px] leading-[32px] font-bold text-white mb-4 heading-font">
                  {OpeningHoursData?.subHeading}
                </h3>

                <div className="mb-4">
                  <p className="text-[18px] leading-[24px] text-white mb-1">
                    <span className="font-bold">{OpeningHoursData?.OpeningWeekDays}</span>{' '}
                    <span className="font-normal">{OpeningHoursData?.OpeningHoursWeekDays}</span>
                  </p>
                  <p className="text-[18px] leading-[24px] text-white">
                    <span className="font-bold">{OpeningHoursData?.OpeningWeekEnds}</span>{' '}
                    <span className="font-normal">{OpeningHoursData?.OpeningHoursWeekEnds}</span>
                  </p>
                </div>

                <p className="text-[16px] leading-[20px] font-medium text-white">
                  {OpeningHoursData?.SpecialNotes}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden bg-[#6B6B6B] h-[322px] py-6">
            <div className="px-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-[20px] leading-[28px] font-bold text-white">
                  {OpeningHoursData?.heading}
                </h3>
              </div>

              <p className="text-[16px] leading-[24px] font-normal text-white mb-4">
                {OpeningHoursData?.content}
              </p>

              <h4 className="text-[16px] leading-[24px] font-bold text-white mb-2">
                {OpeningHoursData?.subHeading}
              </h4>

              <p className="text-[16px] leading-[24px] font-normal text-white mb-1">
                <strong>{OpeningHoursData?.OpeningWeekDays}</strong>{' '}
                {OpeningHoursData?.OpeningHoursWeekDays}
              </p>

              <p className="text-[16px] leading-[24px] font-normal text-white mb-3">
                <strong>{OpeningHoursData?.OpeningWeekEnds}</strong>
                {OpeningHoursData?.OpeningHoursWeekEnds}
              </p>

              <p className="text-[14px] leading-[20px] font-normal text-white">
                {OpeningHoursData?.SpecialNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningHours;
