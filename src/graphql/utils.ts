import { GraphQLSchema } from "graphql";

import { makeExecutableSchema } from "graphql-tools";

// `*.graphql` is in `index.d.ts`, `require` is declared since parcel uses it
declare const require: any;

// tslint:disable-next-line
const app = require("./app.graphql");

// tslint:disable-next-line
const target = require("./schemas/StarWars.graphql");

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
    typeDefs: { app, target }[schemaName],
    resolvers
  });
