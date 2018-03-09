import { GraphQLSchema, DocumentNode } from "graphql";

import { makeExecutableSchema } from "graphql-tools";

import * as app from "./app.graphql";
import * as target from "./schemas/StarWars.graphql";

const schemas: {
  [schemaName: string]: DocumentNode;
} = {
  app,
  target
};

interface Resolvers {
  [typeName: string]: {
    [fieldName: string]: () => any;
  };
}

export const fetchSchema = (
  schemaName: string,
  resolvers?: Resolvers
): GraphQLSchema =>
  makeExecutableSchema({
    typeDefs: schemas[schemaName],
    resolvers
  });
