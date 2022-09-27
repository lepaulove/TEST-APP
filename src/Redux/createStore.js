import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'

import rootReducer from './rootReducer'

export const middlewares = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default {
    store, 
    persistor
}