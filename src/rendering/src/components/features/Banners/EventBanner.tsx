import Image from 'next/image';
import Link from 'next/link';

type CardItem = {
  img: string;
  tag: string;
  title: string;
  date: string;
  btnText: string;
  btnLink: string;
};

type EventBannerProps = {
  data: CardItem;
};

const EventBanner = (props: EventBannerProps): JSX.Element => {
  return (
    <div className="h-[537px] lg:h-[600px] relative transition-transform duration-400 event-card-wrap lg:px-0 px-[16px]">
      <div className="h-full w-full overflow-hidden">
        <Image
          src={props?.data?.img ?? '/images/home-banner-img-2.png'}
          width={1193}
          height={600}
          alt={props?.data?.title}
          className="w-full h-full object-center object-cover top-img"
        />
      </div>
      <div className="absolute top-0 left-0 items-end h-full w-full lg:pt-[286px] pt-[285px] lg:px-0 px-[20px]">
        <div className="px-4 pb-6 md:px-6 xl:px-[40px] xl:pb-[48px]">
          <p className="text-white text-center text-[12px] leading-[12px] font-medium border border-[#A37C04] py-[7px] px-2 max-w-max mb-4 lg:mb-8 min-w-[90px] uppercase">
            {props?.data?.tag ?? 'EXHIBITION'}
          </p>
          <p className="text-[18px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4">
            {props?.data?.date ?? '1 July ➜ 12 September 2025'}
          </p>
          <h4 className="heading-font text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] text-white font-medium max-w-[530px] mb-4">
            {props?.data?.title ?? 'Ancient Civilizations of the UAE'}
          </h4>
          <Link
            href={props?.data?.btnLink ?? '/'}
            className="page-btn outline-white-btn lg:min-w-[165px] min-w-[147px] lg:min-h-[48px] min-h-[44px] more-btn"
          >
            {props?.data?.btnText ?? 'Know More'}
            <Image src="/images/right-arrow.svg" alt="arrow" width="13" height="13" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
