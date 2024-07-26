import { AppBar, Button, styled, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import AppLogo from "./icons/appLogo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
   color: theme.palette.primary.contrastText,
   height: 130,
   display: "flex",
   justifyContent: "center",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
   "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
   },
   "& .MuiTab-root": {
      color: "#fff",
      fontSize: "14px",
      position: "relative",
      "&:hover": {
         bottom: 0,
         left: 0,
         borderBottom: "2px solid #fff",
      },
   },
}));

const NavBar = () => {
   return (
      <StyledAppBar>
         <Toolbar
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginX: "352px",
               marginY: "32px",
            }}
         >
            <AppLogo />
            <StyledTabs>
               <Tab label="BLOCO 1" />
               <Tab label="FAQ" />
               <Tab label="CONTATO" />
            </StyledTabs>
            <Button
               startIcon={<WhatsAppIcon />}
               variant="contained"
               color="whatsappButton2"
            >
               Entrar em contato
            </Button>
         </Toolbar>
      </StyledAppBar>
   );
};

export default NavBar;
