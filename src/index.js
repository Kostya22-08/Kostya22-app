import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/data';

import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers/index"

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
