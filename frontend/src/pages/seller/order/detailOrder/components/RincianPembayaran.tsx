import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Box } from "@mui/material";

const RincianPembayaran = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mb: 2,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
          <AccountBalanceWalletIcon />
          <b>Rincian Pembayaran</b>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 6,
            width: "100%",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li>Total Harga (1barang)</li>
            <li>Total Ongkos Kirim (10kg)</li>
            <li>Diskon</li>
            <li>Biaya Layanan</li>
          </ul>
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>Rp180.000</b>
            </li>
            <li>
              <b>Rp10.000</b>
            </li>
            <li>
              <b>Rp0</b>
            </li>
            <li>
              <b>Rp0</b>
            </li>
          </ul>
        </Box>
        <Box sx={{ height: 1.2, bgcolor: "gray", mx: 6 }}></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 6,
            width: "100%",
          }}
        >
          <b>Total Penjualan</b>
          <b>Rp190.000</b>
        </Box>
      </Box>
    </>
  );
};

export default RincianPembayaran;
