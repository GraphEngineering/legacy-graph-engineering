import gql from "graphql-tag";
import * as React from "react";

import { AppQuery as Data, AppQueryVariables as Props } from "../graphql";
import { GraphComponent, withGraphQL } from "./withGraphQL";

const query = gql`
  query App($name: String!) {
    message(name: $name) @client
  }
`;

const App: GraphComponent<Props, Data> = props =>
  props.data ? <div>{props.data.message}</div> : <div>Loading...</div>;

export default withGraphQL(App, query);
