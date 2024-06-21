/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SemuaKategori = [
  {
    title: "Audio, Kamera & Elektronik",
    value: "audio",
  },
  {
    title: "Buku",
    value: "buku",
  },
  {
    title: "Dapur",
    value: "dapur",
  },
  {
    title: "Fashion Muslim",
    value: "fashion muslim",
  },
  {
    title: "Fashion Pria",
    value: "fashion pria",
  },
  {
    title: "Fashion Wanita",
    value: "fashion wanita",
  },
];
const Urutkan = [
  {
    title: "Terakhir Diubah",
    value: "terakhir diubah",
  },
  {
    title: "Terlaris",
    value: "terlaris",
  },
  {
    title: "Kurang Diminati",
    value: "kurang diminati",
  },
  {
    title: "Harga Tertinggi",
    value: "harga tertinggi",
  },
  {
    title: "Harga Terendah",
    value: "harga terendah",
  },
  {
    title: "Stok Terbanyak",
    value: "stok terbanyak",
  },
  {
    title: "Stok Tersedikit",
    value: "stok tersedikit",
  },
];

const FormProduct = () => {
  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [selectedSort, setSelectedSort] = React.useState("");

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event: any) => {
    setSelectedSort(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 3,
          px: 2,
          width: "100%",
        }}
      >
        <Box sx={{ position: "relative", width: "30%" }}>
          <TextField
            size="small"
            placeholder="Search Product"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { pl: 1 }, // To match the padding-left of `pl-9` class
            }}
          />
        </Box>
        <Box sx={{ width: "35%" }}>
          <FormControl size="small" fullWidth>
            <InputLabel>Semua Kategori</InputLabel>
            <Select
              multiple
              value={selectedCategory}
              onChange={handleCategoryChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {SemuaKategori.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Checkbox
                    checked={selectedCategory.indexOf(item.value as never) > -1}
                  />
                  <ListItemText primary={item.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "30%" }}>
          <FormControl size="small" fullWidth>
            <InputLabel>Urutkan</InputLabel>
            <Select
              value={selectedSort}
              onChange={handleSortChange}
              displayEmpty
            >
              {Urutkan.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default FormProduct;
