import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Schema, defaults } from "./graphql";
import App from "./components/App";

const store = createStore((state: Schema = defaults) => state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
