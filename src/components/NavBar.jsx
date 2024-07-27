import React, { useState } from "react";
import {
   AppBar,
   Button,
   IconButton,
   Menu,
   MenuItem,
   styled,
   Tab,
   Tabs,
   Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
   const [anchorEl, setAnchorEl] = useState(null);

   const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   const isMenuOpen = Boolean(anchorEl);

   return (
      <StyledAppBar>
         <Toolbar
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               paddingX: { xs: "16px", sm: "24px", md: "32px", lg: "352px" },
            }}
         >
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "200px",
                  width: { xs: "100px", sm: "150px", md: "200px" },
               }}
            >
               <AppLogo />
            </div>
            <StyledTabs sx={{ display: { xs: "none", md: "flex" } }}>
               <Tab label="BLOCO 1" />
               <Tab label="FAQ" />
               <Tab label="CONTATO" />
            </StyledTabs>
            <Button
               startIcon={<WhatsAppIcon />}
               variant="contained"
               color="whatsappButton2"
               sx={{ display: { xs: "none", md: "flex" } }}
            >
               Entrar em contato
            </Button>
            <IconButton
               edge="start"
               color="inherit"
               aria-label="menu"
               onClick={handleMenuOpen}
               sx={{ display: { xs: "flex", md: "none" } }}
            >
               <MenuIcon />
            </IconButton>
            <Menu
               anchorEl={anchorEl}
               open={isMenuOpen}
               onClose={handleMenuClose}
               sx={{ display: { xs: "block", md: "none" } }}
            >
               <MenuItem onClick={handleMenuClose}>BLOCO 1</MenuItem>
               <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
               <MenuItem onClick={handleMenuClose}>CONTATO</MenuItem>
               <MenuItem onClick={handleMenuClose}>
                  <Button
                     startIcon={<WhatsAppIcon />}
                     variant="contained"
                     color="whatsappButton2"
                  >
                     Entrar em contato
                  </Button>
               </MenuItem>
            </Menu>
         </Toolbar>
      </StyledAppBar>
   );
};

export default NavBar;
