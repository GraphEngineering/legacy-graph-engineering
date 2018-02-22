import * as React from "react";
import gql from "graphql-tag";

import { SchemaEditorQuery as Data } from "../types/generated/operations";

const query = gql`
  query SchemaEditor {
    schema {
      queryType {
        name
      }
    }
  }
`;

const SchemaEditor: React.StatelessComponent<Data> = props => (
  <div>{JSON.stringify(props)}</div>
);

export default SchemaEditor;
