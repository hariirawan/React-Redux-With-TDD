import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middleware = [ReduxThunk];

export const createStoreMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const store = createStoreMiddleware(RootReducer);
