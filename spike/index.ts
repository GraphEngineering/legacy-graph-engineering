console.log("This is for quick and dirty testing...");

import * as fs from "fs";
import * as GraphQL from "graphql";

const schemaString = fs.readFileSync("./src/graphql/schemas/StarWars.graphql");

const schemaSource = new GraphQL.Source(schemaString);
const schemaAST = GraphQL.parse(schemaSource);

const interfaceDefinitions = GraphQL.visit(schemaAST, {
  leave: {
    Document: ({ definitions }: any) =>
      definitions.reduce(
        (previous: any, { kind, name, fields }: any) =>
          kind ? previous : { ...previous, [name]: fields },
        {}
      ),
    InterfaceTypeDefinition: ({ name, fields }: any) => ({ name, fields }),
    FieldDefinition: ({ name }: any) => name,
    Name: ({ value }: any) => value
  }
});

console.log(interfaceDefinitions);

const typescript = GraphQL.visit(schemaAST, {
  leave: {
    Document: ({ definitions }: any) =>
      definitions
        .filter((definition: any) => typeof definition === "string")
        .join("\n\n"),
    // SchemaDefinition,
    // OperationTypeDefinition,
    // StringValue,
    ScalarTypeDefinition: ({ name }: any) => `type ${name}<T> = T;`,
    ObjectTypeDefinition: ({ name, interfaces, fields }: any) => {
      const fieldsFromInterfaces = interfaces
        .map((it: string) => interfaceDefinitions[it])
        .reduce(
          (previous: string[], current: string[]) => previous.concat(current),
          []
        );

      const fieldsOnDefintion = fields
        .filter((it: any) => !fieldsFromInterfaces.includes(it.name))
        .map((it: any) => it.source);

      console.log(fieldsFromInterfaces);

      return `interface ${name} {\n\t${fieldsOnDefintion.join("\n\t")}\n}`;
    },
    InterfaceTypeDefinition: ({ name }: any) => `interface ${name} {}`,
    FieldDefinition: ({ name, type }: any) => ({
      name,
      source: `${name}: ${type}`
    }),
    UnionTypeDefinition: ({ name, types }: any) =>
      `type ${name} = ${types.join(" | ")};`,
    EnumTypeDefinition: ({ name, values }: any) =>
      `enum ${name} {\n\t${values.join(",\n\t")}\n}`,
    EnumValueDefinition: ({ name }: any) => name,
    // InputObjectTypeDefinition,
    // InputValueDefinition,
    NamedType: ({ name }: any) => {
      switch (name) {
        case "Int":
          return "number";

        case "Float":
          return "number";

        case "Boolean":
          return "boolean";

        case "ID":
          return "string";

        default:
          return name;
      }
    },
    ListType: ({ type }: any) => `${type}[]`,
    NonNullType: ({ type }: any) => type,
    Name: ({ value }: any) => value
  }
});

fs.writeFileSync("./spike/types.ts", typescript);
