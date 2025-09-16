import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { GalleryBannerProps } from './GalleryBanner.types';
import { mapToBreadcrumb } from './GalleryBanner.utils';

const GalleryBanner = (props: GalleryBannerProps): JSX.Element => {
  const data = props?.fields?.data?.datasource;
  const breadcrumb = mapToBreadcrumb(data);

  return (
    <div className="pt-[99px] lg:pt-[135px]">
      <div className="bg-[#312C22]">
        <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0 change-direction">
          <div
            className={`grid grid-cols-1 py-[48px] md:py-[50px] ${
              data?.description?.value?.trim() ? 'lg:grid-cols-2 gap-8' : ''
            }`}
          >
            <div>
              <Text
                tag="h1"
                field={data?.heading}
                className="text-white text-[36px] lg:text-[60px] leading-[40px] lg:leading-[72px] heading-font"
              />
            </div>
            <div>
              {data?.description?.value?.trim() && (
                <p className="text-white text-[18px] leading-[24px] font-bold uppercase">
                  {data.description.value}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-t border-[#000000] hidden md:block">
          <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
            <div className="flex flex-wrap items-center gap-4 breadcrumb-wrap h-[68px]">
              {breadcrumb.map((item, index) => (
                <div key={index} className="item flex flex-wrap items-center gap-4">
                  <Link
                    href={item.link}
                    className={`text-white text-[14px] leading-[16px] ${
                      item.isCurrent ? 'font-medium' : ''
                    }`}
                  >
                    {item.name}
                    {!item.isCurrent && <span className="block h-[1px] w-full mt-[1px] bg-white" />}
                  </Link>
                  {!item.isCurrent && (
                    <Image
                      src="/images/breadcrumb-arrow.svg"
                      width={16}
                      height={16}
                      alt="arrow"
                      className="arrow-icon filter brightness-0 invert"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
