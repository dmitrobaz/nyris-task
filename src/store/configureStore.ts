import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const devTools = composeWithDevTools(applyMiddleware(sagaMiddleware));
const configureStore = createStore(rootReducer, {}, devTools);
export { configureStore, sagaMiddleware };
