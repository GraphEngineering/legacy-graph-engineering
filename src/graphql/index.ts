import gql from "graphql-tag";

export interface Graph {
  count: number;
}

export const defaults: Graph = {
  count: 0
};

const query = (graph: Graph, document: any) => graph.count;

export const resolvers = {
  Mutation: {
    increment: (graph: Graph): Graph => {
      const count = query(
        graph,
        gql`
          query Count {
            count
          }
        `
      );

      return {
        ...graph,
        count: count + 1
      };
    }
  }
};
