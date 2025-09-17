import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { EventCardFullProps } from './EventCard.types';

function formatDate(dateStr: string | undefined, options: Intl.DateTimeFormatOptions) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', options);
}

const EventCardFull = (props: EventCardFullProps): ReactElement | null => {
  const cardFields = props.fields?.fields;

  if (!cardFields) {
    return null;
  }

  const formattedStart = formatDate(cardFields.start_date?.value, {
    day: 'numeric',
    month: 'long',
  });
  const formattedEnd = formatDate(cardFields.end_date?.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="h-[537px] lg:h-[600px] relative transition-transform duration-400 event-card-wrap lg:mx-0 mx-[16px]">
      <div className="h-full w-full overflow-hidden">
        {/* Use NextImage for Sitecore ImageField */}
        <NextImage
          field={cardFields.img}
          width={1193}
          height={600}
          className="w-full h-full object-center object-cover top-img"
        />
      </div>
      <div className="absolute top-0 left-0 flex flex-wrap items-end h-full w-full">
        <div className="px-6 pb-8 xl:px-[40px] xl:pb-[48px]">
          <Text
            tag="p"
            className="text-white text-center text-[12px] leading-[12px] font-medium border border-[#A37C04] py-[7px] px-2 max-w-max mb-4 lg:mb-8 min-w-[90px] uppercase"
            field={cardFields.tag}
          />
          <div className="flex items-center mb-4">
            <Text
              tag="p"
              className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold"
              field={{ value: formattedStart }}
            />
            <Image
              src="/images/date-arrow-icon.svg"
              alt="arrow"
              width={27}
              height={10}
              className="mx-3"
            />
            <Text
              tag="p"
              className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold"
              field={{ value: formattedEnd }}
            />
          </div>
          <Text
            tag="h4"
            field={cardFields.title}
            className="heading-font text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] text-white font-medium max-w-[530px] mb-4"
          />
          <Link
            href={cardFields.btnLink?.value?.href || '/'}
            className="page-btn outline-white-btn min-w-full lg:min-w-[165px] more-btn"
          >
            {cardFields.btnText?.value || 'Know More'}
            <Image src="/images/right-arrow.svg" alt="arrow" width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCardFull;
