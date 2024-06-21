import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Side = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: {
      active: <HomeIcon />,
      nonActive: <HomeOutlinedIcon />,
    },
  },
  {
    title: "Produk",
    link: "/admin/product",
    icon: {
      active: <AllInboxIcon />,
      nonActive: <AllInboxOutlinedIcon />,
    },
  },
  {
    title: "Pesanan",
    link: "/admin/order",
    icon: {
      active: <ShoppingBagIcon />,
      nonActive: <ShoppingBagOutlinedIcon />,
    },
  },
  {
    title: "Pengaturan",
    link: "/admin/setting/store",
    icon: {
      active: <SettingsIcon />,
      nonActive: <SettingsOutlinedIcon />,
    },
    child: [
      {
        title: "Store",
        link: "/admin/setting/store",
      },
      {
        title: "Delivery",
        link: "/admin/setting/delivery",
      },
      {
        title: "Payment",
        link: "/admin/setting/payment",
      },
    ],
  },
];

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionToggle = (isExpanded: boolean) => {
    setExpanded(isExpanded ? !!"pengaturan" : false);
  };

  const isSettingsActive = () => {
    return location.pathname.startsWith("/admin/setting");
  };

  React.useEffect(() => {
    if (isSettingsActive()) {
      setExpanded(!!"pengaturan");
    } else {
      setExpanded(false);
    }
  }, [location]);

  const handleAccordionClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (expanded === !!"pengaturan") {
      handleAccordionToggle(false);
    } else {
      navigate("/admin/setting/store");
      handleAccordionToggle(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        py: 2,
        px: 3,
        position: "fixed",
        bgcolor: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {Side.map((item, index) => (
          <React.Fragment key={index}>
            {item.title === "Pengaturan" ? (
              <Accordion
                sx={{
                  boxShadow: "none",
                }}
                expanded={expanded === !!"pengaturan"}
                onChange={(event, isExpanded) =>
                  handleAccordionToggle(isExpanded)
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  onClick={handleAccordionClick}
                >
                  <Box
                    sx={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {isSettingsActive()
                      ? item.icon.active
                      : item.icon.nonActive}
                    <Typography
                      sx={{
                        fontWeight: isSettingsActive() ? "bold" : "normal",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", gap: 1, flexDirection: "column" }}
                >
                  {item.child?.map((child, childIndex) => (
                    <NavLink
                      to={child.link}
                      key={childIndex}
                      style={{ textDecoration: "none" }}
                    >
                      {({ isActive: isChildActive }) => (
                        <Typography
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            marginLeft: 2,
                          }}
                        >
                          {isChildActive ? (
                            <Box
                              sx={{
                                width: 15,
                                height: 15,
                                borderRadius: "100%",
                                bgcolor: "black",
                              }}
                            ></Box>
                          ) : (
                            <Box
                              sx={{
                                width: 15,
                                height: 15,
                                borderRadius: "100%",
                                bgcolor: "black",
                                opacity: 0,
                              }}
                            ></Box>
                          )}
                          <Typography
                            sx={{
                              fontWeight: isChildActive ? "bold" : "normal",
                            }}
                          >
                            {child.title}
                          </Typography>
                        </Typography>
                      )}
                    </NavLink>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              <NavLink to={item.link} style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Box
                    sx={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      my: 1,
                      pl: 2,
                    }}
                    onClick={() => setExpanded(false)}
                  >
                    {isActive ? item.icon.active : item.icon.nonActive}
                    <Typography
                      sx={{ fontWeight: isActive ? "bold" : "normal" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                )}
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </Box>

      <Box>
        <NavLink
          to={"/admin/profile"}
          style={{
            textDecoration: "none",
            display: "flex",
          }}
        >
          {({ isActive: isChildActive }) => (
            <Typography
              sx={{
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginLeft: 2,
              }}
            >
              {!isChildActive ? (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, pl: 2 }}
                >
                  <AccountCircleOutlinedIcon />
                  <Typography>Profile</Typography>
                </Box>
              ) : (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, pl: 2 }}
                >
                  <AccountCircleIcon />
                  <Typography sx={{ fontWeight: "bold" }}>Profile</Typography>
                </Box>
              )}
            </Typography>
          )}
        </NavLink>
      </Box>
    </Box>
  );
};

export default SideBar;
