type UnderlineHeadingProps = {
  heading: string;
  className?: string;
  borderClass?: string;
};

const UnderlineHeading = (props: UnderlineHeadingProps): JSX.Element => {
  return (
    <>
      <h2
        className={`text-[18px] leading-[24px] font-bold uppercase change-direction ${props.className}`}
      >
        {props.heading}
        <span className={`h-[3px] w-[66px] block mt-2 ${props.borderClass}`} />
      </h2>
    </>
  );
};

export default UnderlineHeading;
