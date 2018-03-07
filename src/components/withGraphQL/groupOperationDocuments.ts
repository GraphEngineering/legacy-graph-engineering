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
): GroupedOperationDocuments =>
  Object.entries(separateOperations(documentAST)).reduce(
    (groupedOperationDocuments, [operationName, document]) => {
      if (operationName === "") {
        return groupedOperationDocuments;
      }

      const operationGroup = isOperationDocumentOfType("query", document)
        ? "queries"
        : isOperationDocumentOfType("mutation", document)
          ? "mutations"
          : undefined;

      if (!operationGroup) {
        return groupedOperationDocuments;
      }

      return {
        ...groupedOperationDocuments,
        [operationGroup]: {
          ...groupedOperationDocuments[operationGroup],
          [operationName]: document
        }
      };
    },
    {
      queries: {},
      mutations: {}
    }
  );

const isOperationDocumentOfType = (
  operationType: "query" | "mutation",
  document: DocumentNode
) =>
  document.definitions
    .map(
      definition =>
        definition.kind === "OperationDefinition" &&
        definition.operation === operationType
    )
    .includes(true);
