import Navbar from "@/components/buyer/Navbar";
import React, { ChangeEvent, useEffect } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { fetchCategories, fetchProducts } from "@/redux/async/productsAsync";
import {
  selectCategories,
  setCategoriesId,
  setSearchTerm,
  setSortBy,
  setSortOrder,
} from "@/redux/slice/productsSlice";
import CategoryDropdown from "@/components/buyer/Cateogory/CategoryDropdown";
import styled from "@emotion/styled";
import { addToCart } from "@/redux/async/cartAsync";
import { currencyFormatter } from "@/utils/currency";

const MultiLineEllipsis = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
});

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const {
    products,
    searchTerm,
    categoriesId,
    minPrice,
    maxPrice,
    sortBy,
    sortOrder,
    loading,
    error,
  } = useAppSelector((state: RootState) => state.products);
  const categories = useAppSelector(selectCategories);
  const auth = useAppSelector((state: RootState) => state.auth);

  const handleAddToCart = (product: IProduct) => {
    const cart: ICartItems = {
      Id: product.Id,
      userId: auth.user.sub,
      name: product.name,
      price: product.price,
      attachments: product.attachments[0],
      quantity: 1,
    };
    dispatch(addToCart(cart));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoriesChange = (categoriesId: string) => {
    dispatch(setCategoriesId(categoriesId));
  };

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    dispatch(setSortBy(e.target.value as string));
  };

  const handleSortOrderChange = (e: SelectChangeEvent<string>) => {
    dispatch(setSortOrder(e.target.value as "asc" | "desc"));
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (!searchTerm ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!categoriesId || product.mainCategoriesId === categoriesId) &&
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <CategoryDropdown
              categories={categories}
              selectedCategoriesId={categoriesId}
              handleCategoryChange={handleCategoriesChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Sort By</InputLabel>
              <Select value={sortBy} onChange={handleSortChange}>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="name">Name</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Sort Order</InputLabel>
              <Select value={sortOrder} onChange={handleSortOrderChange}>
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {loading ? (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          ) : error ? (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          ) : (
            filteredProducts.map((product) => (
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
                      image={product.attachments[0]}
                      sx={{ objectFit: "cover" }}
                    />
                    <Box
                      className="AddCart"
                      onClick={() => handleAddToCart(product)}
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "20%",
                        bgcolor: "#EDEDED",
                        color: "black",
                        opacity: 0,
                        transform: "translateY(20%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                        variant="h6"
                      >
                        Add Cart
                      </Typography>
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
                      {currencyFormatter(product.price)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
