import { Button } from "@/components/ui/button";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const PinLocations = () => {
  return (
    <>
      <div>
        <div>
          <b className="text-xl">Tentukan titik pinpoint lokasi kamu</b>
          <p>Pinpoint Lokasi</p>
          <p>Tandai lokasi untuk mempermudah permintaan pickup kurir</p>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 350, width: 470 }}
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
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <Button variant={"blue"} className="px-8">
            Pilih Lokasi & Lanjut Isi Alamat
          </Button>
        </div>
      </div>
    </>
  );
};

export default PinLocations;
