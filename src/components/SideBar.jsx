import React, { useState } from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Collapse,
  Avatar,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";

import { sidebarClose } from "../redux-store/ToggleSlice";
import { useLocation,useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen);
  const isSidebarOpen = useSelector((state) => state.toggle.isSidebarOpen);
  const location =  useLocation()
  const navigate = useNavigate()
  
  if (!isMenuOpen) return null;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickUser = () => {

    if (location.pathname !== "/user_Management") {
      navigate("/user_Management");
    }
  };

  return (
    <Drawer 
      open={isSidebarOpen} onClose={sidebarClose}
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: "start", fontSize: "0.750rem", mt: 2, ml: 2 }}
        >
          MENU
        </Typography>

        <List>
          <ListItem
            button
            onClick={handleClick}
            sx={{ justifyContent: "center" }}
          >
            <Box
              display="flex"
              sx={{
                color: theme.palette.primary.blue,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                }}
              >
                <SettingsOutlinedIcon
                  fontSize="small"
                  sx={{ color: theme.palette.primary.blue }}
                />
              </Avatar>

              <ListItem button onClick={handleClick}>
                <ListItemText
                  primary="User Management"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: "bold",
                    },
                  }}
                />
              </ListItem>

              {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ ml: 4 }}>
              <Box
                display="flex"
                sx={{
                  color: theme.palette.primary.blue,
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                  }}
                >
                  <SettingsOutlinedIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.blue }}
                  />
                </Avatar>

                <ListItem
                  button
                  onClick={handleClick}
                >
                  <ListItemText
                    primary="Users"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontWeight: "bold",
                      },
                    }}
                    onClick={handleClickUser}
                  />
                </ListItem>
              </Box>

              <Box
                display="flex"
                sx={{
                  color: theme.palette.primary.blue,
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}

              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                  }}
                >
                  <SettingsOutlinedIcon
                    fontSize="small"
                    sx={{ color: theme.palette.primary.blue }}
                  />
                </Avatar>

                <ListItem button onClick={handleClick}>
                  <ListItemText
                    primary="Groups"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
              </Box>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
