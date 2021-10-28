import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reposReducer from "./reposReducer";
import thunk from 'redux-thunk';

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const rootReducer = combineReducers({
  repos: reposReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));