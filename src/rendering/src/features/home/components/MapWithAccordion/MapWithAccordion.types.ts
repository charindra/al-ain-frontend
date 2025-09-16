export type AccordionItemContent = {
  title: string;
  description: string;
};

type BaseProps = {
  items?: AccordionItemContent[];
};

export type MapWithAccordionProps = BaseProps;
