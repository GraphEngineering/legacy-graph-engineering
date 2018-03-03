import { Graph } from "./graph";

import { graphqlSync, introspectionQuery } from "graphql";
import { fetchSchema } from "./utils";

const schemaToEdit = fetchSchema("target");

console.log(graphqlSync(schemaToEdit, introspectionQuery));

const targetIntrospection = graphqlSync(schemaToEdit, introspectionQuery);

export default {
  Query: {
    schema: (): any => targetIntrospection
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
