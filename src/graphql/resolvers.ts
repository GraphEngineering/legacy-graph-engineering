import { Graph } from "./graph";
import {IntrospectionSchema} from "graphql/utilities/introspectionQuery";

export default {
  Query: {
      schema: (): any => ({
          queryType: {
              name: "oh wow"
          }
      })
  },
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
