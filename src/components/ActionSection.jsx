import styled from "@emotion/styled";
import { Box, Button, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const SectionContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   padding: "2.5rem 22rem",
   width: "95%",
   margin: "0 auto",
   [theme.breakpoints.down("xl")]: {
      flexDirection: "column",
      padding: "1rem",
   },
}));

const BoxContent = styled(Box)(({ theme }) => ({
   display: "flex",
   width: "100%",
   padding: "1.875rem",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   border: "1px solid #E0E0E0",
   borderRadius: "1rem",
}));

const StyledLink = styled(Link)(({ theme }) => ({
   textDecoration: "none",
   color: "inherit",
}));

const ActionPage = () => {
   return (
      <SectionContainer>
         <BoxContent>
            <Typography variant="h6" gutterBottom>
               Ainda tem dúvidas sobre Pizza?
            </Typography>
            <Typography
               sx={{ margin: "1rem 0" }}
               variant="body2"
               color="textSecondary"
            >
               Entre em contato direto com nossos atendentes.
            </Typography>

            <StyledLink
               href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Button
                  startIcon={<WhatsAppIcon />}
                  variant="contained"
                  color="whatsappButton1"
                  sx={{ color: "#fff", textTransform: "none" }}
               >
                  Entrar em contato
               </Button>
            </StyledLink>
         </BoxContent>
      </SectionContainer>
   );
};

export default ActionPage;
