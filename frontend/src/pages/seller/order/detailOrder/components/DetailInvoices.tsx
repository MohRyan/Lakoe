import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import { Box } from "@mui/material";

const DetailInvoices = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [invoice, setInvoice] = useState("INV/20232354546/MPL/000054239");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(invoice);
    setOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 1 }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DateRangeIcon />
          <Box sx={{ width: "60%" }}>
            <b>Tanggal</b>
          </Box>
          <p>09 Agustus 2023 - 19:43 WIB</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ReceiptIcon />
          <Box sx={{ width: "49%" }}>
            <b>Invoice</b>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <ContentCopyIcon onClick={handleClick}></ContentCopyIcon>
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              message={`Copied!! ${invoice}`}
            />
            <p>INV/20232354546/MPL/000054239</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon />
          <Box sx={{ width: "60%" }}>
            <b>Pembeli</b>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "green",
                display: "flex",
                alignItems: "center",
                borderRadius: "100%",
                p: 0.5,
              }}
            >
              <WhatsAppIcon sx={{ color: "white" }} />
            </Box>
            <p>Annur Syawila Hasibuan</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailInvoices;
