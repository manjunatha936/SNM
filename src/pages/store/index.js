import { configureStore } from "@reduxjs/toolkit";

import { ConnectionStepSlice } from "./appconnectionSlice";

// config the store
const store = configureStore({
  reducer: {
  
    Appstep: ConnectionStepSlice.reducer,
  
  },
});

// export default the store
export default store;

// export the action

export const AppStepAction = ConnectionStepSlice.actions;
