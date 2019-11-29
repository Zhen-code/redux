import {applyMiddleware,createStore,compose} from 'redux'
import reducers from './reducers.js'
// import thunk from 'redux-thunk'
import creactSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer=composeEnhancers(applyMiddleware(thunk))
const sagaMiddleware=creactSagaMiddleware()
const enhancer=composeEnhancers(applyMiddleware(sagaMiddleware))
const store =createStore(reducers,enhancer)
sagaMiddleware.run(mySagas)
export default store