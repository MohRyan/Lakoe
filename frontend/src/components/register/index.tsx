import useRegisterValidation from "@/lib/validation/useRegisterValidation";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegisterFunction } from "./functions/useRegister";
import FormStore from "./FormStore";

const options = ["Buyer", "Seller"];

const Register: React.FC = () => {
  const { control, reset, handleSubmit } = useRegisterValidation();
  const { onErrorSubmit, onSubmit, isSeller, dataUser } = useRegisterFunction({
    reset,
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} paddingY={3}>
          Create account{" "}
          <span style={{ fontFamily: "Merriweather, serif" }}>Lakoe</span>
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
                  placeholder="Fullname"
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
              name="phone"
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Phone"
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
              name="email"
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Email"
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
              name="password"
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Password"
                  color="primary"
                  sx={{ borderColor: "white" }}
                  {...field}
                  helperText={fieldState.error?.message}
                  error={Boolean(fieldState.error)}
                />
              )}
            />
            <Controller
              name="role"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl fullWidth color="primary">
                  {!isSeller ? (
                    <InputLabel id="role-select-label">Role</InputLabel>
                  ) : (
                    ""
                  )}
                  <Select
                    {...field}
                    color="primary"
                    placeholder="Role"
                    sx={{ borderColor: "white" }}
                    error={Boolean(fieldState.error)}
                  >
                    <MenuItem value={"Buyer"}>Buyer</MenuItem>
                    <MenuItem value={"Seller"}>Seller</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit, onErrorSubmit)}
              sx={{
                color: "white",
                borderRadius: "20px",
                textTransform: "capitalize",
                fontSize: "18px",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Create
            </Button>
            <Typography fontWeight={"bold"}>
              Already have account ?{" "}
              <Link
                to={"/auth/login"}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
      {!isSeller ? "" : <FormStore dataUser={dataUser} />}
    </Container>
  );
};

export default Register;
