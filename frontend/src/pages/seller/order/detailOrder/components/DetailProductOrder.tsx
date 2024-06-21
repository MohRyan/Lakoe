import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Box } from "@mui/material";

const DetailProductOrder = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <InventoryIcon />
          <b>Detail Produk</b>
        </Box>
        <Box
          sx={{
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img
            src="https://karambeeakonveksi.com/wp-content/uploads/2016/10/kaos_raglan_01.png"
            width={60}
            alt=""
          />
          <Box sx={{ width: "70%" }}>
            <b>Nama Product</b>
            <p>1 x Rp180.000</p>
          </Box>
          <div>
            <p>Total Belanja</p>
            <b>Rp180.000</b>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DetailProductOrder;
