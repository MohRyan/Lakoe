import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "@/redux";
import {
  deleteCartItems,
  fetchCartItems,
  updateCard,
  updateCartItems,
} from "@/redux/async/cartAsync";
import { currencyFormatter } from "@/utils/currency";

const CartDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => state.auth);
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    if (auth.isLogin) {
      dispatch(fetchCartItems());
    }
  }, [auth, dispatch]);

  const handleQuantityChange = (
    Id: string,
    event: SelectChangeEvent<number>
  ) => {
    dispatch(updateCartItems({ Id, quantity: event.target.value as number }));
  };

  const handleDelete = (Id: string) => {
    dispatch(deleteCartItems(Id));
  };
  const calculateSubtotal = (price: number, quantity: number) =>
    price * quantity;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleBillingClick = (cardsId: string) => {
    dispatch(updateCard({ cardsId, prices: calculateTotal() }));
    navigate("/billing");
  };

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Container maxWidth="lg">
        <Box sx={{ marginTop: "50px" }}>
          <Box
            sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
          >
            <IconButton aria-label="cart" onClick={handleHomeClick}>
              <ArrowBackIosIcon sx={{ color: "black", fontSize: "20px" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
            >
              Cart Details
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.Id}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={item.attachments}
                          alt={item.name}
                          style={{ width: "50px", marginRight: "10px" }}
                        />
                        {item.name}
                      </Box>
                    </TableCell>
                    <TableCell>{currencyFormatter(item.price)}</TableCell>
                    <TableCell>
                      <Select
                        value={item.quantity}
                        onChange={(event) =>
                          handleQuantityChange(item.Id, event)
                        }
                        sx={{
                          width: "70px",
                          height: "40px",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        }}
                      >
                        {[...Array(10).keys()].map((i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      {currencyFormatter(
                        calculateSubtotal(item.price, item.quantity)
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(item.Id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5vh",
          }}
        >
          <Box
            sx={{
              border: "1px solid lightgray",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "300px",
              padding: "10px",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Total :
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                {currencyFormatter(calculateTotal())}
              </Typography>
            </Box>
            <Box sx={{ mx: "auto" }}>
              <Button
                onClick={() => {
                  if (cartItems[0] && cartItems[0].cardsId) {
                    handleBillingClick(cartItems[0].cardsId);
                  }
                }}
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CartDetails;
