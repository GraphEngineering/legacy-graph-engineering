import { fetchSchema } from "./utils";

// this interface should eventually be generated
export interface Graph {
  count: number;
  // schema: IntrospectionSchema;
}

export const defaults: Graph = {
  count: 0
};

export const resolvers = {
  Query: {
    schema: () => fetchSchema("target")
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};

export const schema = fetchSchema("app", resolvers);
