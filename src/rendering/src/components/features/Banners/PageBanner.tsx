'use client';

import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PageBannerProps = ComponentProps & {
  fields: {
    image: ImageField;
    title: Field<string>;
  };
};

const PageBanner = (props: PageBannerProps): JSX.Element => {
  console.log('Banner props', props);

  return (
    <div className="pt-[99px] lg:pt-[135px]">
      <div
        className="flex flex-wrap items-end h-[58.8vh] lg:h-[64.7vh] w-full bg-center bg-no-repeat bg-cover pb-[48px]"
        style={{ backgroundImage: `url(${props.fields.image?.value?.src})` }}
      >
        <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
          <Text
            tag="h1"
            className="text-white text-[40px] leading-[48px] lg:text-[56px] lg:leading-[72px] xl:text-[72px] xl:leading-[88px] font-medium heading-font"
            field={props.fields.title}
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
