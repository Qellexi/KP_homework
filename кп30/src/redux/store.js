import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // 
import { swapiReducer } from './reducers';

const store = createStore(swapiReducer, applyMiddleware(thunk));

export default store;
