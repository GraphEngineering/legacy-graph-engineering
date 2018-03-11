import * as React from "react";

import { IntrospectionType, introspectionQuery } from "graphql";
import gql from "graphql-tag";

import withGraphQL from "../withGraphQL";
import Operations from "../../generated/Schema";

import Type from "./Type";

export default withGraphQL<Operations>(
  gql`
    ${introspectionQuery.replace("__schema", "schema")}
  `,
  ({ IntrospectionQuery: { data } }) => (
    <div className="schema">
      {data &&
        data.schema.types
          .filter(isUserDefinedType)
          .map(type => {
            switch (type.kind) {
              case "OBJECT":
                return <ObjectType type={type} />;
              case "ENUM":
                return <Enum type={type} />;
              default:
                return null;
            }
          };}
    </div>
  )
);

const isUserDefinedType = (type: IntrospectionType) =>
  !type.name.startsWith("__") && !basicTypes.includes(type.name);

const basicTypes = ["String", "Int", "Float", "Boolean", "ID"];
