import { Box, Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";

const FormTemplate = () => {
  const [judulPesan, setJudulPesan] = useState("");
  const [detailIsiPesan, setDetailIsiPesan] = useState("");

  const insertValue = (value: string) => {
    document.getElementById("coba")?.classList.add("font-bold");
    setDetailIsiPesan(detailIsiPesan + `*${value}*`);
  };

  const saveTemplate = () => {
    if (judulPesan && detailIsiPesan) {
      // Logic to save the template
      alert("Template saved successfully!");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const cancelTemplate = () => {
    setJudulPesan("");
    setDetailIsiPesan("");
  };
  return (
    <>
      <Fragment>
        <b style={{ fontSize: 18 }}>Buat template pesanan baru</b>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 1 }}>
          <p>
            Judul Pesan <span style={{ color: "red" }}>*</span>
          </p>
          <TextField
            value={judulPesan}
            size="small"
            onChange={(e) => setJudulPesan(e.target.value)}
            placeholder="Cth, Pesanan Konfirmasi Pengiriman"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 1 }}>
          <p>
            Detail Isi Pesan <span style={{ color: "red" }}>*</span>
          </p>
          <Box sx={{ display: "flex", gap: 1 }} className="flex gap-2">
            <Button
              variant={"outlined"}
              onClick={() => insertValue("Nama Pembeli")}
              sx={{
                color: "black",
                borderColor: "black",
                fontWeight: "bold",
                fontSize: 10,
                height: 30,
              }}
            >
              Nama Pembeli
            </Button>
            <Button
              variant={"outlined"}
              onClick={() => insertValue("Nama Produk")}
              sx={{
                color: "black",
                borderColor: "black",
                fontWeight: "bold",
                fontSize: 10,
                height: 30,
              }}
            >
              Nama Produk
            </Button>
            <Button
              variant={"outlined"}
              onClick={() => insertValue("Nama Toko")}
              sx={{
                color: "black",
                borderColor: "black",
                fontWeight: "bold",
                fontSize: 10,
                height: 30,
              }}
            >
              Nama Toko
            </Button>
          </Box>
          <TextField
            id="coba"
            value={detailIsiPesan}
            sx={{ fontWeight: "bold" }}
            onChange={(e) => setDetailIsiPesan(e.target.value)}
            placeholder="Tuliskan pesan disini"
            multiline
            rows={3}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}
        >
          <Button variant={"outlined"} onClick={cancelTemplate}>
            Batalkan
          </Button>
          <Button variant={"contained"} onClick={saveTemplate}>
            Simpan
          </Button>
        </Box>
      </Fragment>
    </>
  );
};

export default FormTemplate;
