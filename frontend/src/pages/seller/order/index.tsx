import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import FormOrder from "./components/FormOrder";
import OrderCart from "./components/OrderCart";
import { dataPesanan } from "./dataPesanan";

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
const Order = () => {
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
          maxWidth: "770px",
          p: 1.5,
          bgcolor: "white",
          borderRadius: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Semua" {...a11yProps(0)} />
              <Tab
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                label="Belum Dibayar"
                {...a11yProps(1)}
              />
              <Tab
                label="Pesanan Baru"
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                {...a11yProps(2)}
              />
              <Tab
                label="Siap Dikirim"
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                {...a11yProps(3)}
              />
              <Tab
                label="Dalam Pengiriman"
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                {...a11yProps(4)}
              />
              <Tab
                label="Pesanan Selesai"
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                {...a11yProps(5)}
              />
              <Tab
                label="Dibatalkan"
                icon={
                  <Box
                    sx={{
                      bgcolor: "blue",
                      color: "white",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Box>
                }
                iconPosition="start"
                {...a11yProps(6)}
              />
            </Tabs>
          </Box>
          <Box>
            <FormOrder />
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              {dataPesanan.map((item, index) => (
                <OrderCart props={item} key={index} />
              ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Order;
