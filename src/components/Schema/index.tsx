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
  keyword: string;
  name: { value: string; element: any };
  description: any;
}> = ({ kind, keyword, name, description, children }) => (
  <Node kind={kind}>
    <div id={name.value} className={styles["type-definition"]}>
      <div className={styles["type-definition-header"]}>
        <div className={styles["type-definition-name"]}>
          <Syntax>{keyword}</Syntax>
          {name.element}
        </div>
        <div className={styles["type-definition-description"]}>
          <Description>{description}</Description>
        </div>
      </div>
      <div className={styles["type-definition-body"]}>{children}</div>
    </div>
  </Node>
);

const Description: React.StatelessComponent = ({ children }) => (
  <div className={styles.description}>{children}</div>
);

const Syntax: React.StatelessComponent = ({ children }) => (
  <div className={styles.syntax}>{children}</div>
);

const objectLikeDefinitionTransformer = ({
  kind,
  keyword
}: {
  kind: string;
  keyword: string;
}): React.StatelessComponent<{
  name: any;
  description: any;
  fields: any[];
}> => ({ name, description, fields }) => (
  <TypeDefinition kind={kind} keyword={keyword} {...{ name, description }}>
    {fields}
  </TypeDefinition>
);

const transformers: {
  [tranformerName: string]: (node: any) => any;
} = {
  Document: ({ definitions }) => <Node kind="document">{definitions}</Node>,

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
    <TypeDefinition
      kind="scalar-type-definition"
      keyword="scalar"
      {...{ name, description }}
    />
  ),

  ObjectTypeDefinition: objectLikeDefinitionTransformer({
    kind: "object-type-definition",
    keyword: "type"
  }),
  InterfaceTypeDefinition: objectLikeDefinitionTransformer({
    kind: "interface-type-definition",
    keyword: "interface"
  }),
  FieldDefinition: ({ name, description, type }) => (
    <Node kind="field-definition">
      <div className={styles["field-definition-name"]}>{name.element}</div>
      <div className={styles["field-definition-type-ref"]}>{type}</div>
      <div className={styles["field-definition-description"]}>
        <Description>{description}</Description>
      </div>
    </Node>
  ),

  UnionTypeDefinition: ({ name, description, types }) => (
    <TypeDefinition
      kind="union-type-definition"
      keyword="union"
      {...{ name, description }}
    >
      {types}
    </TypeDefinition>
  ),

  EnumTypeDefinition: ({ name, description, values }) => (
    <TypeDefinition
      kind="enum-type-definition"
      keyword="enum"
      {...{ name, description }}
    >
      {values}
    </TypeDefinition>
  ),
  EnumValueDefinition: ({ name, description }) => (
    <Node kind="enum-value-definition">
      <div className={styles["enum-value-definition-name"]}>{name.element}</div>
      <div className={styles["enum-value-definition-description"]}>
        <Description>{description}</Description>
      </div>
    </Node>
  ),

  InputObjectTypeDefinition: objectLikeDefinitionTransformer({
    kind: "input-object-type-definition",
    keyword: "input"
  }),
  InputValueDefinition: ({ name, type, description, defaultValue }) => (
    <Node kind="input-value-definition">
      <div className={styles["input-value-definition-name"]}>
        {name.element}
      </div>
      <div className={styles["input-value-definition-type-ref"]}>{type}</div>
      <div className={styles["input-value-definition-default-value"]}>
        {defaultValue}
      </div>
      <div className={styles["input-value-definition-description"]}>
        <Description>{description}</Description>
      </div>
    </Node>
  ),

  NamedType: ({ name }) => (
    <Node kind="named-type-ref">
      <a href={`#${name.value}`}>{name.element}</a>
    </Node>
  ),
  ListType: ({ type }) => (
    <Node kind="list-type-ref">
      <Syntax>list</Syntax>
      {type}
    </Node>
  ),
  NonNullType: ({ type }) => <Node kind="non-null-type-ref">{type}</Node>,

  Name: ({ value }) => ({ value, element: <Node kind="name">{value}</Node> })
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
