import * as React from "react";
import * as GraphQL from "graphql";

import * as schemaAST from "../../graphql/schemas/StarWars.graphql";

import * as styles from "./index.scss";

export const Schema: React.StatelessComponent<{}> = () =>
  GraphQL.visit(schemaAST, {
    leave: {
      Document,
      SchemaDefinition,
      OperationTypeDefinition,
      StringValue,
      ScalarTypeDefinition,
      ObjectTypeDefinition,
      InterfaceTypeDefinition,
      FieldDefinition,
      UnionTypeDefinition,
      EnumTypeDefinition,
      EnumValueDefinition,
      InputObjectTypeDefinition,
      InputValueDefinition,
      NamedType,
      ListType,
      NonNullType,
      Name
    }
  });

const Node: React.StatelessComponent<{
  kind: string;
}> = ({ kind, children }) => <div className={styles[kind]}>{children}</div>;

interface NameValueAndElement {
  value: string;
  element: JSX.Element;
}

interface NamedAndDescribed {
  name: NameValueAndElement;
  description: string | undefined;
}

const TypeDefinition: React.StatelessComponent<
  NamedAndDescribed & {
    kind: string;
    keyword: string;
  }
> = ({ kind, keyword, name, description, children }) => (
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

const objectLikeDefinitionTransformer = (
  keyword: string,
  kind: string
): React.StatelessComponent<
  NamedAndDescribed & {
    fields: JSX.Element[];
  }
> => ({ name, description, fields }) => (
  <TypeDefinition kind={kind} keyword={keyword} {...{ name, description }}>
    {fields}
  </TypeDefinition>
);

const Description: React.StatelessComponent = ({ children }) => (
  <div className={styles.description}>{children}</div>
);

const Syntax: React.StatelessComponent = ({ children }) => (
  <div className={styles.syntax}>{children}</div>
);

const Document: React.StatelessComponent<{
  definitions: JSX.Element[];
}> = ({ definitions }) => <Node kind="document">{definitions}</Node>;

const SchemaDefinition: React.StatelessComponent<{
  operationTypes: JSX.Element[];
}> = ({ operationTypes }) => (
  <Node kind="schema-definition">{operationTypes}</Node>
);

const OperationTypeDefinition: React.StatelessComponent<{
  operation: string;
  type: JSX.Element;
}> = ({ operation, type }) => (
  <Node kind="operation-type-definition">
    {operation} {type}
  </Node>
);

const StringValue: React.StatelessComponent<GraphQL.StringValueNode> = ({
  value
}) => <Node kind="string-value">{value}</Node>;

const ScalarTypeDefinition: React.StatelessComponent<
  NamedAndDescribed & {}
> = ({ name, description }) => (
  <TypeDefinition
    kind="scalar-type-definition"
    keyword="scalar"
    {...{ name, description }}
  />
);

const ObjectTypeDefinition = objectLikeDefinitionTransformer(
  "type",
  "object-type-definition"
);

const InterfaceTypeDefinition = objectLikeDefinitionTransformer(
  "interface",
  "interface-type-definition"
);

const FieldDefinition: React.StatelessComponent<
  NamedAndDescribed & {
    arguments: JSX.Element[];
    type: JSX.Element;
  }
> = ({ name, description, arguments: inputArguments, type }) => (
  <Node kind="field-definition">
    <div className={styles["field-definition-name"]}>{name.element}</div>
    <div className={styles["field-definition-description"]}>
      <Description>{description}</Description>
    </div>
    {inputArguments.length > 0 && (
      <React.Fragment>
        inputs
        <div className={styles["field-definition-arguments"]}>
          {inputArguments}
        </div>
      </React.Fragment>
    )}
    outputs
    <div className={styles["field-definition-type-ref"]}>{type}</div>
  </Node>
);

const UnionTypeDefinition: React.StatelessComponent<
  NamedAndDescribed & {
    types: JSX.Element[];
  }
> = ({ name, description, types }) => (
  <TypeDefinition
    kind="union-type-definition"
    keyword="union"
    {...{ name, description }}
  >
    {types}
  </TypeDefinition>
);

const EnumTypeDefinition: React.StatelessComponent<
  NamedAndDescribed & {
    values: JSX.Element[];
  }
> = ({ name, description, values }) => (
  <TypeDefinition
    kind="enum-type-definition"
    keyword="enum"
    {...{ name, description }}
  >
    {values}
  </TypeDefinition>
);

const EnumValueDefinition: React.StatelessComponent<NamedAndDescribed> = ({
  name,
  description
}) => (
  <Node kind="enum-value-definition">
    <div className={styles["enum-value-definition-name"]}>{name.element}</div>
    <div className={styles["enum-value-definition-description"]}>
      <Description>{description}</Description>
    </div>
  </Node>
);

const InputObjectTypeDefinition = objectLikeDefinitionTransformer(
  "input",
  "input-object-type-definition"
);

const InputValueDefinition: React.StatelessComponent<
  NamedAndDescribed & {
    type: JSX.Element;
    defaultValue: JSX.Element;
  }
> = ({ name, type, description, defaultValue }) => (
  <Node kind="input-value-definition">
    <div className={styles["input-value-definition-name"]}>{name.element}</div>
    <div className={styles["input-value-definition-type-ref"]}>{type}</div>
    <div className={styles["input-value-definition-default-value"]}>
      {JSON.stringify(defaultValue, null, 2)}
    </div>
    <div className={styles["input-value-definition-description"]}>
      <Description>{description}</Description>
    </div>
  </Node>
);

const NamedType: React.StatelessComponent<{
  name: NameValueAndElement;
}> = ({ name }) => (
  <Node kind="named-type-ref">
    <a href={`#${name.value}`}>{name.element}</a>
  </Node>
);

const ListType: React.StatelessComponent<GraphQL.ListTypeNode> = ({ type }) => (
  <Node kind="list-type-ref">
    <Syntax>list</Syntax>
    {type}
  </Node>
);

const NonNullType: React.StatelessComponent<GraphQL.NonNullTypeNode> = ({
  type
}) => <Node kind="non-null-type-ref">{type}</Node>;

const Name = ({ value }: GraphQL.NameNode): NameValueAndElement => ({
  value,
  element: <Node kind="name">{value}</Node>
});
