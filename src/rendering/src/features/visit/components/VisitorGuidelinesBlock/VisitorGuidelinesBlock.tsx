import { motion } from 'framer-motion';

// interface Item {
//   topHeading: string;
//   heading: string;
//   description: string;
//   btnText: string;
// }

// type VisitorGuidelinesBlockProps = {
//   data: Item;
// };

const data = {
  topHeading: 'VISITOR GUIDELINES',
  heading: 'Lorem Ipsum Dolor Sit Amet',
  description:
    'We look forward to welcoming you to Al Ain Museum. All visitors entering the museum agree to abide by the Visitor Regulations for their own safety and enjoyment, and that of others.',
  btnText: 'Guidelines',
};

// const VisitorGuidelinesBlock = (props: VisitorGuidelinesBlockProps): JSX.Element => {
const VisitorGuidelinesBlock = (): JSX.Element => {
  return (
    <div className="w-full bg-[#EBEBEB] flex-shrink-0">
      {/* Desktop Layout */}
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
              <h3 className="text-[18px] leading-[24px] font-bold text-[#1B1F27] mb-2 uppercase">
                {data.topHeading}
              </h3>

              <div className="w-[66px] h-[3px] bg-[#1B1F27]"></div>
            </motion.div>

            {/* Header Text */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[48px] leading-[56px] font-medium text-[#1B1F27] mb-6  heading-font"
            >
              {data.heading}
            </motion.h1>

            <motion.p
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
              {data.description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.9,
              }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => window.open('/guidelines', '_blank')}
              className="group flex items-center gap-2 w-fit px-6 py-[14px] border border-[#818388] bg-transparent text-[#1B1F27] text-[16px] leading-[18px] font-semibold cursor-pointer hover:bg-[#1B1F27] hover:text-white transition-colors"
            >
              {data.btnText}
              <img
                src="/arrow-right-black.svg"
                alt="Arrow"
                width="14"
                height="14"
                className="ml-1 group-hover:hidden"
              />
              <img
                src="/arrow-right-white.svg"
                alt="Arrow"
                width="14"
                height="14"
                className="ml-1 hidden group-hover:block"
              />
            </motion.button>
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
              style={{ backgroundImage: 'url(/images/visit-page/Visitor-Guidelines.jpg)' }}
            ></div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="w-full lg:w-[83.1%] px-6 lg:px-0 mx-auto md:hidden flex flex-col justify-center items-center py-[56px] lg:py-[72px]">
        <div className="mb-6">
          <div
            className="max-w-[470px] h-[433px] bg-[#1B1F27] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/visit-page/Visitor-Guidelines.jpg)' }}
          ></div>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-6">
            <h3 className="text-[18px] leading-[24px] font-bold text-[#1B1F27] mb-2 uppercase">
              {data.topHeading}
            </h3>
            <div className="w-[66px] h-[3px] bg-[#1B1F27]"></div>
          </div>

          <h1 className="text-[48px] leading-[56px] font-medium text-[#1B1F27] mb-6">
            {data.heading}
          </h1>

          <p className="text-[20px] leading-[28px] font-normal text-[#4D4E56] mb-6">
            {data.description}
          </p>

          <button
            onClick={() => window.open('/guidelines', '_blank')}
            className="group flex items-center gap-2 w-fit px-6 py-[14px] border border-[#818388] bg-transparent text-[#1B1F27] text-[16px] leading-[18px] font-semibold cursor-pointer hover:bg-[#1B1F27] hover:text-white transition-colors"
          >
            {data.btnText}
            <img
              src="/arrow-right-black.svg"
              alt="Arrow"
              width="14"
              height="14"
              className="ml-1 group-hover:hidden"
            />
            <img
              src="/arrow-right-white.svg"
              alt="Arrow"
              width="14"
              height="14"
              className="ml-1 hidden group-hover:block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorGuidelinesBlock;
