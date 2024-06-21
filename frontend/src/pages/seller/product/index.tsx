import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FormProduct from "./components/FormProduct";
import ContentProduct from "./components/ContentProduct";
import { Link } from "react-router-dom";

function CustomTabPanel(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Product = () => {
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Daftar Produk
          </Typography>
          <Link to={"/admin/product/addproduct"}>
            <Button variant="contained">
              <ControlPointIcon sx={{ mr: 0.5 }} /> Tambah Produk
            </Button>
          </Link>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab sx={{ color: "black" }} label="Semua" {...a11yProps(0)} />
              <Tab sx={{ color: "black" }} label="Aktif" {...a11yProps(1)} />
              <Tab sx={{ color: "black" }} label="Nonaktif" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box>
            <FormProduct />
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ContentProduct value={"semua"} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ContentProduct value={"aktif"} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <ContentProduct value={"nonaktif"} />
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Product;
