import { Button } from "@/components/ui/button";
import React from "react";

const Deletetemplate = () => {
  return (
    <>
      <div>
        <b>Hapus Template Pesan</b>
        <p>
          Apakah kamu yakin untuk menghapus <b>Nama / Judul Template</b>? Sebab,
          kamu tidak dapat mengembalikan template pesan yang sudah dihapus.
        </p>
      </div>
      <div className="flex justify-end gap-3">
        <Button variant={"product"}>Batalkan</Button>
        <Button variant={"blue"}>Ya, Hapus</Button>
      </div>
    </>
  );
};

export default Deletetemplate;
