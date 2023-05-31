import { gql } from "@apollo/client";

import taskFragment from "src/graphql/fragments/taskFragment";

export default gql`
  ${taskFragment}
  query {
    projects {
      tasks {
        ...TaskInfo
      }
    }
}
`;
