import { createStore } from 'redux'
import { ACTION_TYPE, selectDrawerOption, selectCity } from './Actions'
import weatherReducer from './Reducers'

function initStore() {
  let store = createStore(weatherReducer)
  return store
}

export default initStore
