import Navbar from "@/components/buyer/Navbar";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("M"); // default selected size
  const [selectedColors, setSelectedColors] = useState("#185EA5"); // default selected colors

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#185EA5", "#555E68", "#A51818", "#136C13", "#72430D"];

  const handleSizeClick = (size: React.SetStateAction<string>) => {
    setSelectedSize(size);
  };

  const handleColorsClick = (color: React.SetStateAction<string>) => {
    setSelectedColors(color);
  };

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Container maxWidth="lg">
        <Box sx={{ marginTop: "50px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="cart" onClick={handleHomeClick}>
              <ArrowBackIosIcon sx={{ color: "black", fontSize: "20px" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
            >
              Product Details
            </Typography>
          </Box>
          <Grid container columnSpacing={2} marginY={1} padding={2}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {images.map((image) => (
                  <img
                    src={image.image}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "129.5px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={5}>
              <Box>
                <img
                  src="https://res.cloudinary.com/dklgstji2/image/upload/v1716946489/lakoe_fe_dummy/vqmlpt8ok80sy9vtn4ry.png"
                  alt="main_image"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Havic HV G-92 Gamepad
                  </Typography>
                  <Typography
                    sx={{ color: "gray", marginTop: 1, marginBottom: 2 }}
                  >
                    $192.00
                  </Typography>
                  <Typography sx={{ marginBottom: 2, fontSize: "13px" }}>
                    PlayStation 5 Controller Skin High quality vinyl with air
                    channel adhesive for easy bubble free install & mess free
                    removal Pressure sensitive.
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                      Colours
                    </Typography>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      {colors.map((color) => (
                        <Box
                          sx={{
                            marginX: "5px",
                            width: "23px",
                            height: "23px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            fontSize: "13px",
                            bgcolor: color,
                            cursor: "pointer",
                          }}
                          onClick={() => handleColorsClick(color)}
                        >
                          {selectedColors === color ? (
                            <CheckIcon
                              sx={{ color: "white" }}
                              fontSize="small"
                            />
                          ) : null}
                        </Box>
                      ))}
                    </ButtonGroup>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: 5,
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                      Size
                    </Typography>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      {sizes.map((size) => (
                        <Box
                          sx={{
                            marginX: "5px",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            fontSize: "13px",
                            bgcolor: selectedSize === size ? "black" : "white",
                            color: selectedSize === size ? "white" : "black",
                            cursor: "pointer",
                          }}
                          onClick={() => handleSizeClick(size)}
                        >
                          {/* <Button
                            key={size}
                            // variant={
                            //   selectedSize === size ? "contained" : "outlined"
                            // }
                            // sx={{
                            //   color:
                            //     selectedSize === size ? "primary" : "default",
                            // }}
                          >
                            {size}
                          </Button> */}
                          {size}
                        </Box>
                      ))}
                    </ButtonGroup>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10%",
                      alignItems: "center",
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    <Box>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "40px",
              backgroundColor: "black",
              borderRadius: "5px",
              marginRight: "1%",
            }}
          />
          <Typography sx={{ fontWeight: "bold" }}>Related Item</Typography>
        </Box>
        <Box sx={{ mt: "2%", display: "flex", gap: "2%" }}>
          {cart_mocks.map((mock) => (
            <Box key={mock.Id}>
              <img
                src={mock.image}
                style={{
                  width: "271px",
                  objectFit: "cover",
                  height: "250px",
                  borderRadius: "2px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  mt: "1%",
                }}
                variant="h6"
              >
                {mock.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  mt: "1%",
                }}
                variant="h6"
              >
                ${mock.price}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetails;

const images = [
  {
    Id: "1",
    image:
      "https://res.cloudinary.com/dklgstji2/image/upload/v1716946489/lakoe_fe_dummy/ywsy7mltxwhi8agnpjjk.png",
  },
  {
    Id: "2",
    image:
      "https://res.cloudinary.com/dklgstji2/image/upload/v1716946489/lakoe_fe_dummy/ke6949szsknfdmm10s0e.png",
  },
  {
    Id: "3",
    image:
      "https://res.cloudinary.com/dklgstji2/image/upload/v1716946489/lakoe_fe_dummy/ty3io7fbzwynnelkjdmc.png",
  },
  {
    Id: "4",
    image:
      "https://res.cloudinary.com/dklgstji2/image/upload/v1716946489/lakoe_fe_dummy/so253v4lzwd7utfobsyy.png",
  },
];

const cart_mocks = [
  {
    Id: "1",
    name: "S-Series Comfort Chair",
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
];
