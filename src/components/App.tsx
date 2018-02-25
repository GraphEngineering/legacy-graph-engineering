import * as React from "react";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";

import { Query, Mutation } from "../generated/App";

const App: GraphQLComponent<Query, Mutation> = ({ query, mutation }) => (
  <h1 onClick={mutation.Increment}>{query.App.count}</h1>
);

export default withGraphQL<Query, Mutation>(App, {
  query: gql`
    query App {
      count
    }
  `,
  mutation: gql`
    mutation Increment {
      increment
    }
  `
});
