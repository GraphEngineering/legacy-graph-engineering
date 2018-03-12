import * as React from "react";

import { IntrospectionType, introspectionQuery } from "graphql";
import gql from "graphql-tag";

import { withGraphQL } from "../withGraphQL";
import { Operations } from "../../generated/Schema";

import { ObjectType } from "./ObjectType";
import { EnumType } from "./EnumType";

export const Schema = withGraphQL<Operations>(
  gql`
    ${introspectionQuery.replace("__schema", "schema")}
  `,
  ({ IntrospectionQuery: { data } }) => {
    if (!data) {
      return null;
    }

    const { schema } = data;
    const { types } = schema;

    return (
      <div className="schema">
        {types.filter(isUserDefinedType).map(type => {
          switch (type.kind) {
            case "OBJECT":
              // case "INPUT_OBJECT":
              return (
                <ObjectType objectType={type} schema={schema} key={type.name} />
              );

            case "ENUM":
              return <EnumType enumType={type} key={type.name} />;
            default:
              return null;
          }
        })}
      </div>
    );
  }
);

// export type IntrospectionType =
//   | IntrospectionScalarType
//   | IntrospectionObjectType
//   | IntrospectionInterfaceType
//   | IntrospectionUnionType
//   | IntrospectionEnumType
//   | IntrospectionInputObjectType;

const isUserDefinedType = (type: IntrospectionType) =>
  !type.name.startsWith("__") && !basicTypes.includes(type.name);

const basicTypes = ["String", "Int", "Float", "Boolean", "ID"];
