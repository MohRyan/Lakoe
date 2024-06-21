import { useAppSelector } from "@/redux";
import SideBar from "@/components/seller/SideBar";
import { Box, Container } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SellerLayout: React.FC = () => {
  const isLogin = useAppSelector(
    (state: { auth: { isLogin: any } }) => state.auth.isLogin
  );

  if (!isLogin) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 0.9 }}>
          <SideBar />
        </Box>
        <Box sx={{ flex: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default SellerLayout;
