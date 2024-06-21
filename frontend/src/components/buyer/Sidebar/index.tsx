import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface MenuItemType {
  label: string;
  subItems?: MenuItemType[];
}

const menuItems: MenuItemType[] = [
  {
    label: "Bavullar ve Çantalar",
  },
  {
    label: "Bebek ve Küçük Çocuk Ürünleri",
  },
  {
    label: "Büro Malzemeleri",
    subItems: [
      { label: "Dosyalama ve Organizasyon" },
      { label: "Genel Ofis Malzemeleri" },
      {
        label: "Kağıt İşleri",
        subItems: [{ label: "Kitap Aksesuarları" }],
      },
      { label: "Laptop Minderleri" },
    ],
  },
  {
    label: "Din ve Törenler",
  },
  {
    label: "Elektronik",
  },
];
const Sidebar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<MenuItemType | null>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    item?: MenuItemType
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenSubMenu(item || null);
  };

  const handleSubClick = (
    event: React.MouseEvent<HTMLElement>,
    item?: MenuItemType
  ) => {
    setSubAnchorEl(event.currentTarget);
    setOpenSubMenu(item || null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setOpenSubMenu(null);
  };

  const renderMenuItems = (items: MenuItemType[], isSubMenu: boolean = false) =>
    items.map((item) => (
      <ListItem
        key={item.label}
        onClick={(event) =>
          item.subItems ? handleClick(event, item) : handleClose()
        }
        onMouseEnter={(event) => item.subItems && handleSubClick(event, item)}
        onMouseLeave={handleClose}
      >
        <ListItemText primary={item.label} />
        {item.subItems && openSubMenu === item && <ArrowRightIcon />}
      </ListItem>
    ));

  return (
    <div>
      <List component="nav">{renderMenuItems(menuItems)}</List>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {openSubMenu && renderMenuItems(openSubMenu.subItems || [], true)}
        </Menu>
      </Popover>
      <Popover
        open={Boolean(subAnchorEl)}
        anchorEl={subAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {openSubMenu &&
            openSubMenu.subItems &&
            openSubMenu.subItems.length > 0 &&
            renderMenuItems(openSubMenu.subItems)}
        </Menu>
      </Popover>
    </div>
  );
};

export default Sidebar;
