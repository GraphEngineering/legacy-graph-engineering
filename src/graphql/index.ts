import { fetchSchema } from "./utils";

const targetSchema = fetchSchema("target");

// this interface should eventually be generated
export interface Graph {
  count: number;
  fragmentTest: {
    field: string;
  };
}

export const defaults: Graph = {
  count: 0,
  fragmentTest: {
    field: "Go!"
  }
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
