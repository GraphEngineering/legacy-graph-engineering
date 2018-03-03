import { Graph } from "./graph";

import { graphqlSync, introspectionQuery } from "graphql";
import { fetchSchema } from "./utils";

debugger;
const schemaUnderEdit = fetchSchema("../assets/graphql/schema.graphql");

export default {
  Query: {
    schema: (): any => graphqlSync(schemaUnderEdit, introspectionQuery)
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
