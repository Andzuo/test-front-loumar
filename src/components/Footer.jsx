import React from "react";
import { Box, Typography, styled } from "@mui/material";
import AppLogo from "./icons/appLogo";

const FooterContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   width: "100%",
   height: "298.47px",
   padding: "64px 0 48px 0",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   gap: "32px",
   boxSizing: "border-box",
   backgroundColor: theme.palette.primary.main,
   [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: "32px 16px",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   width: "15%",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   gap: "16px",
   "& p": {
      fontSize: "16px",
      color: "#fff",
   },
}));
const Footer = () => {
   return (
      <FooterContainer>
         <AppLogo />
         <TextContainer>
            <Typography variant="p" component="p" color="textSecondary">
               Endereço
            </Typography>
            <Typography variant="p" component="p" color="textSecondary">
               Av. Brasil, 74 - Foz do Iguaçu - CEP 85851-000
            </Typography>
         </TextContainer>
      </FooterContainer>
   );
};

export default Footer;
