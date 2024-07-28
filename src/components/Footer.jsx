import React from "react";
import { Box, Typography, styled } from "@mui/material";
import AppLogo from "./icons/appLogo";

const FooterContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   width: "100%",
   height: "18.653125rem",
   padding: "4rem 0",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   gap: "2rem",
   boxSizing: "border-box",
   backgroundColor: theme.palette.primary.main,
   [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: "2rem 1rem",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   width: "100%",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   gap: "1rem",
   "& p": {
      fontSize: "1rem",
      color: "#fff",
   },
}));

const Footer = () => {
   return (
      <FooterContainer>
         <AppLogo />
         <TextContainer>
            <Typography variant="body1" component="p" color="textSecondary">
               Endereço
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
               Av. Brasil, 74 - Foz do Iguaçu - CEP 85851-000
            </Typography>
         </TextContainer>
      </FooterContainer>
   );
};

export default Footer;
