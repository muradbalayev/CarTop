import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import { userApi } from "./services/adminUserApi";
import { ordersApi } from "./services/adminOrderApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(ordersApi.middleware)
});

setupListeners(store.dispatch);
