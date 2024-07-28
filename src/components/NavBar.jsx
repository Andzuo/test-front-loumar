import React, { useState } from "react";
import {
   AppBar,
   Box,
   Button,
   IconButton,
   Link,
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
   height: "8.125rem",
   display: "flex",
   justifyContent: "center",
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   width: "100%",
   [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "center",
   },
}));

const CustomBoxLogo = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   maxWidth: "12.5rem",
   width: { xs: "6.25rem", sm: "9.375rem", md: "12.5rem" },
   [theme.breakpoints.down("md")]: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
   },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
   "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
   },
   "& .MuiTab-root": {
      color: "#fff",
      fontSize: "0.875rem",
      position: "relative",
      "&:hover": {
         bottom: 0,
         left: 0,
         borderBottom: "0.125rem solid #fff",
      },
   },
   display: { xs: "none", md: "flex" },
}));

const StyledLink = styled(Link)(({ theme }) => ({
   textDecoration: "none",
   color: "inherit",
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
         <StyledToolBar>
            <IconButton
               edge="start"
               color="inherit"
               aria-label="menu"
               onClick={handleMenuOpen}
               sx={{
                  display: { xs: "flex", md: "none" },
                  position: "absolute",
                  left: "1rem",
               }}
            >
               <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            <CustomBoxLogo>
               <AppLogo />
            </CustomBoxLogo>
            <StyledTabs sx={{ display: { xs: "none", md: "flex" } }}>
               <Tab label="BLOCO 1" href="#bloco1" />
               <Tab label="FAQ" href="#faq" />
               <Tab label="CONTATO" href="#form" />
            </StyledTabs>
            <StyledLink
               href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
               target="_blank"
               rel="noopener noreferrer"
               sx={{ display: { xs: "none", md: "flex" } }}
            >
               <Button
                  startIcon={<WhatsAppIcon />}
                  variant="contained"
                  color="whatsappButton2"
                  sx={{ textTransform: "none" }}
               >
                  Entrar em contato
               </Button>
            </StyledLink>
            <Menu
               anchorEl={anchorEl}
               open={isMenuOpen}
               onClose={handleMenuClose}
               sx={{ display: { xs: "block", md: "none" } }}
            >
               <MenuItem onClick={handleMenuClose}>
                  <a
                     href="#bloco1"
                     style={{ textDecoration: "none", color: "inherit" }}
                  >
                     BLOCO 1
                  </a>
               </MenuItem>
               <MenuItem onClick={handleMenuClose}>
                  <a
                     href="#faq"
                     style={{ textDecoration: "none", color: "inherit" }}
                  >
                     FAQ
                  </a>
               </MenuItem>
               <MenuItem onClick={handleMenuClose}>
                  <a
                     href="#form"
                     style={{ textDecoration: "none", color: "inherit" }}
                  >
                     CONTATO
                  </a>
               </MenuItem>
               <MenuItem onClick={handleMenuClose}>
                  <StyledLink
                     href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Button
                        startIcon={<WhatsAppIcon />}
                        variant="contained"
                        color="whatsappButton2"
                     >
                        Entrar em contato
                     </Button>
                  </StyledLink>
               </MenuItem>
            </Menu>
         </StyledToolBar>
      </StyledAppBar>
   );
};

export default NavBar;
