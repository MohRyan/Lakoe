import { Box, Grid, Rating, Typography } from "@mui/material";
import { PRODUCT_ITEM } from "./topProductItem";

const TopProduct = () => {
  return (
    <Box bgcolor={"white"} padding={2} borderRadius={"10px"} boxShadow={"2px 2px gray"} border={"1px solid black"} width={"100%"}>
      <Typography fontWeight={"bold"}>Top Sales</Typography>
      {PRODUCT_ITEM.map((item) => (
        <Grid container border={"1px solid black"} padding={1} marginTop={2} borderRadius={"10px"}>
          <Grid item>
            <img src={item.image} style={{ width: "20vh", height: "25vh", borderRadius: "10px" }} alt="product-pict" />
          </Grid>
          <Grid item margin={1}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box>
                <Typography fontWeight={"bold"}>{item.name}</Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <Box>Sold products: {item.soldProduct}</Box>
                <Box>Products in stock: {item.inStock}</Box>
                <Box>rating:</Box>
                <Box>
                  <Rating name="read-only" value={item.rating} readOnly />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item margin={2} alignContent={"center"}>
            <Typography>Price: </Typography>
            <Typography>${item.price}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default TopProduct;
