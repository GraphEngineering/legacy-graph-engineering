import * as React from "react";

import { Action, Dispatch } from "redux";
import { connect } from "react-redux";

import {
  DocumentNode,
  OperationDefinitionNode,
  ExecutionResult,
  graphqlSync,
  print
} from "graphql";

declare module "graphql" {
  // undefined in @types/graphql
  export const graphqlSync: (
    schema: any,
    source: any,
    rootValue: any
  ) => ExecutionResult;
}

import { Graph, schema } from "../graphql";

export type GraphQLComponent<
  Query = {},
  Mutation = {}
> = React.StatelessComponent<
  { mutation: Mutation } & { query: ExecutionResult & { data: Query } }
>;

export const withGraphQL = <Query, Mutation>(
  component: GraphQLComponent<Query, Mutation>
) => (document: DocumentNode) => {
  const { queryDefinition, mutationDefinition } = definitionsFromDocument(
    document
  );

  const mapStateToProps =
    queryDefinition && mapperFromQueryDefinition(queryDefinition);

  const mapDispatchToProps =
    mutationDefinition && mapperFromMutationDefinition(mutationDefinition);

  return connect(mapStateToProps, mapDispatchToProps)(component);
};

interface Definitions {
  queryDefinition?: OperationDefinitionNode;
  mutationDefinition?: OperationDefinitionNode;
}

const definitionsFromDocument = (document: DocumentNode): Definitions =>
  document.definitions.reduce((definitions, definition) => {
    if (definition.kind !== "OperationDefinition") {
      return definitions;
    }

    switch (definition.operation) {
      case "query":
        return { ...definitions, queryDefinition: definition };
      case "mutation":
        return { ...definitions, mutationDefinition: definition };
    }

    return definitions;
  }, {});

type QueryMapper = (
  state: Graph
) => {
  query: ExecutionResult;
};

const mapperFromQueryDefinition = (
  definition: OperationDefinitionNode
): QueryMapper => {
  const operation = print(definition);
  return state => ({
    query: graphqlSync(schema, operation, state)
  });
};

type MutationMapper = (
  dispatch: Dispatch<any>
) => {
  mutation: {
    [fieldName: string]: () => Action;
  };
};

const mapperFromMutationDefinition = (
  definition: OperationDefinitionNode
): MutationMapper => dispatch => ({
  mutation: definition.selectionSet.selections.reduce(
    (mutations, selection) => {
      if (
        selection.kind === "FragmentSpread" ||
        selection.kind === "InlineFragment"
      ) {
        return mutations;
      }

      const mutation = print(definition);

      return {
        ...mutations,
        [selection.name.value]: () => dispatch({ type: mutation })
      };
    },
    {}
  )
});
