import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import FormStoreUpdate from "./FormStoreUpdate";
import { useStoreValidation } from "@/lib/validation/useStoreValidation";
import { useStoreFunction } from "./functions/useStoreForm";

const FormStore = ({
  dataUser,
}: {
  dataUser: { email: string; password: string };
}) => {
  const { control, reset, handleSubmit } = useStoreValidation();
  const { onSubmit, onErrorSubmit, isStoreUpdate } = useStoreFunction({
    reset,
  });

  return (
    <>
      <Box
        position={"absolute"}
        zIndex={10}
        width={"100vw"}
        height={"100vh"}
        bgcolor={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>
          <Typography fontWeight={"bold"} marginY={2} variant="h4">
            Daftar Store
          </Typography>
          <form>
            <Box
              width={"412px"}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => (
                  <TextField
                    label="Name Store"
                    color="primary"
                    sx={{ border: "none" }}
                    {...field}
                    helperText={fieldState.error?.message}
                    error={Boolean(fieldState.error)}
                  />
                )}
              />
              <Controller
                control={control}
                name="accountBankName"
                render={({ field, fieldState }) => (
                  <TextField
                    label="Nama Akun Bank"
                    color="primary"
                    sx={{ border: "none" }}
                    {...field}
                    helperText={fieldState.error?.message}
                    error={Boolean(fieldState.error)}
                  />
                )}
              />
              <Box>
                <Box mt={2}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    justifyContent={"space-evenly"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      {/* <Checkbox value={"bca"} name="bank" onChange={getValueBank} /> */}
                      <Checkbox value={"bca"} name="bank" />
                      <img width={70} src="/src/assets/BCA.png" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      {/* <Checkbox value={"bri"} name="bank" onChange={getValueBank} /> */}
                      <Checkbox value={"bri"} name="bank" />
                      <img width={70} src="/src/assets/BRI.png" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <Checkbox
                        value={"mandiri"}
                        name="bank"
                        // onChange={getValueBank}
                      />
                      <img width={70} src="/src/assets/Mandiri.png" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      {/* <Checkbox value={"bni"} name="bank" onChange={getValueBank} /> */}
                      <Checkbox value={"bni"} name="bank" />
                      <img width={70} src="/src/assets/BNI.png" alt="" />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"space-evenly"}>
                <Link to={"/auth/login"}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      px: 5,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "bold",
                      mt: 2,
                    }}
                  >
                    Skip
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit, onErrorSubmit)}
                  sx={{
                    color: "white",
                    borderRadius: "10px",
                    px: 5,
                    textTransform: "capitalize",
                    fontSize: "18px",
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Create
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      {!isStoreUpdate ? "" : <FormStoreUpdate dataUser={dataUser} />}
    </>
  );
};

export default FormStore;
