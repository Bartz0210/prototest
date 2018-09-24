import * as React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";

import Application from "./routes";
import rootReducer from "./store";
import { createStore } from "redux";

const element = document.getElementById("app");
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <HashRouter>
      <Application />
    </HashRouter>
  </Provider>,
  element
);
