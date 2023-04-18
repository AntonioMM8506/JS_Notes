import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Import all reducers created
import reducers from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))
