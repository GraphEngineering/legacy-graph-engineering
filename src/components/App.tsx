import * as React from "react";
import gql from "graphql-tag";

import SchemaEditor from "./SchemaEditor";

import { GraphComponent, withGraphQL } from "./withGraphQL";
import { AppQuery as Data, AppQueryVariables as Props } from "../graphql";

const query = gql`
  query App($name: String!) {
    message(name: $name)
  }
`;

const App: GraphComponent<Props, Data> = props =>
  !props.data ? (
    <div>Loading...</div>
  ) : (
    <div>
      {props.data.message}
      <SchemaEditor />
    </div>
  );

export default withGraphQL(App, query);
