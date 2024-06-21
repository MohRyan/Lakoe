import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const MultiLineEllipsis = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
});

interface MainDashboardProps {
  onAddCartClick: (cartId: string) => void;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ onAddCartClick }) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "pink" }}>
      <Grid container spacing={2}>
        {productMocks.map((product) => (
          <Grid item xs={3} key={product.Id}>
            <Card
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover .AddCart": {
                  display: "flex",
                  cursor: "pointer",
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200"
                  image={product.image}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  className="AddCart"
                  onClick={() => onAddCartClick(product.Id)}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "20%",
                    bgcolor: "gray",
                    opacity: 0,
                    transform: "translateY(20%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                  }}
                >
                  <Typography>Add Cart</Typography>
                </Box>
              </Box>
              <CardContent>
                <MultiLineEllipsis
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {product.name}
                </MultiLineEllipsis>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "13px" }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainDashboard;

const productMocks = [
  {
    Id: "1",
    name: "S-Series Comfort Chair S-Series Comfort Chair S-Series Comfort Chair",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Id: "2",
    name: "IPS LCD Gaming Monitor",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Id: "3",
    name: "AK-900 Wired Keyboard",
    price: 960,
    image:
      "https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Id: "4",
    name: "HAVIT HV-G92 Gamepad",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Id: "5",
    name: "S-Series Comfort Chair",
    price: 100,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Id: "6",
    name: "S-Series Comfort Chair",
    price: 890,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
