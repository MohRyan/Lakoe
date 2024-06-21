/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from "@mui/material/TextField";
// import { useForm, Controller } from "react-hook-form";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Box, Typography } from "@mui/material";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// const schema = yup.object({
//   name_product: yup.string().required("Tidak boleh kosong!!, harap di isi"),
//   url_product: yup.string().required("Tidak boleh kosong!!, harap di isi"),
// });

// interface IFormInput {
//   name_product?: string;
//   url_product?: string;
// }

const InformasiProduct = ({
  control,
  name_product,
  url_product,
}: {
  control: any;
  name_product: string;
  url_product: string;
}) => {
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   console.log(data);
  // };
  // const { control,  } = useForm({
  //   defaultValues: {
  //     name_product: "",
  //     url_product: "",
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });

  const [theme, setTheme] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTheme(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-1 mb-4">
        <p>
          Name Product <span style={{ color: "red" }}>*</span>
        </p>
        <Controller
          name={name_product}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              size="small"
              sx={{ width: "100%" }}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              variant="outlined"
              placeholder="name_product"
              // label={"name_product"}
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <p>
          URL Halaman Checkout <span style={{ color: "red" }}>*</span>
        </p>
        <Controller
          name={url_product}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Typography
                  sx={{
                    backgroundColor: "grey.200",
                    height: 40,
                    px: 0.3,
                    border: "1px solid",
                    borderColor: "grey.200",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1,
                    position: "absolute",
                  }}
                >
                  lakoe.store/
                </Typography>
                <TextField
                  {...field}
                  size="small"
                  sx={{
                    width: "100%",
                    pl: 12.5,
                  }}
                  error={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              </Box>
            </>
          )}
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <p>
          Kategori <span className="text-red-500 text-xl">*</span>
        </p>
        <FormControl fullWidth>
          <Select value={theme} onChange={handleChange} displayEmpty>
            <MenuItem value="" disabled>
              <em>Theme</em>
            </MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default InformasiProduct;
