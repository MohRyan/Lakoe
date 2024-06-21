/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// const schema = yup.object({
//   stok_product: yup.string().required("Masukkan stok produk minimal 1"),
//   SKU: yup.string().required("Tidak boleh kosong!!, harap di isi"),
// });

const PengelolaanProduct = ({
  control,
  stok_product,
  SKU,
}: {
  control: any;
  stok_product: string;
  SKU: string;
}) => {
  // const { control } = useForm({
  //   defaultValues: {
  //     stok_product: "",
  //     SKU: "",
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 2,
        }}
        className="flex w-full gap-5 justify-evenly items-center "
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
            flexDirection: "column",
          }}
          className="flex flex-col w-1/2 gap-1 mb-4"
        >
          <p>
            Stok Product{" "}
            <span style={{ color: "red" }} className="text-red-500 text-xl">
              *
            </span>
          </p>
          <Controller
            name={stok_product}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                size="small"
                sx={{ width: "100%" }}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                placeholder="Massukkan jumlah stok"
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
            flexDirection: "column",
          }}
        >
          <p>SKU {"(Stock Keeping Unit)"}</p>
          <Controller
            name={SKU}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                size="small"
                sx={{ width: "100%" }}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                placeholder="Massukkan SKU"
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default PengelolaanProduct;
