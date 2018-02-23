import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import State from "./types/state";
import App from "./components/App";

const store = createStore(
  (state: State = { message: "Hello, World!" }) => state
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
