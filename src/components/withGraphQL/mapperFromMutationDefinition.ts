import { Dispatch } from "react-redux";

import { OperationDefinitionNode, print } from "graphql";

export interface MutationProps<Mutation> {
  mutation: Mutation;
}

export type MutationMapper<Mutation> = (
  dispatch: Dispatch<any>
) => MutationProps<Mutation>;

export const mapperFromMutationDefinition = <Mutation>(
  definition: OperationDefinitionNode
): MutationMapper<Mutation> => {
  const mutationDispatcher = (dispatch: Dispatch<any>) =>
    definition.selectionSet.selections.reduce((mutations, selection) => {
      if (
        selection.kind === "FragmentSpread" ||
        selection.kind === "InlineFragment"
      ) {
        return mutations;
      }

      const source = print(definition);
      return {
        ...mutations,
        [selection.name.value]: () => dispatch({ type: source })
      };
    }, {});

  return dispatch => ({
    mutation: mutationDispatcher(dispatch) as Mutation
  });
};
