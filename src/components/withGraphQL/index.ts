import * as React from "react";
import { connect } from "react-redux";
import { DocumentNode, DefinitionNode, OperationDefinitionNode } from "graphql";
import { Dispatch } from "redux";

export type GraphQLComponent<Operations = {}> = React.StatelessComponent<
  Operations
>;

export const withGraphQL = <Operations>(
  document: DocumentNode,
  component: GraphQLComponent<Operations>
) => {
  const documentWithoutMutations = removeOperationType("mutation", document);
  const documentWithoutQueries = removeOperationType("query", document);

  const mapStateToProps = documentToStateMapper(documentWithoutMutations);
  const mapDispatchToProps = documentToDispatchMapper(documentWithoutQueries);

  return connect(
    mapStateToProps as QueryMapper<Operations>,
    mapDispatchToProps as MutationMapper<Operations>
  )(component);
};

const removeOperationType = (
  operation: "query" | "mutation",
  document: DocumentNode
): DocumentNode => ({
  ...document,
  definitions: document.definitions.filter(
    definition =>
      isOperationDefinition(definition) && definition.operation !== operation
  )
});

export type DispatchMapper = (
  dispatch: Dispatch<any>
) => { [mutationName: string]: () => any };

const documentToDispatchMapper = (document: DocumentNode): DispatchMapper => {
  const namedMutations = document.definitions.filter(
    definition =>
      isOperationDefinition(definition) &&
      definition.operation === "mutation" &&
      definition.name
  );

  namedMutations.reduce(
    (dispatchers, mutation) => ({
      ...dispatchers
    }),
    {}
  );

  return dispatch => ({
    mutation: mutationDispatcher(dispatch) as Mutation
  });
};

const isOperationDefinition = (
  definition: DefinitionNode
): definition is OperationDefinitionNode =>
  definition.kind === "OperationDefinition";

// export type MutationMapper<Mutation> = (
//   dispatch: Dispatch<any>
// ) => MutationProps<Mutation>;

// export interface MutationProps<Mutation> {
//   mutation: Mutation;
// }

// export const mapperFromMutationDefinitions = <Mutation>(
//   definition: OperationDefinitionNode
// ): MutationMapper<Mutation> => {
//   const mutationDispatcher = (dispatch: Dispatch<any>) =>
//     definition.selectionSet.selections.reduce((mutations, selection) => {
//       if (
//         selection.kind === "FragmentSpread" ||
//         selection.kind === "InlineFragment"
//       ) {
//         return mutations;
//       }

//       const source = print(definition);
//       return {
//         ...mutations,
//         [selection.name.value]: () => dispatch({ type: source })
//       };
//     }, {});

//   return dispatch => ({
//     mutation: mutationDispatcher(dispatch) as Mutation
//   });
// };
