import { useAppSelector } from "@/redux";
import { Box, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { isLogin, user } = useAppSelector(
    (state: { auth: { isLogin: any; user: { role: string } } }) => ({
      isLogin: state.auth.isLogin,
      user: state.auth.user,
    })
  );

  if (isLogin) {
    if (user.role === "Buyer") {
      return <Navigate to="/" />;
    } else if (user.role === "Seller") {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  return (
    <Container>
      <Box height={"100vh"}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
