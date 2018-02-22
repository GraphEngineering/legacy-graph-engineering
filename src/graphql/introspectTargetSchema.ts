import { graphql, buildASTSchema, introspectionQuery } from "graphql";

// tslint:disable-next-line
const schemaAST = require("../assets/graphql/schema.graphql");
declare const require: any;

import { Schema } from "../types/schema";

const schema = buildASTSchema(schemaAST);

export default async () => {
  const introspectionResult = await graphql(schema, introspectionQuery);

  const { data: { __schema } } = introspectionResult as {
    data: { __schema: Schema };
  };

  return __schema;
};
