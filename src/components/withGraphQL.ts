import * as React from "react";

import {
  MapStateToProps,
  MapDispatchToPropsFunction,
  connect
} from "react-redux";

import {
  DocumentNode,
  OperationDefinitionNode,
  DefinitionNode,
  ExecutionResult,
  SelectionNode,
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

import { makeExecutableSchema } from "graphql-tools";

import { Graph, schemaAST, resolvers } from "../graphql";
import { Action } from "redux";

export type GraphQLComponent<
  Query = {},
  Mutation = {}
> = React.StatelessComponent<
  { mutation: Mutation } & { query: ExecutionResult & { data: Query } }
>;

interface Definitions {
  queryDefinition?: OperationDefinitionNode & { operation: "query" };
  mutationDefinition?: OperationDefinitionNode & { operation: "mutation" };
}

export const withGraphQL = <Query, Mutation>(
  component: GraphQLComponent<Query, Mutation>
) => (operationsDocument: DocumentNode) => {
  const {
    queryDefinition,
    mutationDefinition
  }: Definitions = operationsDocument.definitions.reduce(
    (definitions: Definitions, definition: DefinitionNode) => {
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
    },
    {}
  );

  return connect(
    queryDefinition && mapStateToProps(queryDefinition),
    mutationDefinition && mapDispatchToProps(mutationDefinition)
  )(component);
};

const schema = makeExecutableSchema({
  typeDefs: schemaAST,
  resolvers
});

interface QueryProps {
  query: ExecutionResult;
}

const mapStateToProps = (
  operationDefinition: OperationDefinitionNode
): MapStateToProps<QueryProps, {}, Graph> => {
  const operation = print(operationDefinition);
  return state => ({
    query: graphqlSync(schema, operation, state)
  });
};

interface MutationProps {
  mutation: MutationFields;
}

export interface MutationFields {
  [fieldName: string]: () => Action;
}

const mapDispatchToProps = (
  operationDefinition: OperationDefinitionNode
): MapDispatchToPropsFunction<MutationProps, {}> => dispatch => ({
  mutation: operationDefinition.selectionSet.selections.reduce(
    (mutationFields: MutationFields, selection: SelectionNode) => {
      if (
        selection.kind === "FragmentSpread" ||
        selection.kind === "InlineFragment"
      ) {
        return mutationFields;
      }

      const mutation = print(operationDefinition);

      return {
        ...mutationFields,
        [selection.name.value]: () => dispatch({ type: mutation })
      };
    },
    {}
  )
});
