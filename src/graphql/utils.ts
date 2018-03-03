import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import { GraphQLSchema } from "graphql";
import { IResolvers as Resolvers } from "graphql-tools/dist/Interfaces";

export * from "./graph";
export { resolvers };

// declared in `index.d.ts`, require is declared since parcel uses it
// tslint:disable-next-line
declare const require: any;

// tslint:disable-next-line
const app = require("./app.graphql");

// tslint:disable-next-line
const target = require("./target.graphql");

export const fetchSchema = (
  schemaName: string,
  resolvers?: Resolvers
): GraphQLSchema =>
  makeExecutableSchema({
    typeDefs: { app, target }[schemaName],
    resolvers
  });