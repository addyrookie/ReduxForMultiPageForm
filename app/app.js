//app/app.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import throttle from "lodash/throttle";

import { rootReducer, initialState } from "./reducers/reducers";

import InsightA from "./insight/InsightA";
import InsightB from "./insight/InsightB";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, 1000)
);

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={InsightA} />
					<Route path="/insightb" component={InsightB} />
				</Switch>
			</div>
		);
	}
}

export default hot(module)(App);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
