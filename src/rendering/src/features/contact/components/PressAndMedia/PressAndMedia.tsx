import Link from 'next/link';
import HeadingText from 'common/components/HeadingText';

// type PressAndMediaProps = {
//   heading?: string;
//   description?: string;
//   mailto?: string;
//   bottomText?: string;
// };

const data = {
  heading: 'Press & Media',
  description: 'Journalists and media professionals can contact us directly at:',
  mailto: 'press@alainmuseum.ae',
  bottomText: 'For enquiries, press images, or interview requests.',
};

// const PressAndMedia = (props: PressAndMediaProps): JSX.Element => {
const PressAndMedia = (): JSX.Element => {
  return (
    <div>
      {/* Content Box */}
      <div className="w-full max-w-2xl bg-white md:mb-[554px] p-8 sm:p-12 shadow-md relative z-10">
        {/* Title */}
        <HeadingText heading={data.heading} className="text-[#1B1F27] mb-4" />

        <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
          {data.description}
        </p>

        <p className="mb-8">
          <Link
            href={`mailto:${data.mailto}`}
            className="text-[#1B1F27] font-semibold underline hover:text-gray-600"
          >
            {data.mailto}
          </Link>
        </p>

        <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[400]">
          {data.bottomText}
        </p>
      </div>
    </div>
  );
};

export default PressAndMedia;
