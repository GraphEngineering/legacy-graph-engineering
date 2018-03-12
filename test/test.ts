import { parse, visit } from "graphql";
import fs from "fs";

const schemaAST = parse(
  fs.readFileSync("./src/graphql/schemas/StarWars.graphql", "utf8")
);

fs.writeFileSync("./test/input.json", JSON.stringify(schemaAST, null, 2));

const el = (
  elementName: string,
  props: { [propName: string]: any },
  children: any[]
): any => ({
  [elementName]: { props, children }
});

const text = (value: string): { text: string } => ({ text: value });

interface Transformers {
  [tranformerName: string]: (node: any) => any;
}

const transformers: Transformers = {
  Document: ({ definitions }) => el("Document", {}, definitions),

  SchemaDefinition: ({ operationTypes }) =>
    el("SchemaDefinition", {}, operationTypes),
  OperationTypeDefinition: ({ operation, type }) =>
    el("OperationTypeDefinition", { operation }, [type]),

  StringValue: ({ value }) => text(value),

  ScalarTypeDefinition: ({ name, description }) =>
    el("ScalarTypeDefinition", {}, [
      name,
      el("Description", {}, [description])
    ]),

  ObjectTypeDefinition: ({ name, description, fields }) =>
    el("ObjectTypeDefinition", {}, [
      name,
      el("Description", {}, [description]),
      el("Fields", {}, fields)
    ]),
  FieldDefinition: ({ name, type }) => el("FieldDefinition", {}, [name, type]),

  InterfaceTypeDefinition: ({ name, description, fields }) =>
    el("InterfaceTypeDefinition", {}, [
      name,
      el("Description", {}, [description]),
      el("Fields", {}, fields)
    ]),

  UnionTypeDefinition: ({ name, description, types }) =>
    el("UnionTypeDefinition", {}, [
      name,
      el("Description", {}, [description]),
      el("Types", {}, [types])
    ]),

  EnumTypeDefinition: ({ name, description, values }) =>
    el("EnumTypeDefinition", {}, [
      name,
      el("Description", {}, [description]),
      el("Values", {}, values)
    ]),
  EnumValueDefinition: ({ name, description }) =>
    el("EnumValueDefinition", {}, [name, description]),

  InputObjectTypeDefinition: ({ name, description, fields }) =>
    el("InputObjectTypeDefinition", {}, [
      name,
      el("Description", {}, [description]),
      el("Fields", {}, fields)
    ]),
  InputValueDefinition: ({ name, type, description, defaultValue }) =>
    el("InputValueDefinition", {}, [
      name,
      el("TypeRef", {}, [type]),
      el("Description", {}, [description]),
      defaultValue
    ]),

  NamedType: ({ name }) => el("NamedType", {}, [name]),
  ListType: ({ type }) => el("ListType", {}, [type]),
  NonNullType: ({ type }) => el("NonNullType", {}, [type]),

  Name: ({ value }) => el("Name", {}, [text(value)])
};

const transformersOnLeave = Object.entries(transformers).reduce(
  (transformersUsingLeave, [transformerName, transformerFunction]) => ({
    ...transformersUsingLeave,
    [transformerName]: { leave: transformerFunction }
  }),
  {}
);

const output = visit(schemaAST, transformersOnLeave);

fs.writeFileSync("./test/output.ts", JSON.stringify(output, null, 2));
