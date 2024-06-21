import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import FormTemplate from "./components/FormTemplate";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

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

const TemplatePesan = () => {
  const [openTambahTemplate, setOpenTambahTemplate] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  return (
    <>
      <div>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b className="text-xl">Daftar Template Pesan</b>
            <Button
              variant="contained"
              onClick={() => setOpenTambahTemplate(true)}
            >
              Buat Template
            </Button>
            <Modal
              open={openTambahTemplate}
              onClose={() => setOpenTambahTemplate(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormTemplate />
              </Box>
            </Modal>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 10,
              border: "1px solid",
              borderColor: "lightgray",
              my: 2,
              p: 2,
              borderRadius: 2,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <b>Judul Pesan</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quam maxime quisquam voluptates accusantium, blanditiis rem quo
                sed saepe praesentium.
              </p>
            </Box>
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
                        Hapus Template
                      </Typography>
                      <p>
                        Apakah kamu yakin untuk menghapus <b>Template</b>? Kamu
                        tidak akan dapat mengembalikan Template yang sudah
                        dihapus
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
        </Box>
      </div>
    </>
  );
};

export default TemplatePesan;
