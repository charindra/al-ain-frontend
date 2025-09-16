import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from 'common/components/HeadingText';

interface Item {
  subHeading?: string;
  heading: string;
  description: string;
  imgText?: string;
  img: string;
  btnText?: string;
  btnLink?: string;
  isRightImg?: boolean;
  lightBack?: boolean;
  bgColor?: string;
}

interface TextImageBlockItem {
  id: string;
  name: string;
  heading?: Field<string>;
  subHeading?: Field<string>;
  description?: Field<string>;
  img?: Field<string>;
  isRightImg?: Field<string>;
  lightBack?: Field<string>;
  btnText?: Field<string>;
  btnLink?: Field<string>;
}

interface TextImageBlockResponse {
  data: {
    datasource: {
      children: {
        results: TextImageBlockItem[];
      };
    };
  };
}

const data: Item[] = [
  {
    heading: 'Visitor and Member Cloakroom',
    description:
      'Lorem ipsum dolor sit amet consectetur. Id tristique sed donec tellus. Platea in risus scelerisque congue.',
    img: '/images/visit-page/VisitorCloackroom.png',
    imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRightImg: true,
    lightBack: true,
  },
  {
    heading: 'Free Wi-Fi',
    description:
      'Lorem ipsum dolor sit amet consectetur. Id lacus scelerisque quis montes aliquet nullam ac praesent.',
    img: '/images/visit-page/FreeWifi.jpg',
    imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRightImg: false,
    lightBack: true,
  },
  {
    heading: 'Facilities for Children and Babies',
    description:
      'Lorem ipsum dolor sit amet consectetur. Bibendum sit donec a urna mauris. Venenatis feugiat ultricies diam elit neque consectetur.',
    img: '/images/visit-page/ChildrendsandBabies.jpg',
    imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRightImg: true,
    lightBack: true,
  },
  {
    heading: 'Parking',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis vel lobortis nec enim. Etiam viverra mauris sed consectetur.',
    img: '/images/visit-page/Parking.png',
    imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRightImg: false,
    lightBack: true,
  },
  {
    heading: 'Guided Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur. Molestie tincidunt malesuada aliquam ac amet nibh turpis. Est elementum mauris lacus adipiscing elit.',
    img: '/images/visit-page/GuidedTour.jpg',
    imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRightImg: true,
    lightBack: true,
  },
];

const TextWIthImageBlock = (props: TextImageBlockResponse): JSX.Element => {
  console.log('TextWIthImageBlock data', props);
  return (
    <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
      {data.map((item, i) => (
        <div key={i}>
          <div className="py-[56px] lg:py-[72px]">
            <div className={clsx('flex flex-wrap items-center lg:justify-between', item.bgColor)}>
              {/* Text Side */}
              <div
                className={clsx(
                  'max-w-[510px] md:w-[50.9%] px-4 md:px-6 lg:px-0',
                  item.isRightImg ? 'order-0' : 'order-1'
                )}
              >
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
                  <HeadingText
                    heading={item.heading}
                    className={clsx(
                      'mb-4 lg:mb-6 text-left text-[32px] lg:text-[48px]',
                      item.lightBack ? 'text-[#1B1F27]' : 'text-white'
                    )}
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.3,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={clsx(
                    'text-[18px] leading-[28px] font-normal mb-8 lg:mb-6',
                    item.lightBack ? 'text-[#4D4E56]' : 'text-white/80'
                  )}
                >
                  {item.description}
                </motion.p>

                {item.btnText && item.btnLink && (
                  <Link
                    className={clsx(
                      'page-btn min-w-full md:min-w-[150px]',
                      item.lightBack ? 'outline-black-btn' : 'outline-white-btn'
                    )}
                    href={item.btnLink}
                  >
                    {item.btnText}
                    <Image src="/images/right-arrow.svg" alt="arrow" width={24} height={24} />
                  </Link>
                )}
              </div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className={clsx(
                  'w-full md:w-[49.1%] px-4 md:px-0 mb-9 md:mb-0',
                  item.isRightImg ? 'order-1' : 'order-0'
                )}
              >
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={589}
                  height={501}
                  className="w-full object-cover h-[250px] md:h-[501px]"
                />
                <p className="text-[14px] text-gray-600 mt-[10px]">{item.imgText}</p>
              </motion.div>
            </div>
          </div>
          {i !== data.length - 1 && (
            <div className="flex justify-center">
              <div className="w-full h-px bg-[#D8D8D8]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TextWIthImageBlock;
