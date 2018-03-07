import * as React from "react";
import { connect } from "react-redux";
import { DocumentNode } from "graphql";

import { groupOperationDocuments } from "./groupOperationDocuments";
import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";

export default <Operations>(
  documentAST: DocumentNode,
  component: React.StatelessComponent<Operations>
) => {
  const { queries, mutations } = groupOperationDocuments(documentAST);

  const wrapper = connect(
    mapStateToProps(queries),
    mapDispatchToProps(mutations)
  );

  // `any` is needed since the document isn't known at build-time
  return wrapper(component as any);
};
