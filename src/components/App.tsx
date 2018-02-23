import * as React from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";

import { AppQuery as Props } from "../types/generated/operations";
import State from "../types/state";

const query = gql`
  query App {
    message
  }
`;

const App: React.StatelessComponent<Props> = props => <h1>{props.message}</h1>;

const mapStateToProps = (state: State) => state;

export default connect(mapStateToProps)(App);
