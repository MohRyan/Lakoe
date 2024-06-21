import { Button } from "@/components/ui/button";
import React from "react";

const DeleteLocations = () => {
  return (
    <>
      <div>
        <b>Hapus Alamat</b>
        <p>
          Apakah kamu yakin untuk menghapus <b>Rumah</b>? Kamu tidak akan dapat
          mengembalikan alamat yang sudah dihapus
        </p>
        <div className="flex justify-end gap-3 mt-5">
          <Button variant={"product"} className="px-8">
            Batalkan
          </Button>
          <Button variant={"blue"} className="px-8">
            Ya, Hapus
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeleteLocations;
