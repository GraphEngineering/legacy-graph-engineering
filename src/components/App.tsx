import * as React from "react";
import { StatelessComponent } from "react";

import { graphql, QueryProps } from "react-apollo";
import gql from "graphql-tag";

interface InputProps {
  name: string;
}

const query = gql`
  query($name: String!) {
    message(name: $name)
  }
`;

interface Response {
  data: { message: string };
}

type ResponseProps = Response & QueryProps;

const App: StatelessComponent<ResponseProps> = ({ data: { message } }) => (
  <div>{message}</div>
);

export default graphql<Response, InputProps, ResponseProps>(query, {
  options: ({ name }) => ({
    variables: { name }
  })
})(App);
