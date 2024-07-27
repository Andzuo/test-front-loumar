import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const SectionContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   padding: "40px 352px",
   width: "95%",
   margin: "0 auto",
   [theme.breakpoints.down("xl")]: {
      flexDirection: "column",
      padding: "16px",
   },
}));

const BoxContent = styled(Box)(({ theme }) => ({
   display: "flex",
   width: "100%",
   padding: "30px",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   border: "1px solid #E0E0E0",
   borderRadius: "16px",
}));

const ActionPage = () => {
   return (
      <SectionContainer>
         <BoxContent>
            <Typography variant="h6" gutterBottom>
               Ainda tem dúvidas sobre Pizza?
            </Typography>
            <Typography
               sx={{ margin: "16px 0" }}
               variant="body2"
               color="textSecondary"
            >
               Entre em contato direto com nossos atendentes.
            </Typography>

            <Button
               startIcon={<WhatsAppIcon />}
               variant="contained"
               color="whatsappButton1"
               sx={{ color: "#fff" }}
            >
               Entrar em contato
            </Button>
         </BoxContent>
      </SectionContainer>
   );
};

export default ActionPage;
