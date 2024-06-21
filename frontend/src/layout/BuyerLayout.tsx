import { useAppSelector } from "@/redux";
import { Container } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const BuyerLayout: React.FC = () => {
  const isLogin = useAppSelector(
    (state: { auth: { isLogin: any } }) => state.auth.isLogin
  );

  if (!isLogin) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Outlet />;
};

export default BuyerLayout;
