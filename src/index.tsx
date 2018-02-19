import * as React from "react";
import { render } from "react-dom";

import { ApolloClient } from "apollo-client";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { print } from "graphql";

import { schema, defaults, resolvers } from "./schema";

import App from "./components/App";

const clientState = {
  typeDefs: print(schema),
  defaults,
  resolvers
};

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: withClientState({ ...clientState, cache }),
  cache
});

render(
  <ApolloProvider client={client}>
    <App name="Todd" />
  </ApolloProvider>,
  document.getElementById("app")
);
