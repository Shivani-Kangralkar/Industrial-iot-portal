import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const MainBody = () => {
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen);

  console.log("isSidebarOpen", isMenuOpen);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", mt: 2, width: "auto" }}>
        <SideBar />
        {<Outlet />}
      </Box>
    </>
  );
};

export default MainBody;
