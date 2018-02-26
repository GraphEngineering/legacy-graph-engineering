// import { graphqlSync } from "graphql";
// import gql from "graphql-tag";

// tslint:disable-next-line
export const schemaAST = require("./schema.graphql");
declare const require: any;

export interface Graph {
  count: number;
}

export const defaults: Graph = {
  count: 0
};

export const resolvers = {
  Mutation: {
    increment: (graph: Graph): Graph => ({
      ...graph,
      count: graph.count + 1
    })
  }
};
