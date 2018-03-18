console.log("This is for quick and dirty testing...");

import * as fs from "fs";
import * as GraphQL from "graphql";

const schemaString = fs.readFileSync("./src/graphql/schemas/StarWars.graphql");

const schemaSource = new GraphQL.Source(schemaString);
const schemaAST = GraphQL.parse(schemaSource);

const typescript = GraphQL.visit(schemaAST, {
  leave: {
    Document: ({ definitions }: any) =>
      definitions
        .filter((definition: any) => typeof definition === "string")
        .join("\n\n"),
    // SchemaDefinition,
    // OperationTypeDefinition,
    // StringValue,
    // ScalarTypeDefinition,
    ObjectTypeDefinition: ({ name, fields }: any) =>
      `interface ${name} {\n\t${fields.join("\n\t")}\n}`,
    // InterfaceTypeDefinition,
    FieldDefinition: ({ name, type }: any) => `${name}: ${type};`,
    // UnionTypeDefinition,
    // EnumTypeDefinition,
    // EnumValueDefinition,
    // InputObjectTypeDefinition,
    // InputValueDefinition,
    NamedType: ({ name }: any) => {
      const convertToTypescriptType = (graphqlType: string) => {
        switch (graphqlType) {
          case "Int":
            return "number";

          case "Float":
            return "number";

          case "Boolean":
            return "boolean";

          case "ID":
          case "String":
            return "string";

          default:
            return graphqlType;
        }
      };

      return `${convertToTypescriptType(name)} | null`;
    },
    ListType: ({ type }: any) =>
      type.includes(" | null")
        ? type.replace(" | null", "[] | null")
        : `${type}[]`,
    NonNullType: ({ type }: any) => type.replace(" | null", ""),
    Name: ({ value }: any) => value
  }
});

fs.writeFileSync("./spike/types.ts", typescript);
fs.writeFileSync("./spike/types.json", JSON.stringify(schemaAST, null, 2));
