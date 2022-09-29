import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { postOrderAction } from "../api-actions";

export type OrderProcess = {
  isOrderPosted: boolean
}
const initialState: OrderProcess = {
  isOrderPosted: true,
};

export const orderProcess = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postOrderAction.pending, (state) => {
        state.isOrderPosted = false;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.isOrderPosted = true;
      })
  }
})
