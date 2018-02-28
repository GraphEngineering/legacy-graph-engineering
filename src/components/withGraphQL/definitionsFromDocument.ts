import { DocumentNode, OperationDefinitionNode } from "graphql";

interface Definitions {
  queryDefinition?: OperationDefinitionNode;
  mutationDefinition?: OperationDefinitionNode;
}

export default (document: DocumentNode): Definitions =>
  document.definitions.reduce((definitions, definition) => {
    if (definition.kind !== "OperationDefinition") {
      return definitions;
    }

    switch (definition.operation) {
      case "query":
        return { ...definitions, queryDefinition: definition };
      case "mutation":
        return { ...definitions, mutationDefinition: definition };
      default:
        return definitions;
    }
  }, {});
