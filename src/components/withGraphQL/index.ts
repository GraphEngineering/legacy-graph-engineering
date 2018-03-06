import * as React from "react";
import { connect } from "react-redux";

import {
  DocumentNode,
  ExecutionResult,
  separateOperations,
  print,
  graphqlSync
} from "graphql";

import { schema } from "../../graphql";

export type GraphQLComponent<Operations = {}> = React.StatelessComponent<
  Operations
>;

export const withGraphQL = <Operations>(
  documentAST: DocumentNode,
  component: GraphQLComponent<Operations>
) => {
  const { queries, mutations } = groupOperationDocuments(documentAST);

  return connect(mapStateToProps(queries), mapDispatchToProps(mutations))(
    component
  );
};

interface GroupedOperationDocuments {
  queries: NamedOperationDocuments;
  mutations: NamedOperationDocuments;
}

export interface NamedOperationDocuments {
  [operationName: string]: DocumentNode;
}

export const groupOperationDocuments = (
  documentAST: DocumentNode
): GroupedOperationDocuments => {
  const documents = separateOperations(documentAST);
  return Object.keys(documents).reduce(
    (groupedDocuments, operationName) => {
      const document = documents[operationName];
      const documentGroup = document.definitions
        .map(
          definition =>
            definition.kind === "OperationDefinition" &&
            definition.operation === "query"
        )
        .includes(true)
        ? "queries"
        : "mutations";

      return {
        ...groupedDocuments,
        [documentGroup]: {
          ...groupedDocuments[documentGroup],
          [operationName]: document
        }
      };
    },
    {
      queries: {},
      mutations: {}
    }
  );
};

type MapStateToProps = (
  state: any
) => {
  [queryName: string]: ExecutionResult;
};

const mapStateToProps = (queries: NamedOperationDocuments): MapStateToProps => {
  const namedQuerySources = Object.entries(queries).reduce(
    (sources, [name, document]) => ({
      ...sources,
      [name]: print(document)
    }),
    {}
  );

  return state =>
    Object.entries(namedQuerySources).reduce(
      (results, [name, source]) => ({
        ...results,
        [name]: graphqlSync(schema, source, state)
      }),
      {}
    );
};

const mapDispatchToProps = (
  mutations: NamedOperationDocuments
): { [mutationName: string]: () => any } =>
  Object.keys(mutations).reduce(
    (actionCreators, mutationName) => ({
      ...actionCreators,
      [mutationName]: () => ({ type: mutationName })
    }),
    {}
  );
