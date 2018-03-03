import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import { GraphQLSchema } from "graphql";
import { IResolvers as Resolvers } from "graphql-tools/dist/Interfaces";

// declared in `index.d.ts`, require is declared since parcel uses it
// tslint:disable-next-line
declare const require: any;

export * from "./graph";
export { resolvers };

export const fetchSchema = (
  path: string,
  resolvers?: Resolvers
): GraphQLSchema =>
  makeExecutableSchema({
    typeDefs: require(path),
    resolvers
  });
