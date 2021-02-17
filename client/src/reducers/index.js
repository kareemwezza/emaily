import { combineReducers } from "redux";
// import the reducer which hold the data of the form under the name of (any name)
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveyReducer";

// key value of the store should be form to get accessed easily
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});
