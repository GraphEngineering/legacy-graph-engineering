import * as React from "react";
import { Dispatch, connect } from "react-redux";

import { DocumentNode } from "graphql";

import { Graph } from "../graphql";
import { Action } from "../types/generated";

import Operations from "../generated/App";

const mapStateToProps = (document: DocumentNode) => (state: Graph) => ({
  query: { App: { count: state.count } }
});

const mapDispatchToProps = (document: DocumentNode) => (
  dispatch: Dispatch<Graph>
) => ({
  mutation: {
    Increment: () => dispatch({ type: "Increment" })
  }
});

export type GraphQLComponent = React.StatelessComponent<Operations>;

export const withGraphQL = (component: GraphQLComponent) => (
  document: DocumentNode
) =>
  connect(mapStateToProps(document), mapDispatchToProps(document))(component);
