import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import logInReducer from "./Login";
import signUpReducer from "./signUp";
import resetReducer from "./Resetlink";
import userReducer from "./user";
import textReducer from "./text";
import forgotPasswordReducer from "./ForgotPassword";

const rootReducer = combineReducers({
  logInReducer,
  signUpReducer,
  resetReducer,
  userReducer,
  textReducer,
  forgotPasswordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
