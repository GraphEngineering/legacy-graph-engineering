import { Graph } from "./graph";

import { graphqlSync, introspectionQuery } from "graphql";
import { fetchSchema } from "./utils";

const targetIntrospection = graphqlSync(
  fetchSchema("target"),
  introspectionQuery
);

export default {
  Query: {
    schema: () => {
      debugger;
      return { targetIntrospection };
    }
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
