import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // its a component
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';

import App from './components/App';
import reducers from './reducers/index'; 

const store = createStore(reducers, applyMiddleware(thunk)); 
//rarley interact with the store .... only if doing advance this
ReactDOM.render(
 <Provider store={store}> 
  <App />
</Provider>,
 
 document.querySelector('#root')
 
 );