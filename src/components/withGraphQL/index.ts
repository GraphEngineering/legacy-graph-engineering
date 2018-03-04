import * as React from "react";
import { connect } from "react-redux";
import { DocumentNode } from "graphql";

import {
  QueryProps,
  QueryMapper,
  mapperFromQueryDefinition
} from "./mapperFromQueryDefinition";

import {
  MutationProps,
  MutationMapper,
  mapperFromMutationDefinition
} from "./mapperFromMutationDefinition";

import definitionsFromDocument from "./definitionsFromDocument";

export type GraphQLComponent<
  Query = {},
  Mutation = {}
> = React.StatelessComponent<GraphQLComponentProps<Query, Mutation>>;

export type GraphQLComponentProps<Query, Mutation> = QueryProps<Query> &
  MutationProps<Mutation>;

export const withGraphQL = <Query = {}, Mutation = {}>(
  component: GraphQLComponent<Query, Mutation>
) => (document: DocumentNode) => {
  const { queryDefinition, mutationDefinition } = definitionsFromDocument(
    document
  );

  const mapStateToProps =
    queryDefinition && mapperFromQueryDefinition<Query>(queryDefinition);

  const mapDispatchToProps =
    mutationDefinition &&
    mapperFromMutationDefinition<Mutation>(mutationDefinition);

  return connect(
    mapStateToProps as QueryMapper<Query>,
    mapDispatchToProps as MutationMapper<Mutation>
  )(component);
};
