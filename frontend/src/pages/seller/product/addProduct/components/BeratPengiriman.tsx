/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   berat: yup.string().required("Massukkan berat produk"),
//   panjang: yup.string(),
//   lebar: yup.string(),
//   tinggi: yup.string(),
// });

const BeratPengiriman = ({
  control,
  berat,
  panjang,
  lebar,
  tinggi,
}: {
  control: any;
  berat: string;
  panjang: string;
  lebar: string;
  tinggi: string;
}) => {
  // const { control } = useForm({
  //   defaultValues: {
  //     berat: "",
  //     panjang: undefined,
  //     lebar: undefined,
  //     tinggi: undefined,
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", my: 2 }}
        // className="flex flex-col gap-1 mb-4"
      >
        <p>
          Berat Produk{" "}
          <span style={{ color: "red" }} className="text-red-500 text-xl">
            *
          </span>
        </p>
        <Controller
          name={berat}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <Typography
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
                  Gram
                </Typography>
                <TextField
                  {...field}
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                  placeholder="Massukkan berat produk"
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              </Box>
            </>
          )}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <p>Ukuran Produk</p>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Controller
            name={panjang}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    width: "33.33%",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "grey.200",
                      height: 40,
                      px: 2,
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
                    cm
                  </Typography>
                  <TextField
                    {...field}
                    size="small"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="Panjang"
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                </Box>
              </>
            )}
          />
          <Controller
            name={lebar}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    width: "33.33%",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "grey.200",
                      height: 40,
                      px: 2,
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
                    cm
                  </Typography>
                  <TextField
                    {...field}
                    size="small"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="Lebar"
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                </Box>
              </>
            )}
          />
          <Controller
            name={tinggi}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    width: "33.33%",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "grey.200",
                      height: 40,
                      px: 2,
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
                    cm
                  </Typography>
                  <TextField
                    {...field}
                    size="small"
                    sx={{
                      width: "100%",
                    }}
                    placeholder="Tinggi"
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                </Box>
              </>
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default BeratPengiriman;
