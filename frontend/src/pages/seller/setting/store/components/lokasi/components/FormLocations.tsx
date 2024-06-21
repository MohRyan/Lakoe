import { TextField } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PinLocations from "./PinLocations";

const FormLocations = () => {
  return (
    <>
      <div>
        <div>
          <b>Tambah lokasi baru</b>
          <div className="flex flex-col mb-2">
            <p>
              Nama Lokasi <span className="text-red-500">*</span>
            </p>
            <TextField size="small" placeholder="Cth. Toko Alamanda" />
          </div>
          <div className="flex flex-col mb-2">
            <p>
              Kota / Kecamatan <span className="text-red-500">*</span>
            </p>
            <TextField size="small" placeholder="Cari Kota/Kecamatan" />
          </div>
          <div className="flex flex-col mb-2">
            <p>
              Kode Pos <span className="text-red-500">*</span>
            </p>
            <TextField size="small" placeholder="Masukan 5 digit kode pos" />
          </div>
          <div className="flex flex-col mb-2">
            <p>
              Alamat Lengkap <span className="text-red-500">*</span>
            </p>
            <TextField
              size="small"
              multiline
              rows={3}
              placeholder="Tuliskan alamat lengkap toko"
            />
          </div>
          <div>
            <b>Pinpoint Lokasi</b>
            <p>Tandai lokasi untuk mempermudah permintaan pickup kurir</p>
            <Dialog>
              <DialogTrigger>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: 150, width: 470 }}
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
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <PinLocations />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex justify-end gap-3 mt-2">
            <Button variant={"product"} className="px-8">
              Batalkan
            </Button>
            <Button variant={"blue"} className="px-8">
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLocations;
