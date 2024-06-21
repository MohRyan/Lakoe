import React from "react";
// import FormLocations from "./components/FormLocations";
// import DeleteLocations from "./components/DeleteLocations";
import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const styleLokasi = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

const Lokasi = () => {
  const [openTambahLokasi, setOpenTambahLokasi] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Lokasi Toko
            </Typography>
            <Typography>
              Alamat ini akan digunakan sebagai alamat pengirimanmu
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => setOpenTambahLokasi(true)}
            >
              Tambah Lokasi
            </Button>
            <Modal
              open={openTambahLokasi}
              onClose={() => setOpenTambahLokasi(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleLokasi}>
                <Box
                  sx={{
                    fontSize: 13,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <b style={{ fontSize: 15 }}>Tambah lokasi baru</b>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p>
                      Nama Lokasi <span style={{ color: "red" }}>*</span>
                    </p>
                    <TextField size="small" placeholder="Cth. Toko Alamanda" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p>
                      Kota / Kecamatan <span style={{ color: "red" }}>*</span>
                    </p>
                    <TextField size="small" placeholder="Cari Kota/Kecamatan" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p>
                      Kode Pos <span style={{ color: "red" }}>*</span>
                    </p>
                    <TextField
                      size="small"
                      placeholder="Masukan 5 digit kode pos"
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p>
                      Alamat Lengkap <span style={{ color: "red" }}>*</span>
                    </p>
                    <TextField
                      size="small"
                      multiline
                      rows={2}
                      placeholder="Tuliskan alamat lengkap toko"
                    />
                  </Box>
                  <Box sx={{ fontSize: 13 }}>
                    <b style={{ fontSize: 15 }}>Pinpoint Lokasi</b>
                    <p>
                      Tandai lokasi untuk mempermudah permintaan pickup kurir
                    </p>
                    <MapContainer
                      center={[51.505, -0.09]}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: 120, width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[51.505, -0.09]}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>

                    {/* <PinLocations /> */}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 2,
                      mt: 1,
                    }}
                  >
                    <Button
                      variant={"outlined"}
                      onClick={() => setOpenTambahLokasi(false)}
                    >
                      Batalkan
                    </Button>
                    <Button variant={"contained"}>Simpan</Button>
                  </Box>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
        {/* CART Locations */}
        <Box
          sx={{
            display: "flex",
            gap: 10,
            border: "1px solid",
            borderColor: "gray",
            my: 2,
            p: 2,
            borderRadius: 2,
            justifyContent: "space-between",
          }}
        >
          <ul style={{ listStyle: "none", fontSize: 14 }}>
            <li>Nama Lokasi</li>
            <li>Alamat</li>
            <li>Kota/Kecamatan</li>
            <li>Kode Pos</li>
            <li>Pinpoint</li>
          </ul>
          <ul style={{ listStyle: "none", width: "300px", fontSize: 14 }}>
            <li
              style={{ display: "flex", alignItems: "center", gap: 10 }}
              className="flex gap-3 items-center"
            >
              <b>Fesyen Store</b>
              <Typography
                sx={{
                  bgcolor: "green",
                  paddingX: 1.5,
                  paddingY: 0.3,
                  borderRadius: "20px",
                  fontSize: 12,
                  color: "white",
                }}
                className="bg-green-700 px-3 rounded-lg text-white"
              >
                Alamat Utama
              </Typography>
            </li>
            <li>Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan</li>
            <li>Kota Tangerang Selatan, Kec. Ciputat</li>
            <li>15413</li>
            <li>Pinpoint</li>
          </ul>
          <Box sx={{ display: "flex", gap: 1 }}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-600">
              <Box onClick={() => setOpenDelete(true)}>
                <DeleteIcon />
              </Box>
              <Modal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div>
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: 18, mb: 2 }}
                    >
                      Hapus Alamat
                    </Typography>
                    <p>
                      Apakah kamu yakin untuk menghapus <b>Rumah</b>? Kamu tidak
                      akan dapat mengembalikan alamat yang sudah dihapus
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 2,
                      }}
                    >
                      <Button
                        onClick={() => setOpenDelete(false)}
                        variant="outlined"
                      >
                        Batalkan
                      </Button>
                      <Button variant="contained">Ya, Hapus</Button>
                    </Box>
                  </div>
                  {/* <FormLocations /> */}
                </Box>
              </Modal>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-600">
              <Box onClick={() => setOpenEdit(true)}>
                <EditNoteIcon />
              </Box>
              <Modal
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Edit
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                  {/* <FormLocations /> */}
                </Box>
              </Modal>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 10,
            border: "1px solid",
            borderColor: "gray",
            my: 2,
            p: 2,
            borderRadius: 2,
            justifyContent: "space-between",
          }}
        >
          <ul style={{ listStyle: "none", fontSize: 14 }}>
            <li>Nama Lokasi</li>
            <li>Alamat</li>
            <li>Kota/Kecamatan</li>
            <li>Kode Pos</li>
            <li>Pinpoint</li>
          </ul>
          <ul style={{ listStyle: "none", width: "310px", fontSize: 14 }}>
            <li
              style={{ display: "flex", alignItems: "center", gap: 10 }}
              className="flex gap-3 items-center"
            >
              <b>Fesyen Store</b>
            </li>
            <li>Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan</li>
            <li>Kota Tangerang Selatan, Kec. Ciputat</li>
            <li>15413</li>
            <li>Pinpoint</li>
          </ul>
          <Box sx={{ display: "flex", gap: 1 }}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-600">
              <DeleteIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-600">
              <EditNoteIcon />
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Lokasi;
