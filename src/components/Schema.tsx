import * as React from "react";

// import { introspectionQuery } from "graphql";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";
import { Query } from "../generated/Schema";

const Schema: GraphQLComponent<Query> = props => (
  <div>{console.log(JSON.stringify(props, null, 2))}</div>
);

export default withGraphQL<Query>(Schema)(
  gql`
    query {
      schema {
        queryType {
          name
        }
      }
    }
  `
);
