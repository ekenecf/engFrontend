import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import logInReducer from './Login'
import signUpReducer from './signUp'
import resetReducer from './Resetlink'
import userReducer from './user'
import textReducer from './text'
import forgotPasswordReducer from './ForgotPassword'
import newPasswordReducer from './NewPassword'

const rootReducer = combineReducers({
  logInReducer,
  signUpReducer,
  resetReducer,
  userReducer,
  textReducer,
  forgotPasswordReducer,
  newPasswordReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
