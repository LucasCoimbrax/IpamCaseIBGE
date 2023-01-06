import { configureStore, combineReducers } from "@reduxjs/toolkit";

import allStates from "./ducks/State/reducer";
import allCitys from "./ducks/City/reducer";

const reducer = combineReducers({ allStates, allCitys });

const store = configureStore({
  reducer,
});

export default store;
