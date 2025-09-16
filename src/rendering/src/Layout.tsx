/* eslint-disable @next/next/no-sync-scripts */
import { Field, HTMLLink, LayoutServiceData, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import MetaData from 'components/non-sitecore/meta-data/MetaData';
import Head from 'next/head';
import Scripts from 'src/Scripts';
import config from 'temp/config';
//import { HeroBanner } from './components/features/Banners/HeroBanner';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <div>
      <Scripts />
      <Head>
        <title>{((route?.fields?.metaPageTitle as Field)?.value as string) || 'Page'}</title>
        <MetaData sitecore={layoutData.sitecore} />
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* <Navigation /> */}
      {/* root placeholder for the app, which we add components to using route data */}
      {route && <Placeholder name="jss-header" rendering={route} />}
      {route && <Placeholder name="jss-main" rendering={route} />}
      {route && <Placeholder name="jss-footer" rendering={route} />}
    </div>
  );
};

export default Layout;
