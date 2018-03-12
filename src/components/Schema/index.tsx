import * as React from "react";
import { visit } from "graphql";

import * as schemaAST from "../../graphql/schemas/StarWars.graphql";

import * as styles from "./index.scss";

export const Schema: React.StatelessComponent<{}> = () =>
  visit(schemaAST, transformersOnLeave);

const Node: React.StatelessComponent<{
  kind: string;
}> = ({ kind, children }) => <div className={styles[kind]}>{children}</div>;

const TypeDefinition: React.StatelessComponent<{
  kind: string;
  name: any;
  description: any;
}> = ({ kind, name, description, children }) => (
  <Node kind={kind}>
    <div className={styles["type-definition"]}>
      <div className={styles["type-definition-header"]}>
        <div className={styles["type-definition-name"]}>{name}</div>
        <div className={styles["type-definition-description"]}>
          <Description text={description} />
        </div>
      </div>
      <div className={styles["type-definition-body"]}>{children}</div>
    </div>
  </Node>
);

const Description: React.StatelessComponent<{ text: string }> = ({ text }) => (
  <div className={styles.description}>{text}</div>
);

const objectLikeDefinitionTransformer = (
  kind: string
): React.StatelessComponent<{
  name: any;
  description: any;
  fields: any[];
}> => ({ name, description, fields }) => (
  <TypeDefinition kind={kind} {...{ name, description }}>
    {fields}
  </TypeDefinition>
);

const transformers: {
  [tranformerName: string]: (node: any) => any;
} = {
  Document: ({ definitions }) => <Node kind="Document">{definitions}</Node>,

  SchemaDefinition: ({ operationTypes }) => (
    <Node kind="schema-definition">{operationTypes}</Node>
  ),
  OperationTypeDefinition: ({ operation, type }) => (
    <Node kind="operation-type-definition">
      {operation} {type}
    </Node>
  ),

  StringValue: ({ value }) => value,

  ScalarTypeDefinition: ({ name, description }) => (
    <TypeDefinition kind="scalar-type-definition" {...{ name, description }} />
  ),

  ObjectTypeDefinition: objectLikeDefinitionTransformer(
    "object-type-definition"
  ),
  InterfaceTypeDefinition: objectLikeDefinitionTransformer(
    "interface-type-definition"
  ),
  FieldDefinition: ({ name, description, type }) => (
    <Node kind="field-definition">
      <div className={styles["field-definition-name"]}>{name}</div>
      <div className={styles["field-definition-type-ref"]}>{type}</div>
      <div className={styles["field-definition-description"]}>
        <Description text={description} />
      </div>
    </Node>
  ),

  UnionTypeDefinition: ({ name, description, types }) => (
    <TypeDefinition kind="union-type-definition" {...{ name, description }}>
      {types}
    </TypeDefinition>
  ),

  EnumTypeDefinition: ({ name, description, values }) => (
    <TypeDefinition kind="enum-type-definition" {...{ name, description }}>
      {values}
    </TypeDefinition>
  ),
  EnumValueDefinition: ({ name, description }) => (
    <Node kind="enum-value-definition">
      <div className={styles["enum-value-definition-name"]}>{name}</div>
      <div className={styles["enum-value-definition-description"]}>
        <Description text={description} />
      </div>
    </Node>
  ),

  InputObjectTypeDefinition: objectLikeDefinitionTransformer(
    "input-object-type-definition"
  ),
  InputValueDefinition: ({ name, type, description, defaultValue }) => (
    <Node kind="input-value-definition">
      <div className={styles["input-value-definition-name"]}>{name}</div>
      <div className={styles["input-value-definition-type-ref"]}>{type}</div>
      <div className={styles["input-value-definition-default-value"]}>
        {defaultValue}
      </div>
      <div className={styles["input-value-definition-description"]}>
        <Description text={description} />
      </div>
    </Node>
  ),

  NamedType: ({ name }) => <Node kind="named-type">{name}</Node>,
  ListType: ({ type }) => <Node kind="list-type">[{type}]</Node>,
  NonNullType: ({ type }) => <Node kind="non-null-type">{type}!</Node>,

  Name: ({ value }) => <Node kind="name">{value}</Node>
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
