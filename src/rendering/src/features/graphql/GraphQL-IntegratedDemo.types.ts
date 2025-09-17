import { ComponentProps } from 'services/sitecore/component-props';

export type IntegratedDemoSampleLink = {
  definition: {
    type: string;
    shared: boolean;
  };
  jsonValue: {
    value: {
      href: string;
      linktype: string;
      target: string;
      text: string;
      url: string;
    };
  };
  target: string;
  text: string;
  url: string;
};

export type IntegratedDemoDataSource = {
  sample1: {
    jsonValue: {
      value: string;
    };
    value: string;
  };
  sample2: IntegratedDemoSampleLink;
  name: string;
  id: string;
};

export type IntegratedDemoItem = {
  id: string;
  url: {
    path: string;
  };
  pageTitle: {
    value: string;
    jsonValue: {
      value: string;
    };
  };
};

export type IntegratedDemoItemResults = {
  results: IntegratedDemoItem[];
};

export type GraphQlIntegratedDemoProps = ComponentProps & {
  fields: {
    data: {
      datasource: IntegratedDemoDataSource;
      contextItem: {
        id: string;
        children: IntegratedDemoItemResults;
        pageTitle: {
          value: string;
        };
      };
    };
  };
};
