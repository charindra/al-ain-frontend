import gql from 'graphql-tag';

const getTopNavigationQuery = gql`
  query TopNavigationQuery($datasource: String!, $language: String!) {
    datasource: item(path: $datasource, language: $language) {
      children(hasLayout: false) {
        results {
          ...NavigationGroupsFields
          ...NavigationLinksFields
          ...NavigationButtonsFields
        }
      }
    }
  }

  fragment NavigationGroupsFields on NavigationGroup {
    group {
      value
    }
    link {
      value
      jsonValue
    }
  }

  fragment NavigationLinksFields on NavigationLink {
    link {
      value
      jsonValue
    }
  }

  fragment NavigationButtonsFields on NavigationButton {
    button {
      value
    }
    link {
      value
      jsonValue
    }
  }
`;
export default getTopNavigationQuery;
