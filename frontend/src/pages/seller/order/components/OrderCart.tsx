import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  SKU: string;
  imgProduct: string;
  name_product: string;
  stok_barang: string;
  price: string;
  link: string;
}

const OrderCart = ({ props }: { props: IProps }) => {
  return (
    <>
      <Link to={props.link} style={{ textDecoration: "none", color: "black" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid gray",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
            }}
          >
            <div>
              <Typography
                sx={{
                  bgcolor: "yellow",
                  width: 140,
                  px: 1,
                  py: 0.5,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 3,
                  fontWeight: "bold",
                  mb: 0.5,
                }}
                className="bg-yellow-500 px-2 py-1 rounded-lg"
              >
                Belum Dibayar
              </Typography>
              {/* <p className="my-1">INV/45535654/MPL/000000425</p> */}
              <p className="my-1">{props.SKU}</p>
            </div>
            <div>
              <Button
                variant={"outlined"}
                sx={{ color: "black", borderColor: "black" }}
              >
                Hubungi Pembeli
              </Button>
            </div>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
            <Box width={"12%"}>
              <img src={props.imgProduct} width={60} alt="" />
            </Box>
            <Box width={"80%"} className="w-[80%]">
              <b className="text-xl">{props.name_product}</b>
              <p>{props.stok_barang} Barang</p>
            </Box>
            <Box fontSize={14} width={"15%"}>
              <p>Total belanja</p>
              <b>Rp{props.price}</b>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default OrderCart;
