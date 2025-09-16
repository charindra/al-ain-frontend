import { NavigationItem } from './TopNavigation.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalizeMenuItems = (items: any[]): NavigationItem[] =>
  items.map((item) => {
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
