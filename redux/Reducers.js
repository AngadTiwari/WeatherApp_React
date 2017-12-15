import { ACTION_TYPE, selectDrawerOption, selectCity } from './Actions'
const {drawerOption, city} = ACTION_TYPE;
const initialState = {
  appData: {
    option: "option_weather",
    city: "indore"
  }
}

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case drawerOption:
      return Object.assign({...state}, {appData: Object.assign({...state.appData}, {option: action.option})});
    case city:
      return Object.assign({...state}, {appData: Object.assign({...state.appData}, {city: action.city})});
    default:
      return state
  }
}

export default weatherReducer
