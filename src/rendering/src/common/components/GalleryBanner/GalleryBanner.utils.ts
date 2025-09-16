import { MenuItem, GalleryBannerData } from './GalleryBanner.types';

export const mapToBreadcrumb = (data?: GalleryBannerData): MenuItem[] => {
  if (!data?.children?.results) {
    return [];
  }

  return data.children.results.map((child, index, array) => ({
    name: child.name as unknown as string,
    link: child.link.value?.href ?? '#',
    isCurrent: index === array.length - 1,
  }));
};
