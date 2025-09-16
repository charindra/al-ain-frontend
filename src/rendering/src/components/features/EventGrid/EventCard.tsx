import Image from 'next/image';
import Link from 'next/link';

interface cardItem {
  img: string;
  tag: string;
  title: string;
  date: string;
  btnText: string;
  btnLink: string;
}

type EventCardProps = {
  data: cardItem;
};

const EventCard = (props: EventCardProps): JSX.Element => {
  return (
    <>
      <div className="transition-transform duration-400 event-card-wrap lg:px-0 px-[16px]">
        <div className="lg:h-[372px] h-[190px] overflow-hidden -mb-1">
          <Image
            src={props.data.img}
            width={590}
            height={372}
            alt={props.data.title}
            className="w-full h-full block object-center object-cover top-img"
          />
        </div>
        <div className="bg-[#94442E] pt-4 px-4 md:px-6 pb-6 xl:pb-[48px] xl:pt-[40px]">
          <p className="text-white text-center text-[12px] leading-[12px] font-medium border-1 border-[#A37C04] py-[7px] px-2 max-w-max mb-4 min-w-[59px] uppercase letter-spacing-1">
            {props.data.tag}
          </p>
          <h4 className="heading-font text-[24px] xl:text-[28px] leading-[24px] xl:leading-[32px] text-white font-medium mb-4">
            {props.data.title}
          </h4>
          <p className="text-[16px] xl:text-[16px] leading-[24px] xl:leading-[28px] text-white font-bold mb-4">
            {props.data.date}
          </p>

          <Link
            href={props.data.btnLink}
            className="page-btn outline-white-btn min-w-[165px] more-btn lg:min-h-[48px] min-h-[44px]"
          >
            {props.data.btnText}
            <Image src="/images/right-arrow.svg" alt="arrow" width="20" height="20" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
