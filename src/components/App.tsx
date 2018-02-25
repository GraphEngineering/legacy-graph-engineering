import * as React from "react";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";

import Operations from "../generated/App";

const App: GraphQLComponent = ({ query, mutation }) => (
  <h1 onClick={mutation.Increment}>{query.App.count}</h1>
);

export default withGraphQL(App)(
  gql`
    query App {
      count
    }

    mutation Increment {
      increment
    }
  `
);
