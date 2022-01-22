import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./pages/home/homeSlice";

const staticReducers = {
  home: homeReducer,
};
const store = configureStore({
  reducer: {
    ...staticReducers,
  },
});

store.injectReducer = (key, asyncReducer) => {
  console.log(`Injecting ${key}Slice Dynamically`);
  store.asyncReducers = {};
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(
    combineReducers({
      ...staticReducers,
      ...store.asyncReducers,
    })
  );
};

export default store;