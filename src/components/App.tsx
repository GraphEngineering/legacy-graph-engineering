import * as React from "react";

import { graphql, QueryProps, ChildProps } from "react-apollo";
import gql from "graphql-tag";

type Props = {
  name: string;
};

interface Data {
  message: string;
}

const query = gql`
  query($name: String!) {
    message(name: $name) @client
  }
`;

export default graphql<Data, Props>(query, {
  options: props => ({ variables: props })
})(props => <div>{props.data.message}</div>);
