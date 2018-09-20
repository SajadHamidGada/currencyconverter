import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Reducer from '../Reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}

export default createStore(Reducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);