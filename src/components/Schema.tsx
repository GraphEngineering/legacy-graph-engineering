import * as React from "react";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";
import { Query } from "../generated/Schema";

const Schema: GraphQLComponent<Query> = props => (
  <pre>{JSON.stringify(props, null, 2)}</pre>
);

export default withGraphQL<Query>(Schema)(
  gql`
    query {
      schema {
        types {
          name
        }
      }
    }
  `
);
