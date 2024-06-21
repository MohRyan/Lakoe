import { useStoreUpdateValidation } from "@/lib/validation/useStoreValidation";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import React from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useStoreUpdateFunction } from "./functions/useStoreForm";

const FormStoreUpdate = ({
  dataUser,
}: {
  dataUser: { email: string; password: string };
}) => {
  const { control, reset, handleSubmit } = useStoreUpdateValidation();
  const {
    onErrorSubmit,
    onSubmit,
    imageLogo,
    setImageLogo,
    imageBanner,
    setImageBanner,
  } = useStoreUpdateFunction({
    reset,
    dataUser,
  });
  return (
    <>
      <Box
        position={"absolute"}
        zIndex={20}
        width={"100vw"}
        height={"100vh"}
        bgcolor={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box my={2}>
          <Typography variant="h4" fontWeight={"bold"}>
            Nama Toko
          </Typography>
        </Box>
        <form>
          <Box
            width={"412px"}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Controller
              control={control}
              name="slogan"
              render={({ field, fieldState }) => (
                <TextField
                  label="Slogan"
                  color="primary"
                  size="small"
                  sx={{ border: "none" }}
                  {...field}
                  helperText={fieldState.error?.message}
                  error={Boolean(fieldState.error)}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field, fieldState }) => (
                <TextField
                  label="Description"
                  color="primary"
                  size="small"
                  sx={{ border: "none" }}
                  {...field}
                  helperText={fieldState.error?.message}
                  error={Boolean(fieldState.error)}
                />
              )}
            />
            <Controller
              control={control}
              name="domain"
              render={({ field, fieldState }) => (
                <TextField
                  label="Domain"
                  color="primary"
                  size="small"
                  sx={{ border: "none" }}
                  {...field}
                  helperText={fieldState.error?.message}
                  error={Boolean(fieldState.error)}
                />
              )}
            />
            <Box display={"flex"} gap={3}>
              <Box sx={{ width: 120 }}>
                {imageLogo === null ? (
                  <>
                    <label htmlFor="logoAttachment">
                      <Box
                        sx={{
                          outline: "2px dashed",
                          color: "gray",
                          width: 120,
                          height: 120,
                          gap: 1,
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 2,
                          cursor: "pointer",
                        }}
                      >
                        <AddPhotoAlternateIcon />
                        <Typography fontSize={13}>Unggah Logo</Typography>
                      </Box>
                    </label>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        zIndex: 20,
                        position: "relative",
                        width: "100%",
                        height: 120,
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={imageLogo}
                        alt=""
                        style={{ borderRadius: 10 }}
                        width={"100%"}
                        height={"100%"}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 5,
                          width: 35,
                          borderRadius: "100%",
                          height: 35,
                          bgcolor: "gray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span
                          onClick={() => setImageLogo(null)}
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          X
                        </span>
                      </Box>
                    </Box>
                  </>
                )}

                <>
                  <TextField
                    id="logoAttachment"
                    // name="store_logo"
                    type="file"
                    size="small"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0];
                      setImageLogo(URL.createObjectURL(file!));
                    }}
                    sx={{ display: "none" }}
                  />
                </>
              </Box>
              <Box sx={{ width: 270 }}>
                {imageBanner === null ? (
                  <>
                    <label htmlFor="bannerAttachment">
                      <Box
                        sx={{
                          outline: "2px dashed",
                          color: "gray",
                          width: "100%",
                          height: 120,
                          gap: 1,
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 2,
                          cursor: "pointer",
                        }}
                      >
                        <AddPhotoAlternateIcon />
                        <Typography fontSize={13}>
                          Unggah Banner Toko
                        </Typography>
                      </Box>
                    </label>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        zIndex: 20,
                        position: "relative",
                        // width: "100%",
                        height: 120,
                      }}
                    >
                      <img
                        src={imageBanner}
                        alt=""
                        style={{ borderRadius: 10, objectFit: "cover" }}
                        width={"100%"}
                        height={"100%"}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 5,
                          width: 35,
                          borderRadius: "100%",
                          height: 35,
                          bgcolor: "gray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span
                          onClick={() => setImageBanner(null)}
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          X
                        </span>
                      </Box>
                    </Box>
                  </>
                )}

                <>
                  <TextField
                    id="bannerAttachment"
                    // name="store_logo"
                    type="file"
                    size="small"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0];
                      setImageBanner(URL.createObjectURL(file!));
                    }}
                    sx={{ display: "none" }}
                  />
                </>
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
    </>
  );
};

export default FormStoreUpdate;
