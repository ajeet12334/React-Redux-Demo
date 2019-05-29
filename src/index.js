import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Step 1
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer';

//Step 2
const store = createStore(reducer);

//Step 3 : Wrap top component within Provider tag with store property
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
