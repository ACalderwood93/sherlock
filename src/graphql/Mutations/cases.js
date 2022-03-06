import { gql } from "@apollo/client";

export const UPDATE_CASE = gql`
  mutation ($input: upsertCaseInput) {
    Case(input: $input)
  }
`;
