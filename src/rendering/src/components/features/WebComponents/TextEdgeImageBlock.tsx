import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from '../HeadingText';
import UnderlineHeading from '../UnderlineHeading';

const data = [
  {
    bgColor: 'bg-[#312C22] py-[56px] lg:py-[120px]',
    subHeading: 'Collection Highlights',
    heading: 'Timeless Treasures Beneath the Sands',
    img: '/images/galleries-colletions-img-3.png',
    btnText: 'Explore',
    btnLink: '/founding-father',
    description:
      'Step into the rhythms of traditional Emirati life through objects once used in homes, markets, and desert camps. Each piece offers a vivid glimpse into a way of life both humble and remarkable.',
    isRightImg: true,
  },
  {
    bgColor: 'bg-[#F0F0F5] py-[56px] lg:py-[120px] light-back',
    subHeading: 'Inside Conservation Lab',
    heading: 'Where History Is Preserved And Protected',
    img: '/images/galleries-colletions-img-4.png',
    btnText: 'Explore',
    btnLink: 'galleries-colletions/conservation-lab',
    description:
      'Behind the scenes, experts work tirelessly to preserve and protect Al Ain’s invaluable artifacts. Through careful conservation, the museum ensures these cultural treasures endure for generations to come.',
    isRightImg: false,
    lightBack: true,
  },
];

interface Item {
  bgColor: string;
  className?: string;
  subHeading: string;
  heading: string;
  img: string;
  btnText: string;
  btnLink: string;
  description: string;
  isRightImg: boolean;
  lightBack?: boolean;
}
type TextEdgeImageBlockProps = {
  data: Item[];
};

// export type TextEdgeImageListProps = {
//   fields: {
//     data: {
//       datasource: {
//         children: {
//           results: TextEdgeImageItem[];
//         };
//       };
//     };
//   };
// };

// export type TextEdgeImageItem = {
//   id: string;
//   name: string;
//   heading: Field<string>;
//   subHeading: Field<string>;
//   description: Field<string>;
//   img: LinkField;
//   btnText: Field<string>;
//   btnLink: LinkField;
//   isRightImg: Field<string>;
//   lightBack: Field<string>;
//   bgColor: Field<string>;
// };

const TextEdgeImageBlock = (props: TextEdgeImageBlockProps): JSX.Element => {
  // const TextEdgeImageBlock = (): JSX.Element => {
  console.log('museum image section', props);
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={clsx(
            'flex flex-wrap items-center lg:justify-between change-direction',
            item.bgColor
          )}
        >
          <div
            className={clsx(
              'w-full md:w-[50.9%] px-4 md:px-6',
              item.isRightImg
                ? 'order-1 md:order-0 lg:pl-[8.45%] lg:pr-[46px]'
                : 'order-1 md:order-1 lg:pr-[8.45%] lg:pl-16'
            )}
          >
            {/* Desktop subheading - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:block"
            >
              <UnderlineHeading
                heading={item.subHeading}
                className={clsx('mb-4 lg:mb-6', item.lightBack ? 'text-[#1B1F27]' : 'text-white')}
                borderClass={item.lightBack ? 'bg-[#1B1F27]' : 'bg-white'}
              />
            </motion.div>

            {/* Desktop heading - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:block"
            >
              <HeadingText
                heading={item.heading}
                className={clsx('mb-4 lg:mb-6', item.lightBack ? 'text-[#1B1F27]' : 'text-white')}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p
                className={clsx(
                  'text-[18px] leading-[24px] font-normal mb-8',
                  item.lightBack ? 'text-[#1B1F27]' : 'text-white'
                )}
              >
                {item.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                className={clsx(
                  'page-btn min-w-full md:min-w-[150px]',
                  item.lightBack ? 'outline-black-btn' : 'outline-white-btn'
                )}
                href={item.btnLink}
              >
                {item.btnText}
                <Image src="/images/right-arrow.svg" alt="arrow" width="24" height="24" />
              </Link>
            </motion.div>
          </div>

          <div
            className={clsx(
              'w-full md:w-[49.1%] px-4 md:px-0 mb-9 md:mb-0',
              item.isRightImg ? 'order-0 md:order-1' : 'order-0 md:order-0'
            )}
          >
            {/* Mobile subheading - shown only on mobile above image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="block md:hidden mb-4"
            >
              <UnderlineHeading
                heading={item.subHeading}
                className={clsx(item.lightBack ? 'text-[#1B1F27]' : 'text-white')}
                borderClass={item.lightBack ? 'bg-[#1B1F27]' : 'bg-white'}
              />
            </motion.div>

            {/* Mobile heading - shown only on mobile above image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="block md:hidden mb-4"
            >
              <HeadingText
                heading={item.heading}
                className={clsx(item.lightBack ? 'text-[#1B1F27]' : 'text-white')}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image wrapper with responsive height */}
              <div className="relative w-full h-[268px] lg:h-[530px]">
                <Image
                  src={item.img}
                  alt={item.subHeading}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TextEdgeImageBlock;
