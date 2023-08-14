import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      name
    }
  }
`;

export const ADD_USER = gql`
  mutation AddTodo($name: String!, $password: String!) {
    insert_users(objects: [{ name: $name, id: $password }]) {
      returning {
        name
      }
    }
  }
`;
