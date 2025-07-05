import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import { userApi } from "./services/adminUserApi";
import { ordersApi } from "./services/adminOrderApi";
import { notificationsApi } from "./services/adminNotificationsApi";
import { partnerApi } from "./services/adminPartnerApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(ordersApi.middleware)
      .concat(notificationsApi.middleware)
      .concat(partnerApi.middleware),
});

setupListeners(store.dispatch);
