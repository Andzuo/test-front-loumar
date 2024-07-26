import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import AppLogo from "./icons/appLogo";

const NavBar = () => {
   return (
      <AppBar sx={{ color: "primary" }}>
         <Toolbar>
            <AppLogo />
         </Toolbar>
      </AppBar>
   );
};

export default NavBar;
