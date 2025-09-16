import { SitecorePageProps } from 'services/sitecore/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
import { siteResolver } from 'services/sitecore/site-resolver';
import config from 'renderings/config';

class SitePlugin implements Plugin {
  order = 0;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) return props;

    // Resolve site by name
    props.site = siteResolver.getByName(config.sitecoreSiteName);

    return props;
  }
}

export const sitePlugin = new SitePlugin();
