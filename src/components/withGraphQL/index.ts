import * as React from "react";
import { connect } from "react-redux";
import { DocumentNode } from "graphql";

export type GraphQLComponent<Operations = {}> = React.StatelessComponent<
  Operations
>;

export const withGraphQL = <Operations = {}>(
  document: DocumentNode,
  component: GraphQLComponent<Operations>
) => {
  // const documentWithoutMutations = removeMutations(document);

  // const mapStateToProps =
  //   documentWithoutMutations &&
  //   mapStateToPropsFrom<Query>(documentWithoutMutations);

  // const mapDispatchToProps =
  //   mutation && dispatchToPropsFromMutationDefinition<Mutation>(mutation);

  return connect()(component);
  // mapStateToProps as QueryMapper<Query>,
  // mapDispatchToProps as MutationMapper<Mutation>
};

const removeMutations = (document: DocumentNode): DocumentNode => ({
  ...document,
  definitions: document.definitions.reduce(
    (definitions, definition) =>
      definition.operation !== "mutation"
        ? [...definitions, definition]
        : definitions,
    []
  )
});
