import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { EventCardFullProps } from './EventCard.types';

function formatDate(dateStr: string | undefined, options: Intl.DateTimeFormatOptions) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', options);
}

const EventCard = ({ fields }: EventCardFullProps): ReactElement | null => {
  const cardFields = fields?.fields;

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
  const imageSrc = cardFields.img?.value?.src ?? '/images/cokkection-slider-1';
  const imageAlt = cardFields.img?.value?.alt ?? cardFields.title?.value ?? 'Event image';
  const normalizedAlt = typeof imageAlt === 'string' ? imageAlt : 'Event image';
  const btnHref = cardFields.btnLink?.value?.href ?? '/';
  const btnText = cardFields.btnText?.value ?? 'Know More';

  return (
    <div className="transition-transform duration-400 event-card-wrap lg:mx-0 mx-4">
      <div className="lg:h-[372px] h-[190px] overflow-hidden -mb-1">
        <Image
          src={imageSrc}
          width={590}
          height={372}
          alt={normalizedAlt}
          className="w-full h-full block object-center object-cover top-img"
        />
      </div>
      <div className="bg-[#94442E] pt-6 px-6 pb-6 xl:pb-[48px] xl:pt-[40px]">
        <p className="text-white text-center text-[12px] leading-[12px] font-medium border border-[#A37C04] py-[7px] px-2 max-w-max mb-4 min-w-[59px] uppercase letter-spacing-1">
          {cardFields.tag?.value}
        </p>
        <h4 className="heading-font text-[24px] xl:text-[28px] leading-[24px] xl:leading-[32px] text-white font-medium mb-4">
          {cardFields.title?.value}
        </h4>
        <div className="flex items-center mb-4">
          <p className="text-[16px] xl:text-[16px] leading-[24px] xl:leading-[28px] text-white font-bold">
            {formattedStart}
          </p>
          <Image
            src="/images/date-arrow-icon.svg"
            alt="arrow"
            width={27}
            height={10}
            className="mx-3"
          />
          <p className="text-[16px] xl:text-[16px] leading-[24px] xl:leading-[28px] text-white font-bold">
            {formattedEnd}
          </p>
        </div>

        <Link
          href={btnHref}
          className="page-btn outline-white-btn min-w-full md:min-w-[165px] more-btn lg:min-h-[48px] min-h-[44px]"
        >
          {btnText}
          <Image src="/images/right-arrow.svg" alt="arrow" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
