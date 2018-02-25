import * as React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { devToolsEnhancer } from "redux-devtools-extension";

import { Graph, defaults, resolvers } from "./graphql";
import { Action } from "./types/generated";

import App from "./components/App";

const reducer = (state: Graph = defaults, action: Action) => {
  return resolvers.Mutation.increment(state);
};

const store = createStore(
  reducer,
  devToolsEnhancer({
    name: "App"
  })
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
