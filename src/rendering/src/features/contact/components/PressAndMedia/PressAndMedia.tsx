import HeadingText from 'common/components/HeadingText';
import Link from 'next/link';
import { PRESS_AND_MEDIA_DEFAULT } from './PressAndMedia.constants';
import { PressAndMediaProps } from './PressAndMedia.types';

const PressAndMedia = ({ content = PRESS_AND_MEDIA_DEFAULT }: PressAndMediaProps): JSX.Element => {
  return (
    <div>
      <div className="w-full max-w-2xl bg-white md:mb-[554px] p-8 sm:p-12 shadow-md relative z-10">
        <HeadingText heading={content.heading} className="text-[#1B1F27] mb-4" />
        <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
          {content.description}
        </p>
        <p className="mb-8">
          <Link
            href={`mailto:${content.mailto}`}
            className="text-[#1B1F27] font-semibold underline hover:text-gray-600"
          >
            {content.mailto}
          </Link>
        </p>
        <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[400]">
          {content.bottomText}
        </p>
      </div>
    </div>
  );
};

export default PressAndMedia;
