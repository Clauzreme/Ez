import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas/RootSaga'
import rootReducer from './RootReducer'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['muiLists', 'feedbacks'],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createEnhancedStore = composeEnhancers(applyMiddleware(sagaMiddleware))(
  createStore,
)

export const store = createEnhancedStore(persistedReducer)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
