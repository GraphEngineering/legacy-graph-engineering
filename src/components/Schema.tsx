import * as React from "react";

import { introspectionQuery } from "graphql";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";
import { Query } from "../generated/Schema";

const Schema: GraphQLComponent<Query> = ({ query }) => (
  <div>
      hi
      {query.data && query.data.schema.queryType}
  </div>
);

console.log(introspectionQuery.replace("__schema", "schema"));

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
