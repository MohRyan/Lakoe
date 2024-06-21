/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Theme, useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import UnderlineButtonProps from "./UnderlineButtonProps";
import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { RootState, useAppSelector } from "@/redux";

const StyledBadge = styled(Badge)(({ theme }: { theme: Theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar: React.FC = () => {
  const theme = useTheme();

  const [activeButton, setActiveButton] = useState<string | null>(null);
  const handleClickButton = (button: string) => {
    setActiveButton(button);
  };

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingY: "1%",
          paddingX: "10%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontFamily: "Merriweather, serif",
            fontSize: "25px",
          }}
        >
          Lakoe
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            fontFamily: "Merriweather, serif",
          }}
        >
          <Link to="/">
            <UnderlineButtonProps
              label="Home"
              isActive={activeButton === "home"}
              onClick={() => handleClickButton("home")}
            />
          </Link>
          <Link to="/product">
            <UnderlineButtonProps
              label="Product"
              isActive={activeButton === "contact"}
              onClick={() => handleClickButton("contact")}
            />
          </Link>
          <Link to="/cart">
            <UnderlineButtonProps
              label="Cart"
              isActive={activeButton === "about"}
              onClick={() => handleClickButton("about")}
            />
          </Link>
          <Link to={"/billing"}>
            <UnderlineButtonProps
              label="Billing"
              isActive={activeButton === "signup"}
              onClick={() => handleClickButton("signup")}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <IconButton aria-label="favorite">
            <FavoriteBorderIcon sx={{ color: "black", fontSize: "30px" }} />
          </IconButton>
          <IconButton aria-label="cart" onClick={handleCartClick}>
            <StyledBadge
              badgeContent={cartItems.length}
              color="secondary"
              theme={theme}
            >
              <ShoppingCartIcon sx={{ color: "black", fontSize: "30px" }} />
            </StyledBadge>
          </IconButton>
          <AccountMenu />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
