import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

// declared in `index.d.ts`, require is declared since parcel uses it
// tslint:disable-next-line
export const schemaAST = require("./schema.graphql");
declare const require: any;

export * from "./graph";
export { resolvers };

export const schema = makeExecutableSchema({
  typeDefs: schemaAST,
  resolvers
});
