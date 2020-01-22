import { checkPropTypes } from "prop-types";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "../src/createStore";
import rootReducers from "../src/reducers";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkType = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsError;
};

export const testStore = initialState => {
  const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreMiddleware(rootReducers, initialState);
};
