// import TextField from "@mui/material/TextField";
// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import InformasiProduct from "./components/InformasiProduct";
import DetailProduct from "./components/DetailProduct";
import Harga from "./components/Harga";
import PengelolaanProduct from "./components/PengelolaanProduct";
import BeratPengiriman from "./components/BeratPengiriman";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import VariantProduct from "./components/VariantProduct";

const schema = yup.object({
  name_product: yup.string().required("Tidak boleh kosong!!, harap di isi"),
  url_product: yup.string().required("Tidak boleh kosong!!, harap di isi"),
  deskripsi: yup.string().required("Massukkan deskripsi produk"),
  // file: yup
  //   .object()
  //   .shape({
  //     name: yup.string().required("hhhhhh"),
  //   })
  //   .required("File required"),
  price: yup.string().required("Harga barang tidak boleh kosong atau 0"),
  stok_product: yup.string().required("Masukkan stok produk minimal 1"),
  SKU: yup.string().required("Tidak boleh kosong!!, harap di isi"),
  berat: yup.string().required("Massukkan berat produk"),
  panjang: yup.string().required(),
  lebar: yup.string().required(),
  tinggi: yup.string().required(),
});

export interface IFormInput {
  name_product: string;
  url_product: string;
  deskripsi: string;
  // file?: string;
  price: string;
  stok_product: string;
  SKU: string;
  berat: string;
  panjang: string;
  lebar: string;
  tinggi: string;
}

const AddProduct = () => {
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name_product: "",
      url_product: "",
      deskripsi: "",
      // file: {
      //   name: ""
      // },
      price: "",
      stok_product: "",
      SKU: "",
      berat: "",
      panjang: "",
      lebar: "",
      tinggi: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  // const [data, setData] = useState([{
  //   name_product: "",
  //   url_product: "",
  // }])
  return (
    <>
      <form action="" className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
            }}
          >
            <b style={{ fontSize: 22 }}>Informasi Product</b>
            <InformasiProduct
              control={control}
              name_product="name_product"
              url_product="url_product"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
            }}
          >
            <b style={{ fontSize: 22 }}>Detail Product</b>
            <DetailProduct control={control} deskripsi="deskripsi" />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              bgcolor: "white",
              borderRadius: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <b style={{ fontSize: 22 }}>Varian Product</b>
              <p className="text-gray-500">
                Tambah varian agar pembeli dapat memilih produk yang sesuai,
                yuk!
              </p>
            </div>
            <div>
              <Button className="bg-white text-black border-2 hover:text-white border-black rounded-full">
                <ControlPointIcon /> Tambah Produk
              </Button>
            </div>
            <VariantProduct />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
            }}
          >
            <b style={{ fontSize: 22 }}>Harga</b>
            <Harga control={control} price="price" />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
            }}
          >
            <b style={{ fontSize: 22 }}>Pengelolaan Produk</b>
            <PengelolaanProduct
              control={control}
              stok_product="stok_product"
              SKU="SKU"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
            }}
          >
            <b style={{ fontSize: 22 }}>Berat & Pengiriman</b>
            <BeratPengiriman
              control={control}
              berat="berat"
              panjang="panjang"
              lebar="lebar"
              tinggi="tinggi"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              m: 1.5,
              p: 1.5,
              bgcolor: "white",
              borderRadius: 2,
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box>
              <Button variant={"outlined"}>Preview Halaman Checkout</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button variant={"outlined"}>Batal</Button>
              <Button variant={"contained"}>Simpan</Button>
            </Box>
          </Box>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
