import { IntrospectionSchema, graphqlSync, introspectionQuery } from "graphql";
import { fetchSchema } from "./utils";

debugger;
const targetIntrospection = graphqlSync(
  fetchSchema("target"),
  introspectionQuery
);

// this interface should eventually be generated
export interface Graph {
  count: number;
  schema: IntrospectionSchema;
}

export const defaults: Graph = {
  count: 0,
  schema: targetIntrospection.data.__schema
};
