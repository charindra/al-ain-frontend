import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from 'renderings/config';

export const GraphQLClient = (): GraphQLRequestClient => {
  return new GraphQLRequestClient(config.graphQLEndpoint as string, {
    apiKey: config.sitecoreApiKey as string,
    retries:
      (process.env.GRAPH_QL_SERVICE_RETRIES &&
        parseInt(process.env.GRAPH_QL_SERVICE_RETRIES, 10)) ||
      0,
  });
};
