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
  export const graphqlSync: any; // undefined in @types/graphql
}

import { makeExecutableSchema } from "graphql-tools";

import { Graph, schemaAST, resolvers } from "../graphql";

export type GraphQLComponent<Operations> = React.StatelessComponent<
  Operations & { query: ExecutionResult }
>;

export const withGraphQL = <Operations>(
  component: GraphQLComponent<Operations>
) => (operationsDocument: DocumentNode) => {
  interface OperationDefinitions {
    queryDefinition?: OperationDefinitionNode & { operation: "query" };
    mutationDefinition?: OperationDefinitionNode & { operation: "mutation" };
  }

  const {
    queryDefinition,
    mutationDefinition
  }: OperationDefinitions = operationsDocument.definitions.reduce(
    (definitions: OperationDefinitions, definition: DefinitionNode) => {
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
    mutationDefinition && (mapDispatchToProps(mutationDefinition) as any) // TODO
  )(component);
};

const schema = makeExecutableSchema({
  typeDefs: schemaAST,
  resolvers
});

const mapStateToProps = (
  operationDefinition: OperationDefinitionNode
): MapStateToProps<{ query: ExecutionResult }, any, Graph> => {
  const operation = print(operationDefinition);
  return state => ({
    query: graphqlSync(schema, operation, state)
  });
};

interface MutationProps {
  mutation: MutationFields;
}

export interface MutationFields {
  [fieldName: string]: () => any;
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
