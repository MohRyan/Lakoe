import React from "react";
import StatusOrder from "./components/StatusOrder";
import { Box } from "@mui/material";
import DetailInvoices from "./components/DetailInvoices";
import DetailProductOrder from "./components/DetailProductOrder";
import DetailPengiriman from "./components/DetailPengiriman";
import RincianPembayaran from "./components/RincianPembayaran";

const DetailOrder = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Box
          sx={{
            display: "flex",
            m: 1.5,
            maxWidth: "770px",
            p: 1.5,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <StatusOrder />
        </Box>
        <Box
          sx={{
            display: "flex",
            m: 1.5,
            maxWidth: "770px",
            p: 1.5,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <DetailInvoices />
        </Box>
        <Box
          sx={{
            display: "flex",
            m: 1.5,
            maxWidth: "770px",
            p: 1.5,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <DetailProductOrder />
        </Box>
        <Box
          sx={{
            display: "flex",
            m: 1.5,
            maxWidth: "770px",
            p: 1.5,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <DetailPengiriman />
        </Box>
        <Box
          sx={{
            display: "flex",
            m: 1.5,
            maxWidth: "770px",
            p: 1.5,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <RincianPembayaran />
        </Box>
      </div>
    </>
  );
};

export default DetailOrder;
