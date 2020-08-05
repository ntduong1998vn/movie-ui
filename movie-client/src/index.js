import React from "react";
import ReactDOM from "react-dom";
import App from "../src/containers/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

import "./index.css";
import "./assets/css/bootstrap-reboot.min.css";
import "./assets/css/bootstrap-grid.min.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/main.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
