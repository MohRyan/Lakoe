import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const SemuaKategori = [
  {
    title: "GoSend",
    value: "gosend",
  },
  {
    title: "GrabExpress",
    value: "grabexpress",
  },
  {
    title: "AnterAja",
    value: "anteraja",
  },
  {
    title: "JNE",
    value: "JNE",
  },
  {
    title: "J&T",
    value: "J&T",
  },
  {
    title: "LionParcel",
    value: "lionparcel",
  },
  {
    title: "NinjaXpress",
    value: "ninjaxpress",
  },
  {
    title: "Pos Indonesia",
    value: "posindonesia",
  },
];
const Urutkan = [
  {
    title: "Paling Baru",
    value: "palingbaru",
  },
  {
    title: "Paling Lama",
    value: "palinglama",
  },
  {
    title: "Respons Tercepat",
    value: "responstercepat",
  },
  {
    title: "Respons Terlama",
    value: "responsterlama",
  },
];

const FormOrder = () => {
  const [selectedValues, setSelectedValues] = React.useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSelectedValues(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChangeUrutkan = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mt: 2,
          px: 3,
        }}
      >
        <Box
          sx={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
            }}
          />
          <TextField
            size="small"
            placeholder="Cari Pesanan"
            variant="outlined"
            fullWidth
          />
        </Box>
        <div>
          <FormControl size="small" sx={{ width: 250 }}>
            <InputLabel>Kurir</InputLabel>
            <Select
              multiple
              value={selectedValues}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {SemuaKategori.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Checkbox
                    checked={selectedValues.indexOf(item.value as never) > -1}
                  />
                  <ListItemText primary={item.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl size="small" sx={{ width: 250 }}>
            <InputLabel>Urutkan</InputLabel>
            <Select
              value={selectedValue}
              onChange={handleChangeUrutkan}
              displayEmpty
            >
              {Urutkan.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>
    </>
  );
};

export default FormOrder;
