import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { orderProcess } from "./order-process/order-process";
import { questProcess } from "./quest-process/quest-process";

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questProcess.reducer,
  [NameSpace.Order]: orderProcess.reducer
});
