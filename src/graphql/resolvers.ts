import { Graph } from "./graph";

export default {
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
