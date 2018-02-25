import * as React from "react";
import { Dispatch, connect } from "react-redux";

import { Schema } from "../graphql";

const mapStateToProps = (state: Schema) => state;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  Increment: () => dispatch({ type: "Increment" })
});

export type GraphQLComponent<
  Query = {},
  Mutation = {}
> = React.StatelessComponent<{
  query: { App: Query };
  mutation: { Increment: Dispatch<Mutation> };
}>;

export const withGraphQL = <Query = {}, Mutation = {}>(
  component: React.StatelessComponent<any>,
  graphQL: { query: Query; mutation: Mutation }
) => connect(mapStateToProps, mapDispatchToProps)(component);
