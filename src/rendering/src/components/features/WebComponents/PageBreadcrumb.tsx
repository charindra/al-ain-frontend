import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// import { useTheme } from '../../context/theme-context';

const data = [
  {
    name: 'Home',
    link: '/',
    isCurrent: false,
  },
  {
    name: 'Visit',
    link: '/visit',
    isCurrent: true,
  },
];

// interface MenuItem {
//   name: string;
//   link: string;
//   isCurrent?: boolean;
// }

// type PageBreadcrumbProps = {
//   data: MenuItem[];
// };

// const PageBreadcrumb = (props: PageBreadcrumbProps): JSX.Element => {
const PageBreadcrumb = (): JSX.Element => {
  // const { locale } = useTheme();
  return (
    <div className="hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="border-b border-[#D8D8D8] h-[68px] flex flex-wrap items-center change-direction">
          <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
            <div className="flex flex-wrap items-center gap-4 breadcrumb-wrap">
              {data.map((item, index) => (
                <div key={index} className="item flex flex-wrap items-center gap-4">
                  <Link
                    href={`/${item.link}`}
                    className={clsx('text-[#1B1F27] text-[14px] leading-[16px]', {
                      'font-medium': item.isCurrent,
                    })}
                  >
                    {item.name}
                    <span
                      className={clsx({
                        'block h-[1px] w-full mt-[1px] bg-[#1B1F27]': !item.isCurrent,
                      })}
                    />
                  </Link>
                  <Image
                    src="/images/breadcrumb-arrow.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="arrow-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageBreadcrumb;
