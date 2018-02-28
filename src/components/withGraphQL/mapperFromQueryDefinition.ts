import {
  GraphQLSchema,
  ExecutionResult,
  OperationDefinitionNode,
  print,
  graphqlSync
} from "graphql";

declare module "graphql" {
  // undefined in @types/graphql
  export const graphqlSync: (
    schema: GraphQLSchema,
    source: string,
    rootValue: {}
  ) => ExecutionResult;
}

import { Graph, schema } from "../../graphql";

export type QueryMapper<Query> = (state: Graph) => QueryProps<Query>;

export interface QueryProps<Query> {
  query: QueryExecutionResult<Query>;
}

interface QueryExecutionResult<Query> extends ExecutionResult {
  data?: Query;
}

export const mapperFromQueryDefinition = <Query>(
  definition: OperationDefinitionNode
): QueryMapper<Query> => {
  const source = print(definition);
  return state => ({
    query: graphqlSync(schema, source, state) as QueryExecutionResult<Query>
  });
};
