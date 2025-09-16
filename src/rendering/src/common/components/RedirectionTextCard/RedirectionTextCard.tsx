'use client';

import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { RedirectionTextCardProps } from './RedirectionTextCard.types';

const RedirectionTextCard = (props: RedirectionTextCardProps): JSX.Element => {
  return (
    <div className="relative overflow-hidden h-[326px] md:h-[326px] explore-banner">
      <div className="absolute top-0 left-0 w-full h-full bg-[#FFEED8] pb-[40px] md:pb-0">
        <div className="flex flex-wrap items-center flex-col md:flex-row justify-end md:justify-between mx-auto w-full lg:w-[83.05%] px-4 lg:px-0 h-full">
          <div className="w-full md:w-[50%] text-wrap">
            <Text
              tag="h3"
              className="relative text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font text-black z-[2] mt-0 md:mt-[-20px] mb-8 md:mb-0"
              field={props?.fields?.heading}
            />
          </div>
          <div className="w-full md:w-[50%] max-w-[628px]">
            <Text
              tag="p"
              className="relative text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-light lg:font-medium text-black mb-8 z-[2]"
              field={props?.fields?.description}
            />
            <Link
              field={props?.fields?.btnLink}
              className="relative page-btn outline-black-btn z-[2] min-w-full md:min-w-[150px]"
            >
              {props?.fields?.btnText?.value || 'Read FAQs'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectionTextCard;
