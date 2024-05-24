import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainBody = () => {
  return (

    <>
      <Box>
        <Header />
        <Box sx={{display: "flex", mt: 2, width: "w-auto"}}>
          <SideBar />
          {
            <Outlet />
          }
        </Box>
      </Box>
    </>
  );
};

export default MainBody;
