import { gql } from "@apollo/client";

export default gql`
  fragment TaskInfo on Task {
    createdAt
    description
    id
    title
    deadlineAt
  }
`;
