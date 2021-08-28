import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import history from './history';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    console.log('Entro');
    return <div>Hello!</div>;
  }
}

class GoodBye extends React.Component {
  render() {
    return <div>Goodbye!</div>;
  }
}
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        Header
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={GoodBye} />
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
