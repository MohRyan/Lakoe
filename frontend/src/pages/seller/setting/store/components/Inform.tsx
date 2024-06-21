import { Box, Button, TextField, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import React, { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useStoreUpdateValidation } from "@/lib/validation/useStoreValidation";
import { useStoreUpdateFunction } from "@/components/register/functions/useStoreForm";
import { IStore } from "..";
import { FaEdit, FaTrash } from "react-icons/fa";

const schema = yup
  .object({
    slogan: yup.string().required("Tidak boleh kosong!!, harap di isi"),
    store_name: yup.string().required("Tidak boleh kosong!!, harap di isi"),
    deskripsi: yup.string().required("Massukkan deskripsi produk"),
    store_logo: yup.string().required("Massukkan deskripsi produk"),
    // store_logo: yup.object().shape({
    //   name: yup.string().required(),
    // }),
  })
  .required();

export interface IFormInput {
  slogan: string;
  store_name: string;
  deskripsi: string;
  store_logo: string;
  // store_logo: FileList | object;
}

const Inform = ({ dataStore }: { dataStore: IStore }) => {
  // const [dataImage, setDataImage] = useState<{
  //   store_logo: FileList | null;
  // }>({ store_logo: null });
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   // const formData = new FormData();
  //   // formData.append("slogan", data.slogan);
  //   // formData.append("store_name", data.store_name);
  //   // formData.append("deskripsi", data.deskripsi);
  //   console.log("🚀 ~ Inform ~ data:", data);
  //   // formData.append("store_logo", data.store_logo);
  // };
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     slogan: "",
  //     store_name: "",
  //     deskripsi: "",
  //     store_logo: "",
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });

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
    // dataUser,
  });
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
            Informasi Toko
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Slogan</Typography>
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
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Nama Toko</Typography>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        {...field}
                        type="text"
                        size="small"
                        label={dataStore?.name}
                        placeholder={dataStore?.name}
                        // placeholder="Buat slogan untuk toko"
                        sx={{ width: "100%" }}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                      />
                    </>
                  )}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                gap: 1,
              }}
            >
              <Typography>Description</Typography>
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
              <Typography>Domain</Typography>
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              Simpan
            </Button>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
                  Logo Toko
                </Typography>
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
                            cursor: "pointer",
                          }}
                          onClick={() => setImageLogo(null)}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: 15,
                              color: "white",
                            }}
                          >
                            X
                          </span>
                        </Box>
                      </Box>
                    </>
                  )}
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
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
                  Banner Toko
                </Typography>
                <Box sx={{ width: 470 }}>
                  {!dataStore?.bannerAttachment === null ? (
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
                          // src={dataStore?.bannerAttachment}
                          src={
                            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                          }
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
                            bgcolor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => setImageBanner(null)}
                        >
                          <FaTrash color="red" />
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            top: 5,
                            right: 45,
                            width: 35,
                            borderRadius: "100%",
                            height: 35,
                            bgcolor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => setImageBanner(null)}
                        >
                          <FaEdit />
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
            </Box>

            <Typography
              fontSize={13}
              sx={{
                color: "gray",
                my: 1,
              }}
            >
              Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10
              Megabytes. Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
            </Typography>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Inform;
