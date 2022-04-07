import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export function RestrictedRoute() {
  const { user } = useAuth();
  const location = useLocation();
  const nowGoTo = location?.state?.from?.pathname ?? "/";
  return user ? (
    <Navigate to={nowGoTo} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
