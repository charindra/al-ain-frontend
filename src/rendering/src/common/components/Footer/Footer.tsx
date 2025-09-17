import {
  ComponentRendering,
  GetServerSideComponentProps,
  GetStaticComponentProps,
  LayoutServiceData,
  RichText,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import NextLink from 'common/components/NextLink';
import { GraphQLClient } from 'services/sitecore/graphql-client/graphql-client';
import getFooterQuery from './footer.query';
import {
  FooterDatasource,
  FooterProps,
  FooterQueryResult,
  FooterLink,
  SocialLink,
} from './Footer.types';
import { useFooterForm } from './hooks/useFooterForm';
import { FOOTER_TEXTFIELD_STYLES, SOCIAL_ICON_CONTAINER_CLASSES } from './Footer.constants';
import PrefixedImage from 'features/shared/components/PrefixedImage';

const Footer = (props: FooterProps): JSX.Element => {
  const footerData = props.navigationFolder?.datasource;
  const context = useSitecoreContext();
  const locale = context.sitecoreContext.language as string;
  const currentYear = new Date().toLocaleDateString(locale, { year: 'numeric' });

  const { register, handleSubmit, formState, onSubmit } = useFooterForm();
  const { isValid } = formState;
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <footer className="bg-[#1B1F27] text-[#FFF] md:pt-[72px] pt-16" ref={sectionRef}>
      <div className="mx-auto w-full lg:w-[88.82%] px-6 lg:px-0">
        <div className="md:mb-12 lg:mb-[78px] grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-3 col-span-12"
          >
            <a href="/">
              <PrefixedImage
                src="/images/LogoAlBlack.svg"
                alt="Al Ain Museum Logo"
                width={171}
                height={90}
              />
            </a>
            <div className="col-span-12 mt-12 md:mt-6 border-b md:hidden border-[#60626C]" />
            <div className="col-span-12 md:hidden py-12">
              <RichText tag="p" field={footerData?.contactDetails} />
            </div>
            <div className="col-span-12 border-b md:hidden border-[#60626C]" />
            <div className="col-span-12 md:hidden pt-12">
              <RichText tag="div" field={footerData?.heading} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-9 col-span-12 py-10 md:py-0 gap-6 md:gap-0"
          >
            <RichText
              tag="div"
              field={footerData?.heading}
              className="w-full hidden md:block mb-4 text-[#C1C1C1]"
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10 mb-4 md:flex-row md:items-start md:gap-4"
            >
              <TextField
                variant="standard"
                label="Your Name"
                fullWidth
                {...register('name', { required: 'Name is required' })}
                slotProps={{
                  inputLabel:
                    document?.dir === 'rtl'
                      ? { sx: { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' } }
                      : {},
                  input:
                    document?.dir === 'rtl'
                      ? { style: { textAlign: 'right', direction: 'rtl' } }
                      : {},
                }}
                sx={FOOTER_TEXTFIELD_STYLES}
              />

              <TextField
                variant="standard"
                label="Your Email"
                type="email"
                fullWidth
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                slotProps={{
                  inputLabel:
                    document?.dir === 'rtl'
                      ? { sx: { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' } }
                      : {},
                  input:
                    document?.dir === 'rtl'
                      ? { style: { textAlign: 'right', direction: 'rtl' } }
                      : {},
                }}
                sx={FOOTER_TEXTFIELD_STYLES}
              />
              <button
                type="submit"
                disabled={!isValid}
                className="page-btn text-white border !border-[#8D8F94] min-w-full md:min-w-[150px] mt-10 md:mt-0"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
        <div className="col-span-12 border-b md:hidden border-[#60626C]" />

        <div className="mb-12 grid grid-cols-12 gap-6 pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="md:col-span-3 col-span-12 hidden md:block"
          >
            <RichText tag="p" field={footerData?.contactDetails} className="leading-6 text-base" />
          </motion.div>

          <div className="md:col-span-9 col-span-12 grid max-[767px]:grid-cols-1 max-[1740px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 min-[1741px]:grid-cols-4 gap-12 md:gap-8 lg:gap-2">
            {footerData?.children.results.map((col, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
                key={idx}
                className={
                  col.isSocialColumn?.jsonValue?.value
                    ? 'pt-12 md:pt-0 border-t md:border-t-0 border-[#60626C] lg:mt-12 min-[1740px]:mt-0'
                    : ''
                }
              >
                <Text
                  tag="h4"
                  className="text-white text-sm font-bold mb-6 md:mb-4 uppercase"
                  field={col.columnTitle}
                ></Text>

                {col.isSocialColumn?.jsonValue?.value ? (
                  <div className="flex lg:flex-nowrap flex-wrap justify-start gap-2 text-lg">
                    {col.children.results.map((social: SocialLink, i) => (
                      <a
                        key={i}
                        href={social.linkUrl.jsonValue.value}
                        target="_blank"
                        className="group"
                      >
                        <div className={SOCIAL_ICON_CONTAINER_CLASSES}>
                          <img
                            src={'/' + social.socialImage.jsonValue?.value?.src}
                            alt="Logo"
                            width={24}
                            height={24}
                            className="transition duration-300 ease-in-out group-hover:brightness-0"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 text-sm text-[#C1C1C1] flex flex-col gap-3">
                    {col.children.results.map((link: FooterLink, i) => (
                      <li key={i}>
                        <a
                          href={link.link?.jsonValue.value.href || '#'}
                          className="underline underline-offset-2 text-lg"
                        >
                          {link.link?.jsonValue.value.text || ''}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 4 * 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center border-t border-gray-700 py-12 lg:py-12 md:py-6 text-sm"
        >
          <div className="w-full md:w-auto order-2 md:order-0 mt-12 md:mt-0">
            <p className="text-[#FFF] text-sm font-medium">
              © {currentYear} {footerData?.copyrightText.value}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-6 w-full md:w-auto order-1 md:order-1">
            <NextLink
              field={footerData?.termsAndConditions?.jsonValue}
              className="hover:underline text-[#C1C1C1] text-sm"
            />
            <NextLink
              field={footerData?.privacyNotice?.jsonValue}
              className="hover:underline text-[#C1C1C1] text-sm"
            />
            <NextLink
              field={footerData?.cookiePolicy?.jsonValue}
              className="hover:underline text-[#C1C1C1] text-sm"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export const fetchComponentProps = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<{
  navigationFolder?: { datasource: FooterDatasource };
  rendering: ComponentRendering;
}> => {
  if (!rendering?.dataSource || !layoutData?.sitecore?.context?.language) return { rendering };

  const graphQLClient = GraphQLClient();
  const data = await graphQLClient.request<FooterQueryResult>(getFooterQuery, {
    datasource: rendering.dataSource,
    language: layoutData.sitecore.context.language,
  });

  return { navigationFolder: data, rendering };
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) =>
  fetchComponentProps(rendering, layoutData);
export const getServerSideProps: GetServerSideComponentProps = async (rendering, layoutData) =>
  fetchComponentProps(rendering, layoutData);

export default withDatasourceCheck()<FooterProps>(Footer);
