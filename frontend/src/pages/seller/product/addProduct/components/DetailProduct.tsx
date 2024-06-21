/* eslint-disable @typescript-eslint/no-explicit-any */
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   deskripsi: yup.string().required("Massukkan deskripsi produk"),
//   file: yup
//     .object()
//     .shape({
//       name: yup.string().required("hhhhhh"),
//     })
//     .required("File required"),
// });

const DetailProduct = ({
  control,
  deskripsi,
}: {
  control: any;
  deskripsi: string;
}) => {
  // const { control } = useForm({
  //   defaultValues: {
  //     deskripsi: "",
  //     file: undefined,
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(schema),
  // });

  const photos = [
    { label: "Foto Utama" },
    { label: "Foto 2" },
    { label: "Foto 3" },
    { label: "Foto 4" },
    { label: "Foto 5" },
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", px: 2, gap: 1 }}>
        <p>
          Deskripsi <span style={{ color: "red" }}>*</span>
        </p>
        <Controller
          name={deskripsi}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              multiline
              rows={4}
              placeholder="Masukkan lengkap deskripsi produk kamu"
            />
          )}
        />

        <p>
          Foto product <span style={{ color: "red" }}>*</span>
        </p>
        <label htmlFor="image">
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {photos.map((photo, index) => (
              <Box
                key={index}
                sx={{
                  border: "2px dashed",
                  borderColor: "grey.400",
                  color: "grey.400",
                  width: 126, // 44 * 4
                  height: 126, // 44 * 4
                  gap: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                }}
              >
                <AddPhotoAlternateIcon />
                <Typography>{photo.label}</Typography>
              </Box>
            ))}
          </Box>
          {/* <div className="flex gap-5 justify-around">
            <div className="outline-dashed outline-2 text-gray-400 w-44 h-44 gap-1 justify-center flex flex-col items-center rounded-xl">
              <AddPhotoAlternateIcon  />
              <span>Foto Utama</span>
            </div>
            <div className="outline-dashed outline-2 text-gray-400 w-44 h-44 gap-1 justify-center flex flex-col items-center rounded-xl">
              <AddPhotoAlternateIcon  />
              <span>Foto 2</span>
            </div>
            <div className="outline-dashed outline-2 text-gray-400 w-44 h-44 gap-1 justify-center flex flex-col items-center rounded-xl">
              <AddPhotoAlternateIcon  />
              <span>Foto 3</span>
            </div>
            <div className="outline-dashed outline-2 text-gray-400 w-44 h-44 gap-1 justify-center flex flex-col items-center rounded-xl">
              <AddPhotoAlternateIcon  />
              <span>Foto 4</span>
            </div>
            <div className="outline-dashed outline-2 text-gray-400 w-44 h-44 gap-1 justify-center flex flex-col items-center rounded-xl">
              <AddPhotoAlternateIcon  />
              <span>Foto 5</span>
            </div>
          </div> */}
        </label>

        <Controller
          name="file"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextField
                {...field}
                id="image"
                type="file"
                size="small"
                sx={{ display: "none" }}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
              <span>{fieldState.error?.message}</span>
            </>
          )}
        />
      </Box>
    </>
  );
};

export default DetailProduct;
