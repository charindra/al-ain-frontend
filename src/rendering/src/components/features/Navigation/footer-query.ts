import gql from 'graphql-tag';

const getTopNavigationQuery = gql`
  query FooterQuery($datasource: String!, $language: String!) {
    datasource: item(path: $datasource, language: $language) {
      ... on Footer {
        heading {
          value
          jsonValue
        }
        contactDetails {
          value
          jsonValue
        }
        copyrightText {
          value
          jsonValue
        }
        privacyNotice {
          value
          jsonValue
        }
        cookiePolicy {
          value
          jsonValue
        }
        termsAndConditions {
          value
          jsonValue
        }
      }
      children(hasLayout: false) {
        results {
          ...FooterColumnFields
          ...FooterSocialColumnFields
        }
      }
    }
  }

  fragment FooterColumnFields on FooterColumn {
    columnTitle {
      value
      jsonValue
    }
    children(hasLayout: false) {
      results {
        ...NavigationLinksFields
      }
    }
  }

  fragment FooterSocialColumnFields on FooterSocialColumn {
    columnTitle {
      value
      jsonValue
    }
    isSocialColumn {
      value
      jsonValue
    }
    children(hasLayout: false) {
      results {
        ...SocialIconFields
      }
    }
  }

  fragment NavigationLinksFields on NavigationLink {
    link {
      value
      jsonValue
    }
  }

  fragment SocialIconFields on SocialLink {
    socialImage {
      value
      jsonValue
    }
    linkUrl {
      value
      jsonValue
    }
  }
`;
export default getTopNavigationQuery;
