import { gql } from "@apollo/client";

import projectFragment from "src/graphql/fragments/projectFragment";

export default gql`
  ${projectFragment}
  query {
    projects {
      ...ProjectInfo
    }
  }
`;
