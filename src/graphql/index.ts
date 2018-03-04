import { fetchSchema } from "./utils";

const targetSchema = fetchSchema("target");

// this interface should eventually be generated
export interface Graph {
  count: number;
}

export const defaults: Graph = {
  count: 0
};

export const resolvers = {
  Query: {
    schema: () => targetSchema
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};

export const schema = fetchSchema("app", resolvers);
