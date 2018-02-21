import { graphql, buildASTSchema, introspectionQuery } from "graphql";

declare const require: any;

// tslint:disable-next-line
const schema = require("./schema.graphql");

import { IntrospectionQueryQuery as Introspection } from "./operations";

export { schema };
export * from "./operations";

export const defaults = {
  test: "HA!"
};

export const resolvers = {
  Query: {
    test: () => "It works!",
    blah: () => ({ what: "...is up my dude?" }),
    __schema: async () =>
      ((await graphql(buildASTSchema(schema), introspectionQuery)) as {
        data: { __schema: Introspection };
      }).data.__schema
  }
};
