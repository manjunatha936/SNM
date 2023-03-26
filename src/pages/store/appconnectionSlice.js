import { createSlice } from "@reduxjs/toolkit";
export const ConnectionStepSlice = createSlice({
    name: "AppStep",
    initialState: {
      Appstep: {
       step: 0,
       connectionlist: false,
      },
    },
 
  reducers: {
    handleStepData: (state, actionObj) => {
      const {
        payload: { key, value },
      } = actionObj;
      state.Appstep[key] = value;
    },
  },
});
