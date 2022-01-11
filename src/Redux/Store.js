import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./Reducers";
import Reactotron from "../Configs/ReactotronConfig"; // hash this in release

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["tripsState"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  // compose(applyMiddleware(thunk)),
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

const persistor = persistStore(store);
export { store, persistor };
