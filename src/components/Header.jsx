import React, { useState } from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux-store/ToggleSlice";
import { sidebarOpen } from "../redux-store/ToggleSlice";


function Header() {
  const theme = useTheme();


  const dispatch = useDispatch()

  const toggleMenuHander = () => {
    console.log("click")
    dispatch(toggleMenu())
    dispatch(sidebarOpen())
  }





  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#ffffff", color: "#000000" ,}}
    >
      <Toolbar>
      <MenuOutlinedIcon fontSize="small"sx={{cursor: "pointer"}} onClick={()=> toggleMenuHander()}/>
        <Box display="flex" alignItems="center" ml="auto">
          <IconButton>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.light,
                width: 30,
                height: 30,
              }}
            >
              <NotificationsIcon fontSize="small" />
            </Avatar>
          </IconButton>

          <IconButton>
            <Avatar
              src="/images/img2.png"
              alt="user profile pic"
              sx={{ width: 40, height: 40 }}
            />

            <Box display="flex" flexDirection="column">
              <Typography
                fontWeight="bold"
                sx={{ textAlign: "center", fontSize: "0.750rem", mt: 2, ml: 2 }}
              >
                Krishna Kumar
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  textAlign: "start",
                  fontSize: "0.550rem",
                  ml: 2,
                  color: theme.palette.primary.light,
                }}
              >
                View Profile
              </Typography>
            </Box>
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{ color: theme.palette.primary.light , ml:2}}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
