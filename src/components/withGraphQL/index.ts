import * as React from "react";
import { connect } from "react-redux";
import { DocumentNode } from "graphql";

import { groupOperationDocuments } from "./groupOperationDocuments";
import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";

export const withGraphQL = <Operations>(
  documentAST: DocumentNode,
  component: React.StatelessComponent<Operations>
) => {
  const { queries, mutations } = groupOperationDocuments(documentAST);

  component.displayName = Object.keys({ ...queries, ...mutations }).join(",");

  const wrapper = connect(
    mapStateToProps(queries),
    mapDispatchToProps(mutations)
  );

  // `any` is needed since the document isn't known at build-time
  return wrapper(component as any);
};
