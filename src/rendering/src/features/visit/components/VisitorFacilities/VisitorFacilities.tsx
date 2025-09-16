import { motion } from 'framer-motion';

const VisitorsFAcilitiesData = {
  Heading: 'VISITOR FACILITIES & AMENITIES',
  SubHeading: 'Services To Better Your Experience',
  SectionHeading: 'Food and Retail',
  SectionContent:
    'Lorem ipsum dolor sit amet consectetur. Id tristique sed donec tellus. Platea in risus scelerisque congue. Consequat pellentesque egestas consequat sed phasellus tincidunt nisl nisl.',
  cards: [
    {
      image: '/images/visit-page/Foodandretail-1.png',
      title: 'Caffee Name ABC',
      animationDelay: 1.2,
    },
    {
      image: '/images/visit-page/Foodandretail-2.png',
      title: 'Caffee Name ABC',
      animationDelay: 1.5,
    },
    {
      image: '/images/visit-page/Foodandretail-3.png',
      title: 'Retail Store ABC',
      animationDelay: 1.8,
    },
  ],
};

// interface VisitorFacilityCard {
//   image: string;
//   title: string;
//   animationDelay: number;
// }

// interface VisitorsFacilitiesProps {
//   Heading: string;
//   SubHeading: string;
//   SectionHeading: string;
//   SectionContent: string;
//   cards: VisitorFacilityCard[];
// }

// const VisitorFacilities = (props: VisitorsFacilitiesProps): JSX.Element => {

const VisitorFacilities = (): JSX.Element => {
  return (
    <>
      {/* Small Section Above */}
      <div className="w-full bg-white py-16">
        <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[18px] leading-[24px] font-bold text-[#312C22] mb-2 uppercase">
              {VisitorsFAcilitiesData?.Heading}
            </p>
            <div className="w-[66px] h-[3px] bg-[#1B1F27] mb-6"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[48px] leading-[56px] font-medium text-[#1B1F27] heading-font"
          >
            {VisitorsFAcilitiesData?.SubHeading}
          </motion.h2>
        </div>
      </div>

      <div className="w-full bg-[#E9E9E9] h-[851px] flex-shrink-0">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto py-8 md:py-16">
            {/* Header and Description Section */}
            <div className="flex justify-between items-start mt-[5px] mb-20">
              {/* Left - Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="text-[38px] leading-[40px] font-medium text-black heading-font">
                  {VisitorsFAcilitiesData?.SectionHeading}
                </h1>
              </motion.div>

              {/* Right - Description */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.9,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex w-[516px] justify-center items-center gap-[10px]"
              >
                <p className="text-[20px] leading-[28px] font-normal text-[#4D4E56]">
                  {VisitorsFAcilitiesData?.SectionContent}
                </p>
              </motion.div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {/* Card 1 */}
              {VisitorsFAcilitiesData?.cards.map((card) => (
                <motion.div
                  key={card?.animationDelay}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: card?.animationDelay,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="w-full h-[456px] bg-[#1B1F27] mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card?.image})` }}
                  ></div>
                  <p className="text-[24px] leading-[32px] font-normal text-[#33130A]">
                    {card?.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto py-8 ">
            {/* Header */}
            <h1 className="text-[28px] leading-[32px] font-medium text-black mb-4 mt-8 heading-font">
              {VisitorsFAcilitiesData?.SectionHeading}
            </h1>

            {/* Description */}
            <p className="text-[16px] leading-[24px] font-normal text-[#4D4E56] mb-8">
              {VisitorsFAcilitiesData?.SectionContent}
            </p>

            {/* Horizontal Scrollable Cards */}
            <div className="flex gap-4 overflow-x-auto pb-5">
              {/* Card 1 */}
              {VisitorsFAcilitiesData?.cards.map((card) => (
                <div className="flex-shrink-0" key={card?.animationDelay}>
                  <div
                    className="flex w-[386px] h-[456px] items-start bg-[#1B1F27] mb-3 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card?.image})` }}
                  ></div>
                  <p className="text-[16px] leading-[24px] font-normal text-[#33130A]">
                    {card?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorFacilities;
