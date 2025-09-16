type HeadingTextProps = {
  heading: string;
  className?: string;
};

const HeadingText = (props: HeadingTextProps): JSX.Element => {
  return (
    <h1
      className={`text-[32px] xl:text-[48px] leading-[40px] xl:leading-[56px] font-medium change-direction heading-font ${props.className}`}
    >
      {props.heading}
    </h1>
  );
};

export default HeadingText;
