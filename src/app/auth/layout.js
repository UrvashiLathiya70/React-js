"use client";
import AuthLayout from "@/layouts/auth-layout";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthLayout>{children}</AuthLayout>
      </PersistGate>
    </Provider>
  );
}
