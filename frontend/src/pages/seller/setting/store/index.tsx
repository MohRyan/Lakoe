import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import Inform from "./components/Inform";
import Lokasi from "./components/lokasi";
import TemplatePesan from "./components/templatePesan";
import { getStore } from "@/lib/api/call/storeApi";

function CustomTabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
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

export interface IStore {
  Id: string;
  bannerAttachment?: string;
  description?: string;
  domain?: string;
  logoAttactment?: string;
  name?: string;
  slogan?: string;
  userId: string;
}

const Store = () => {
  const [value, setValue] = React.useState(0);
  const [dataStore, setDataStore] = React.useState<IStore>();

  const getStoreUser = async () => {
    const storeUser = await getStore();
    console.log("🚀 ~ getStoreUser ~ storeUser:", storeUser.data);
    setDataStore(storeUser.data);
  };

  useEffect(() => {
    getStoreUser();
  }, []);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 1.5,
          p: 2,
          bgcolor: "white",
          borderRadius: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          {dataStore?.name}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ color: "black" }}
                label="Informasi"
                {...a11yProps(0)}
              />
              <Tab sx={{ color: "black" }} label="Lokasi" {...a11yProps(1)} />
              <Tab
                sx={{ color: "black" }}
                label="Template Pesan"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Inform dataStore={dataStore!} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Lokasi />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TemplatePesan />
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Store;
