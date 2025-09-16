export type BreadcrumbItem = {
  name: string;
  link: string;
  isCurrent?: boolean;
};

export type PageBreadcrumbProps = {
  items?: BreadcrumbItem[];
};
