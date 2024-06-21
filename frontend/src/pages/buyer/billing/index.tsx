import React, { useEffect, useState } from "react";
// import Navbar from "@/components/buyer/Navbar";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Theme, useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { API } from "@/lib/api";
import { RootState, useAppDispatch, useAppSelector } from "@/redux";
import { currencyFormatter } from "@/utils/currency";
import { fetchCards } from "@/redux/async/cardAsync";

interface Province {
  province_id: string;
  province: string;
}

interface City {
  city_id: string;
  city_name: string;
}

interface Costs {
  origin: string;
  destination: string;
  weight: number;
  courier: string;
}

interface ResponseCosts {
  service: string;
  description: string;
  cost: {
    value: number;
    etd: string;
    note: string;
  }[];
}

const data: { [key: string]: string } = {
  name: "Faza Muttaqien",
  email: "fazamttqn@gmail.com",
  telephone: "123-456-7890",
  // street:
  //   "Ruko Citra Lake Sawangan Blok D-01. 15, Jl. Cinangka Raya No.KM. 3, Kedaung",
  // city: "Sawangan, Kota Depok, Jawa Barat 16516",
  address:
    "Ruko Citra Lake Sawangan Blok D-01. 15, Jl. Cinangka Raya No.KM. 3, Kedaung, Sawangan, Kota Depok, Jawa Barat 16516",
};

const StyledPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 500,
  margin: "auto",
}));

const ItemContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

const Image = styled("img")(({ theme }: { theme: Theme }) => ({
  width: 50,
  height: 50,
  marginRight: theme.spacing(2),
}));

const BillingDetails: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [street, setStreet] = useState<string | undefined>(data.street);
  const [city, setCity] = useState<string | undefined>(data.city);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Update data object with entered street and city data
    // data.street = street || "";
    // data.city = city || "";
    data.address = `${street}, ${city}`;
    setIsModalOpen(false);
  };

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [costs, setCosts] = useState<ResponseCosts[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCourier, setSelectedCourier] = useState<string>("");
  const [selectedCost, setSelectedCost] = useState<string>("");

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await API.get("/shipper/provinces");
        setProvinces(response.data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleProvinceChange = async (event: SelectChangeEvent<string>) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);
    try {
      const response = await API.get("/shipper/cities", {
        params: { provinceId: provinceId },
      });
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const cityId = event.target.value;
    setSelectedCity(cityId);
  };

  const handleCourierChange = async (event: SelectChangeEvent<string>) => {
    const courierId = event.target.value;
    setSelectedCourier((prev) => (prev === courierId ? "" : courierId));
  };

  const couriers = [
    {
      code: "jne",
      name: "JNE",
    },
    {
      code: "pos",
      name: "POS Indonesia",
    },
    {
      code: "tiki",
      name: "TIKI",
    },
  ];

  const handleCostChange = async (event: SelectChangeEvent<string>) => {
    setSelectedCost(event.target.value);
    try {
      const data: Costs = {
        origin: "501",
        destination: selectedCity,
        weight: 1700,
        courier: selectedCourier,
      };
      const response = await API.post("/shipper/cost", data);
      setCosts(response.data);
    } catch (error) {
      console.error("Error post costs:", error);
    }
  };

  useEffect(() => {
    if (selectedCourier) {
      handleCostChange({ target: { value: selectedCourier } } as any);
    }
  }, [selectedCourier]);

  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  const calculateSubtotal = (price: number, quantity: number) =>
    price * quantity;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const dispatch = useAppDispatch();
  const cards = useAppSelector((state: RootState) => state.card.cards);

  useEffect(() => {
    console.log("carts", cards);
    console.log("carts prices", cards.prices);
    console.log("cartItems", cartItems);

    if (cards.cartItems[0]?.cardsId) {
      dispatch(fetchCards(cards.cartItems[0].cardsId));
    }
  }, [dispatch, cards.cartItems]);

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Container maxWidth="xl">
        <Typography>Hello World</Typography>
        {/* <Box sx={{ marginY: 8 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="cart" onClick={handleHomeClick}>
              <ArrowBackIosIcon sx={{ color: "black", fontSize: "20px" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
            >
              Billing Details
            </Typography>
          </Box>
          <Grid container spacing={1} marginY={1}>
            <Grid item xs={7}>
              <Box sx={{ width: "100%" }}>
                <Paper elevation={3}>
                  <Grid container>
                    {Object.keys(data).map((key) => (
                      <Grid item xs={12} key={key}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            padding: "10px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "gray",
                              textTransform: "capitalize",
                              fontSize: "11px",
                            }}
                          >
                            {key}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {data[key]}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                    <Grid item xs={12} marginBottom={2}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="select-label-province">
                          Province
                        </InputLabel>
                        <Select
                          value={selectedProvince}
                          onChange={handleProvinceChange}
                          label="Province"
                          labelId="select-label-province"
                        >
                          {provinces.map((province) => (
                            <MenuItem
                              key={province.province_id}
                              value={province.province_id}
                            >
                              {province.province}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        disabled={!selectedProvince}
                        // disabled={!selectedProvince || loadingCities}
                      >
                        <InputLabel id="select-label-city">City</InputLabel>
                        <Select
                          value={selectedCity}
                          onChange={handleCityChange}
                          label="City"
                          labelId="select-label-city"
                        >
                          {cities.map((city) => (
                            <MenuItem key={city.city_id} value={city.city_id}>
                              {city.city_name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        disabled={!selectedCity}
                        // disabled={!selectedProvince || loadingCities}
                      >
                        <InputLabel id="select-label-courier">
                          Courier
                        </InputLabel>
                        <Select
                          value={selectedCourier}
                          onChange={handleCourierChange}
                          label="Courier"
                          labelId="select-label-courier"
                        >
                          {couriers.map((courier) => (
                            <MenuItem key={courier.code} value={courier.code}>
                              {courier.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        disabled={!selectedCourier}
                        // disabled={!selectedProvince || loadingCities}
                      >
                        <InputLabel id="select-label-service-courier">
                          Service Courier
                        </InputLabel>
                        <Select
                          value={selectedCost}
                          onChange={handleCostChange}
                          label="Service Courier"
                          labelId="select-label-service-courier"
                        >
                          {costs.map((item) => (
                            <MenuItem key={item.service} value={item.service}>
                              {item.service} - {item.description}
                              {item.cost.map((cost, index) => (
                                <React.Fragment key={index}>
                                  {cost.value} - {cost.etd} - {cost.note}
                                </React.Fragment>
                              ))}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    {!data.address && (
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 5,
                            gap: 1,
                          }}
                        >
                          <Typography variant="h6" sx={{ fontSize: "15px" }}>
                            You don't have an address yet
                          </Typography>
                          <Button
                            variant="outlined"
                            sx={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                            }}
                            onClick={() => setIsModalOpen(true)}
                          >
                            Add Address
                          </Button>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ width: "100%" }}>
                <StyledPaper elevation={3} theme={theme}>
                  {carts.cartItems.map((item, index) => (
                    <ItemContainer key={index} theme={theme}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image
                          theme={theme}
                          src={item.attachments[index]}
                          alt={`${item.Id}_${index}`}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {currencyFormatter(item.price)}
                      </Typography>
                    </ItemContainer>
                  ))}
                  <Divider />
                  <ItemContainer theme={theme}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Subtotal:
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {currencyFormatter(calculateTotal())}
                    </Typography>
                  </ItemContainer>
                  <ItemContainer theme={theme}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Shipping:
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Free
                    </Typography>
                  </ItemContainer>
                  <Divider />
                  <ItemContainer theme={theme}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Total:
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {currencyFormatter(calculateTotal())}
                    </Typography>
                  </ItemContainer>
                  <Box
                    sx={{
                      mx: "auto",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                    >
                      Place Order
                    </Button>
                  </Box>
                </StyledPaper>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignContent: "start",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter Address
            </Typography>
            <FormControl>
              <TextField
                label="Street"
                value={street || ""}
                onChange={(e) => setStreet(e.target.value)}
                fullWidth
                size="small"
              />
            </FormControl>
            <FormControl>
              <TextField
                label="City"
                value={city || ""}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                size="small"
              />
            </FormControl>
            <Button
              onClick={handleModalSubmit}
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
            >
              Submit
            </Button>
          </Box>
        </Modal> */}
      </Container>
    </React.Fragment>
  );
};

export default BillingDetails;
