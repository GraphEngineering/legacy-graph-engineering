import * as React from "react";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";

import Operations from "../generated/App";

const App: GraphQLComponent<Operations> = ({ query, mutation }) => (
  <h1 onClick={mutation.increment}>{query.data && query.data.count}</h1>
);

export default withGraphQL<Operations>(App)(
  gql`
    query {
      count
    }

    mutation {
      increment
    }
  `
);
