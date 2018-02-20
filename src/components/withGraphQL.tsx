import * as React from "react";
import { graphql, ChildProps, OperationOption } from "react-apollo";
import { DocumentNode } from "graphql";

export type GraphComponent<Props = {}, Data = {}> = React.ComponentType<
  ChildProps<Props, Data>
>;

export function withGraphQL<Props, Data>(
  component: GraphComponent<Props, Data>,
  document: DocumentNode,
  operationOptions?: OperationOption<Props, Data>
) {
  return graphql<Data, Props>(document, operationOptions)(component);
}
