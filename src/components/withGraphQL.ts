import * as React from "react";
import { Dispatch, connect } from "react-redux";

import { DocumentNode, OperationDefinitionNode, SelectionNode } from "graphql";

import { Graph } from "../graphql";

interface ReduxMappers {
  mapStateToProps: (state: Graph) => { query: any };
  mapDispatchToProps: (dispatch: Dispatch<Graph>) => { mutation: () => any };
}

interface Fields {
  [name: string]: any;
}

const mapOperationsToProps = (document: DocumentNode): ReduxMappers =>
  document.definitions.reduce(
    (operations: Operations, definition: OperationDefinitionNode) =>
      definition.operation === "query"
        ? {
            ...operations,
            mapStateToProps: (state: Graph) => ({
              query: definition.selectionSet.selections.reduce(
                (fields: Fields, selection: SelectionNode) => ({
                  ...fields,
                  [definition.selectionSet.selections[0].name.value]:
                    state[definition.selectionSet.selections[0].name.value]
                }),
                {}
              )
            })
          }
        : {
            ...operations,
            mapDispatchToProps: (dispatch: Dispatch<Graph>) => ({
              mutation: () => dispatch({ type: "Increment" })
            })
          },
    {}
  );

export type GraphQLComponent<Operations> = React.StatelessComponent<Operations>;

export const withGraphQL = <Operations>(
  component: GraphQLComponent<Operations>
) => (operationsDocument: DocumentNode) => {
  const { mapStateToProps, mapDispatchToProps } = mapOperationsToProps(
    operationsDocument
  );

  return connect(mapStateToProps, mapDispatchToProps)(component);
};
