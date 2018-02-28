import * as React from "react";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";

import Schema from "./Schema";

import { Query, Mutation } from "../generated/App";

const App: GraphQLComponent<Query, Mutation> = ({ query, mutation }) => (
  <div>
    <h1 onClick={mutation.increment}>{query.data && query.data.count}</h1>
    <Schema />
  </div>
);

export default withGraphQL<Query, Mutation>(App)(
  gql`
    query {
      count
    }

    mutation {
      increment
    }
  `
);
