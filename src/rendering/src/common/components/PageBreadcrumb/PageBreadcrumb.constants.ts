import { BreadcrumbItem } from './PageBreadcrumb.types';

export const DEFAULT_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  {
    name: 'Home',
    link: '/',
    isCurrent: false,
  },
  {
    name: 'Visit',
    link: '/visit',
    isCurrent: true,
  },
];
