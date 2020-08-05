import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import getAdventureReducer from './adventureData-reducer'



const rootReducer = combineReducers({
  user: loginReducer,
  adventure: getAdventureReducer
})

export default rootReducer