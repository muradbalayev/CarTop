import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./client/HomePage";
import UserLayout from "../layout/client/UserLayout";
import AdminUsersPage from "./admin/AdminUser/AdminUsersPage";
import AdminLayout from "../layout/admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import SalesReportPage from "./admin/SalesReport/SalesReportPage";
import AdminOrdersPage from "./admin/AdminOrder/AdminOrdersPage";
import AdminNotificationsPage from "./admin/Notifications/AdminNotificationsPage";
import AdminPostPage from "./admin/Posts/AdminPostPage";
import AdminPartnersPage from "./admin/Partners/AdminPartnersPage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import AuthInitializer from "../hooks/AuthInitializer";

const RouterApp = () => {
  return (
    <div>
      <AuthInitializer />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route
          path="/admin/login"
          element={
            <PublicRoute requiredRole="admin">
              <AdminLogin />
            </PublicRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SalesReportPage />} />
          <Route path="/admin/dashboard/users" element={<AdminUsersPage />} />
          <Route path="/admin/dashboard/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/dashboard/notifications"
            element={<AdminNotificationsPage />}
          />
          <Route path="/admin/dashboard/posts" element={<AdminPostPage />} />
          <Route
            path="/admin/dashboard/partners"
            element={<AdminPartnersPage />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterApp;
