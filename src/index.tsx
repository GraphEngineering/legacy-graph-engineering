import * as React from "react";
import { render } from "react-dom";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { withClientState } from "apollo-link-state";
import { print } from "graphql";
import { ApolloProvider } from "react-apollo";

import { schema, defaults, resolvers } from "./graphql";

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
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
