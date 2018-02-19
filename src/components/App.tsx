import * as React from "react";
import { StatelessComponent } from "react";

import { graphql, QueryProps } from "react-apollo";
import gql from "graphql-tag";
import Graph from "./graph";
import data from "./graph/testData";

interface Props {
  name: string;
}

type Response = QueryProps & {
  data: { message: string };
};

const App: StatelessComponent<Response> = props => (
  <div>
    <div>{props.data.message}</div>
    <Graph
      width={window.screen.availWidth}
      height={window.screen.availHeight}
      graph={data}
    />
  </div>
);

const query = gql`
  query($name: String!) {
    message(name: $name) @client
  }
`;

export default graphql<Response, Props, Response>(query, {
  options: props => ({ variables: { name: props.name } })
})(App);
