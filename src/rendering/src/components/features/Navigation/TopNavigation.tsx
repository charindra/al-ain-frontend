import {
  ComponentRendering,
  Field,
  GetServerSideComponentProps,
  GetStaticComponentProps,
  LayoutServiceData,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import getTopNavigationQuery from 'components/features/Navigation/top-navigation-query';
import { GraphQLClient } from 'lib/graphql-client-factory/graphql-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type TopNavigationProps = {
  anchorLinkText: Field<string>;
  className: string;
  navigationFolder: NavigationFolder | null;
  rendering: unknown;
};

type NavigationItem = {
  href: string;
  text: string;
  anchor?: string;
  linktype?: string;
  class?: string;
  title?: string;
  querystring?: string;
  id?: string;
  button?: boolean;
  group?: string;
};

type NavigationFolder = {
  datasource?: {
    children?: {
      results?: unknown[];
    };
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeMenuItems = (items: any[]): NavigationItem[] => {
  return items.map((item) => {
    const link = item?.link?.jsonValue?.value ?? {};
    return {
      href: link.href ?? '',
      text: link.text ?? '',
      anchor: link.anchor ?? '',
      linktype: link.linktype ?? '',
      class: link.class ?? '',
      title: link.title ?? '',
      querystring: link.querystring ?? '',
      id: link.id ?? '',
      button: item?.button?.value === '1',
      group: item?.group?.value ?? '',
    };
  });
};

const TopNavigation = (props: TopNavigationProps): JSX.Element => {
  const context = useSitecoreContext();
  const locale = context.sitecoreContext.language as string;
  const pathname = usePathname();

  const targetLang = locale.toLowerCase() === 'en' ? 'ar-ae' : 'en';
  const langBasedHref = `${targetLang}${pathname}`;

  console.log('pathname', pathname);
  console.log('locale', locale);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: NavigationItem[] = normalizeMenuItems(
    props.navigationFolder?.datasource?.children?.results ?? []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const currentLocale = locale.toLowerCase();
    const dir = currentLocale === 'ar-ae' ? 'rtl' : 'ltr';

    document.documentElement.lang = currentLocale;
    document.documentElement.dir = dir;
  }, [locale]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={`w-full border-b border-gray-200 fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ${
        scrolled ? 'h-[70px] lg:h-[73px]' : 'h-[99px] lg:h-[135px]'
      }`}
    >
      <div
        className={`flex justify-between transition-all duration-300 ${
          scrolled ? 'py-3 items-center' : 'py-5'
        }`}
      >
        {/* ---------- Mobile View ---------- */}
        <div className="flex w-full items-center justify-between lg:hidden ml-[16px] mr-[16px]">
          <button onClick={() => setMenuOpen(true)} className="cursor-pointer">
            <Image src="/images/Menu.svg" alt="Menu" width={35} height={35} />
          </button>

          <Link href="/" className="cursor-pointer">
            <Image
              src={scrolled ? '/images/logo-shrink.svg' : '/images/LogoWhite.svg'}
              alt="Logo"
              width={121}
              height={64}
              className="cursor-pointer transition-all duration-300"
            />
          </Link>

          <button className="cursor-pointer">
            <Image src="/images/Ticket.svg" alt="Info" width={40} height={40} />
          </button>
        </div>

        {/* ---------- Desktop View ---------- */}
        <div className="hidden lg:flex w-full items-center ml-[60px] mr-[24px]">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src={scrolled ? '/images/logo-shrink.svg' : '/images/LogoWhite.svg'}
                alt="Logo"
                width={120}
                height={64}
                className="cursor-pointer transition-all duration-300 pl-3"
              />
            </Link>
          </div>

          <nav
            className={`flex flex-1 items-start justify-start gap-[27px] text-[18px] font-medium text-[#1B1F27] ms-[92px] transition-all duration-300 mt-1.5 ${
              scrolled ? 'pt-4' : 'pt-14'
            }`}
          >
            {menuItems
              .filter((item) => !item.button)
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={clsx(
                    "pb-[2px] relative after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:bg-[#1B1F27] after:transition-all after:duration-300 hover:after:w-full",
                    isActive(item.href) ? 'after:w-full' : 'after:w-0'
                  )}
                >
                  {item.text}
                </Link>
              ))}
          </nav>

          <div className={`flex gap-6 ${scrolled ? 'items-center' : 'pt-13'}`}>
            <Link
              locale={false}
              className="text-sm cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
              href={langBasedHref}
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </Link>
            {menuItems
              .filter((item) => item.button)
              .map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="bg-[#1B1F27] text-white text-sm px-4 py-2 cursor-pointer hover:bg-opacity-80 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {btn.text}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu Overlay ---------- */}
      <div
        className={`fixed inset-0 z-50 bg-[#1B1F27] lg:hidden text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between max-h-[99px] px-6 py-6">
          <button onClick={() => setMenuOpen(false)}>
            <Image src="/images/close.svg" alt="Close" width={28} height={28} />
          </button>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/LogoAlBlack.svg"
              alt="Logo"
              width={121}
              height={64}
              className="cursor-pointer"
            />
          </Link>
          <Link
            locale={false}
            className="text-sm w-[31px] h-[42px] flex items-center justify-center"
            href={langBasedHref}
          >
            {locale === 'en' ? 'عربي' : 'EN'}
          </Link>
        </div>

        <nav className="flex flex-col px-4 top-[10px] text-sm font-semibold mt-4 font-inter">
          {menuItems
            .filter((item) => !item.button)
            .map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex justify-between py-6 border-b border-t border-gray-700"
              >
                {item.text}{' '}
                <Image src="/images/arrow-right.svg" alt="Arrow" width={13.3} height={13.3} />
              </Link>
            ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 px-4 pb-6">
          {menuItems
            .filter((item) => item.button)
            .map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className="bg-white text-black h-[44px] text-sm font-bold font-inter flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                {btn.text}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

/**
 * SSR/SSG data fetchers
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  return await fetchComponentProps(rendering, layoutData);
};

export const getServerSideProps: GetServerSideComponentProps = async (rendering, layoutData) => {
  return await fetchComponentProps(rendering, layoutData);
};

async function fetchComponentProps(rendering: ComponentRendering, layoutData: LayoutServiceData) {
  if (!rendering?.dataSource || !layoutData?.sitecore?.context?.language) {
    return {};
  }

  const navigationFolder = await getNavigationData(
    rendering.dataSource,
    layoutData.sitecore.context.language
  );

  return {
    navigationFolder,
    rendering,
  };
}

export const getNavigationData = async (
  datasource: string,
  language: string
): Promise<NavigationFolder> => {
  const graphQLClient = GraphQLClient();
  return await graphQLClient.request<NavigationFolder>(getTopNavigationQuery, {
    datasource,
    language,
  });
};

export default TopNavigation;
