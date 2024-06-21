/* eslint-disable @typescript-eslint/no-unused-vars */
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Snackbar } from "@mui/material";
import React, { useState } from "react";

// import React, { useState } from "react";
// import { useToast } from "@/components/ui/use-toast";

const DetailPengiriman = () => {
  // const { toast } = useToast();
  const [noResi, setNoResi] = useState("-");
  const [alamat, setAlamat] = useState(
    "Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413 081234567890 Annur Syawila Hasibuan"
  );

  const [openResi, setOpenResi] = React.useState(false);
  const [openAlamat, setOpenAlamat] = React.useState(false);

  const handleResi = () => {
    navigator.clipboard.writeText(noResi);
    setOpenResi(true);
  };

  const handleAlamat = () => {
    navigator.clipboard.writeText(alamat);
    setOpenAlamat(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenResi(false);
    setOpenAlamat(false);
  };
  return (
    <>
      <div>
        <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
          <LocalShippingIcon />
          <b>Detail Pengiriman</b>
        </Box>
        <Box sx={{ display: "flex", gap: 20, px: 6 }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              width: 200,
              gap: 5,
            }}
          >
            <li>Kurir</li>
            <li style={{ display: "flex", gap: 10 }} className="flex gap-2">
              No. Resi{" "}
              <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                <ContentCopyIcon onClick={handleResi}></ContentCopyIcon>
                <Snackbar
                  open={openResi}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  message={`Copied!! ${noResi}`}
                />
              </Box>
            </li>
            <li style={{ display: "flex", gap: 10 }} className="flex gap-2">
              Alamat{" "}
              <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                <ContentCopyIcon onClick={handleAlamat}></ContentCopyIcon>
                <Snackbar
                  open={openAlamat}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  message={`Copied!! ${alamat}`}
                />
              </Box>
            </li>
          </ul>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
            }}
            className="flex flex-col gap-3"
          >
            <li>
              <b>J&T - Regular</b>
            </li>
            <li>-</li>
            <li>
              <p>
                Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
                Banten 15413
              </p>
              <p>081234567890</p>
              <p>Annur Syawila Hasibuan</p>
            </li>
          </ul>
        </Box>
      </div>
    </>
  );
};

export default DetailPengiriman;
