import { combineReducers } from 'redux';
import loginReducer from './login-reducer';



const rootReducer = combineReducers({
  user: loginReducer,
})

export default rootReducer