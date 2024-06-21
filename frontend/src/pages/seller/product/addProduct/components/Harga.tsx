/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   harga: yup.string().required("Harga barang tidak boleh kosong atau 0"),
// });

const Harga = ({ control, price }: { control: any; price: string }) => {
  // const { control } = useForm({
  //   defaultValues: {
  //     harga: "",
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 4 }}>
        <Typography>
          Harga <span style={{ color: "red" }}>*</span>
        </Typography>
        <Controller
          name={price}
          control={control}
          render={({ field, fieldState }) => (
            <Box sx={{ display: "flex", position: "relative" }}>
              <Box
                sx={{
                  backgroundColor: "grey.200",
                  height: 40,
                  px: 5,
                  border: "1px solid",
                  borderColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  position: "absolute",
                }}
              >
                Rp
              </Box>
              <TextField
                {...field}
                size="small"
                sx={{
                  width: "100%",
                  pl: 13, // to match the padding-left of the absolute span
                }}
                placeholder="Massukkan harga satuan barang"
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            </Box>
          )}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 4 }}>
        <Typography>Minimal Pembelian</Typography>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Box
            sx={{
              backgroundColor: "grey.200",
              height: 40,
              px: 5,
              border: "1px solid",
              borderColor: "grey.200",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              position: "absolute",
              right: 0,
            }}
          >
            Produk
          </Box>
          <TextField
            size="small"
            value={1}
            sx={{
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Harga;
