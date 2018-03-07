import * as React from "react";
import gql from "graphql-tag";

import withGraphQL from "./withGraphQL";
import Operations from "../generated/App";

import Schema from "./Schema";

export default withGraphQL<Operations>(
  gql`
    query App {
      count
      fragmentTest {
        ...Field
      }
    }

    fragment Field on FragmentTest {
      field
    }

    mutation Increment {
      increment
    }
  `,
  ({ App: { data }, Increment }) => (
    <div>
      <Schema />
      <h1 onClick={Increment}>{data && data.count}</h1>
      <p>{data && data.fragmentTest.field}</p>
    </div>
  )
);
