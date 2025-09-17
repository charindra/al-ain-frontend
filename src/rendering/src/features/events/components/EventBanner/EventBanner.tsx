import Image from 'next/image';
import Link from 'next/link';
import { EVENT_BANNER_FALLBACK } from './EventBanner.constants';
import { EventBannerProps } from './EventBanner.types';

const EventBanner = ({ data }: EventBannerProps): JSX.Element => {
  const banner = data ?? EVENT_BANNER_FALLBACK;

  return (
    <div className="h-[537px] lg:h-[600px] relative transition-transform duration-400 event-card-wrap lg:px-0 px-[16px]">
      <div className="h-full w-full overflow-hidden">
        <Image
          src={banner.img || EVENT_BANNER_FALLBACK.img}
          width={1193}
          height={600}
          alt={banner.title || EVENT_BANNER_FALLBACK.title}
          className="w-full h-full object-center object-cover top-img"
        />
      </div>
      <div className="absolute top-0 left-0 items-end h-full w-full lg:pt-[286px] pt-[285px] lg:px-0 px-[20px]">
        <div className="px-4 pb-6 md:px-6 xl:px-[40px] xl:pb-[48px]">
          <p className="text-white text-center text-[12px] leading-[12px] font-medium border border-[#A37C04] py-[7px] px-2 max-w-max mb-4 lg:mb-8 min-w-[90px] uppercase">
            {banner.tag}
          </p>
          <p className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4">
            {banner.date}
          </p>
          <h4 className="heading-font text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] text-white font-medium max-w-[530px] mb-4">
            {banner.title}
          </h4>
          <Link
            href={banner.btnLink || EVENT_BANNER_FALLBACK.btnLink}
            className="page-btn outline-white-btn lg:min-w-[165px] min-w-[147px] lg:min-h-[48px] min-h-[44px] more-btn"
          >
            {banner.btnText || EVENT_BANNER_FALLBACK.btnText}
            <Image src="/images/right-arrow.svg" alt="arrow" width={13} height={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
