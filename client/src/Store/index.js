import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./Slices/authSlice";
import persistStore from "redux-persist/es/persistStore";

// redux persist
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  authSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
// create store
const store = configureStore({
  // meet all slices to store
  reducer: { persistedReducer },
});

export const persistor = persistStore(store);
export default store;
