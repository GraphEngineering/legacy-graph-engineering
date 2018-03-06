import { DocumentNode, separateOperations } from "graphql";

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
