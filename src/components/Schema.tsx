import * as React from "react";

import { introspectionQuery } from "graphql";
import gql from "graphql-tag";

import { GraphQLComponent, withGraphQL } from "./withGraphQL";
import { Query } from "../generated/Schema";

const Schema: GraphQLComponent<Query> = ({ query }) => (
  <div>hi</div>
  // <h1>{JSON.stringify(query)}</h1>
);

console.log(introspectionQuery.replace("__schema", "schema"));

export default withGraphQL<Query>(Schema)(
  gql`
    ${introspectionQuery.replace("__schema", "schema")}
  `
);
