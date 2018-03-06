import * as React from "react";

import { IntrospectionType } from "graphql";
import gql from "graphql-tag";

import { withGraphQL } from "../withGraphQL";
import { Query } from "../../generated/Schema";

export default withGraphQL<Query, {}>(
  gql`
    query {
      schema {
        types {
          name
          description
        }
      }
    }
  `,
  ({ query: { data } }) => (
    <div className="schema">{data && data.schema.types.map(Type)}</div>
  )
);

const Type: React.StatelessComponent<IntrospectionType> = ({
  name,
  description
}) => (
  <div className="type">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);
