import * as React from "react";

import { IntrospectionType, introspectionQuery } from "graphql";
import gql from "graphql-tag";

import withGraphQL from "../withGraphQL";
import Operations from "../../generated/Schema";

export default withGraphQL<Operations>(
  gql`
    ${introspectionQuery.replace("__schema", "schema")}
  `,
  ({ IntrospectionQuery: { data } }) => (
    <div className="schema">{data && data.schema.types.map(Type)}</div>
  )
);

const Type: React.StatelessComponent<IntrospectionType> = ({
  name,
  description
}) => (
  <div className="type" key={name}>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);
