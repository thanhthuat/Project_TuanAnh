import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "./reducers/course";
import me from "./reducers/me";
import thunk from "redux-thunk";

const reducer = combineReducers({
  course,
  me,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
