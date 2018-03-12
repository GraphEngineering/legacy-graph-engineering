import * as React from "react";
import { visit } from "graphql";

import * as schemaAST from "../../graphql/schemas/StarWars.graphql";

import * as styles from "./index.scss";

export const Schema: React.StatelessComponent<{}> = () =>
  visit(schemaAST, transformersOnLeave);

const Node: React.StatelessComponent<{
  kind: string;
  props?: { [propName: string]: any };
}> = ({ kind, children }) => <div className={styles[kind]}>{children}</div>;

const transformers: {
  [tranformerName: string]: (node: any) => any;
} = {
  Document: ({ definitions }) => <Node kind={"Document"}>{definitions}</Node>,

  SchemaDefinition: ({ operationTypes }) => (
    <Node kind={"SchemaDefinition"}>{operationTypes}</Node>
  ),
  OperationTypeDefinition: ({ operation, type }) => (
    <Node kind={"OperationTypeDefinition"}>
      {operation} {type}
    </Node>
  ),

  StringValue: ({ value }) => value,

  ScalarTypeDefinition: ({ name, description }) => (
    <Node kind={"ScalarTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
    </Node>
  ),

  ObjectTypeDefinition: ({ name, description, fields }) => (
    <Node kind={"ObjectTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
      <Node kind={"Fields"}>{fields}</Node>
    </Node>
  ),

  FieldDefinition: ({ name, type }) => (
    <Node kind={"FieldDefinition"}>
      {name}
      {type}
    </Node>
  ),

  InterfaceTypeDefinition: ({ name, description, fields }) => (
    <Node kind={"InterfaceTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
      <Node kind={"Fields"}>{fields}</Node>
    </Node>
  ),

  UnionTypeDefinition: ({ name, description, types }) => (
    <Node kind={"UnionTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
      <Node kind={"Types"}>{types}</Node>
    </Node>
  ),

  EnumTypeDefinition: ({ name, description, values }) => (
    <Node kind={"EnumTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
      <Node kind={"Values"}>{values}</Node>
    </Node>
  ),
  EnumValueDefinition: ({ name, description }) => (
    <Node kind={"EnumValueDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
    </Node>
  ),

  InputObjectTypeDefinition: ({ name, description, fields }) => (
    <Node kind={"InputObjectTypeDefinition"}>
      {name}
      <Node kind={"Description"}>{description}</Node>
      <Node kind={"Fields"}>{fields}</Node>
    </Node>
  ),
  InputValueDefinition: ({ name, type, description, defaultValue }) => (
    <Node kind={"InputValueDefinition"}>
      {name}
      <Node kind={"TypeRef"}>{type}</Node>
      <Node kind={"Description"}>{description}</Node>
      {defaultValue}
    </Node>
  ),

  NamedType: ({ name }) => <Node kind={"NamedType"}>{name}</Node>,
  ListType: ({ type }) => <Node kind={"ListType"}>[{type}]</Node>,
  NonNullType: ({ type }) => <Node kind={"NonNullType"}>{type}!</Node>,

  Name: ({ value }) => <Node kind={"Name"}>{value}</Node>
};

const transformersOnLeave = Object.entries(transformers).reduce(
  (transformersUsingLeave, [transformerName, transformerFunction]) => ({
    ...transformersUsingLeave,
    [transformerName]: { leave: transformerFunction }
  }),
  {}
);

// const isUserDefinedType = (type: IntrospectionType) =>
//   !type.name.startsWith("__") && !basicTypes.includes(type.name);

// const basicTypes = ["String", "Int", "Float", "Boolean", "ID"];
