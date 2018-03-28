import { DocumentNode, separateOperations } from "graphql";

interface GroupedOperationDocuments {
  queries: NamedOperationDocuments;
  mutations: NamedOperationDocuments;
}

interface NamedOperationDocuments {
  [operationName: string]: DocumentNode;
}

export default (documentAST: DocumentNode): GroupedOperationDocuments =>
  Object.entries(separateOperations(documentAST)).reduce(
    (previous, [operationName, document]) => {
      if (operationName === "") {
        return previous;
      }

      const operationGroup = isOperationDocumentOfType("query", document)
        ? "queries"
        : isOperationDocumentOfType("mutation", document)
          ? "mutations"
          : undefined;

      if (!operationGroup) {
        return previous;
      }

      return {
        ...previous,
        [operationGroup]: {
          ...previous[operationGroup],
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
      it => it.kind === "OperationDefinition" && it.operation === operationType
    )
    .includes(true);
