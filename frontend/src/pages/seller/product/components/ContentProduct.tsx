import React, { FC, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Checkbox } from "@mui/material";

export interface IProduct {
  id?: number;
  image?: string;
  name_product?: string;
  price?: string;
  stok?: string;
  no_resi?: string;
  isActive: boolean;
}

const dataProduct = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSludorUvVpQvfAc51v4RH8rqCLvEioh9SwVh2837VizA&s",
    name_product: "KAOS BASIC COTTON KENARI - DUSTY ROSE [ COTTON COMBED 30S ]",
    price: "59.000",
    stok: "20",
    no_resi: "0219AKD192",
    isActive: true,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVI6SGM0P0L7_xUe-5JrXa4UYgMC7YTmMcfA&s",
    name_product:
      "KAOS BASIC POLOS - BUBLE GUM COMBED BIOWASH 30s Kaos Polos - S",
    price: "55.000",
    stok: "15",
    no_resi: "0219AKD193",
    isActive: true,
  },
  {
    id: 3,
    image:
      "https://www.elfs-shop.com/~img/ok_cotton_side_double_line_px_0-30531-3073_608-t2494_81.webp",
    name_product:
      "KAOS BASIC COTTON KENARI - BRONZE GREEN [ COTTON COMBED 30S ] - S",
    price: "58.000",
    stok: "11",
    no_resi: "0219AKD194",
    isActive: false,
  },
  {
    id: 4,
    image:
      "https://karambeeakonveksi.com/wp-content/uploads/2016/10/kaos_raglan_01.png",
    name_product:
      "KAOS BASIC- FRAGILE SPROUT [ COMBED BIOWASH 30s OEKO-TEX]| Kaos Polos - XXL",
    price: "62.000",
    stok: "31",
    no_resi: "0219AKD195",
    isActive: true,
  },
];

interface ICheck {
  value: string;
}

const ContentProduct: FC<ICheck> = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const handleCheked = () => setChecked(!checked);
  return (
    <>
      <div>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <b>{dataProduct.length} Produk</b>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <p>Pilih Semua</p> <Checkbox onClick={handleCheked} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {dataProduct.map((item, index: number) => (
            <>
              <ProductCard
                key={index}
                data={item}
                value={value}
                checked={checked}
                setChecked={setChecked}
              />
            </>
          ))}
        </Box>
      </div>
    </>
  );
};

export default ContentProduct;
