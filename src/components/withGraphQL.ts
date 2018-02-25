import * as React from "react";
import { Dispatch, connect } from "react-redux";

import { Graph } from "../graphql";

const mapStateToProps = (state: Graph) => ({
  query: { App: { count: state.count } }
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  mutation: {
    Increment: () => dispatch({ type: "Increment" })
  }
});

export type GraphQLComponent<
  Query = {},
  Mutation = {}
> = React.StatelessComponent<{
  query: { App: Query };
  mutation: { Increment: Dispatch<Mutation> };
}>;

export const withGraphQL = <Query = {}, Mutation = {}>(
  component: GraphQLComponent<Query, Mutation>,
  graphQLOperations: { query?: Query; mutation?: Mutation }
) => connect(mapStateToProps, mapDispatchToProps)(component);
