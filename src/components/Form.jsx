import React, { useState } from "react";
import { Box, TextField, Typography, Button, styled } from "@mui/material";
import SendIcon from "./icons/SendIcon";

const FormContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   width: "50%",
   margin: "0 auto",
   boxSizing: "border-box",
   marginBottom: "7.1875rem",
   [theme.breakpoints.down("lg")]: {
      width: "100%",
   },
   [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
      width: "100%",
   },
}));

const FormFieldContainer = styled(Box)(({ theme }) => ({
   marginBottom: "1.5rem",
   width: "70%",
   display: "flex",
   flexDirection: "column",
   "& .MuiInputBase-root": {
      height: "auto",
   },
   [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5rem",
   },
}));

const CustomLabel = styled(Typography)(({ theme }) => ({
   fontWeight: "semibold",
   marginBottom: "0.5rem",
   color: "#344054",
}));

const FormButtonContainer = styled(Box)(({ theme }) => ({
   width: "70%",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   marginTop: "1rem",
   textTransform: "none",
   outline: "none",
   "& button": {
      width: "100%",
      color: "#fff",
      padding: "1rem 1.25rem",
      borderRadius: "0.5rem",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   width: "100%",
   textAlign: "center",
   [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "1.25rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
}));

const Form = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      alert(
         `Muito Obrigado! Em breve nossa equipe irá entrar em contato\n\nNome: ${formData.firstName}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
      );
   };
   return (
      <FormContainer component="form" onSubmit={handleSubmit}>
         <TextContainer>
            <Typography color="primary">Entre em Contato</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
               Fale com a nossa equipe especializada e adquira nossos serviços
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
               Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae
               convallis. Orci fringilla imperdiet malesuada ullamcorper
               facilisis.
            </Typography>
         </TextContainer>
         <FormFieldContainer>
            <CustomLabel variant="body1">Primeiro Nome</CustomLabel>
            <TextField
               value={formData.firstName}
               onChange={handleChange}
               variant="outlined"
               name="firstName"
               required
            />
         </FormFieldContainer>
         <FormFieldContainer>
            <CustomLabel>Email</CustomLabel>
            <TextField
               value={formData.email}
               onChange={handleChange}
               variant="outlined"
               name="email"
               type="email"
               required
            />
         </FormFieldContainer>
         <FormFieldContainer>
            <CustomLabel>Mensagem</CustomLabel>
            <TextField
               value={formData.message}
               onChange={handleChange}
               variant="outlined"
               name="message"
               multiline
               rows={4}
               required
            />
         </FormFieldContainer>
         <FormButtonContainer>
            <Button
               startIcon={<SendIcon />}
               variant="contained"
               color="tertiary"
               type="submit"
               sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
               }}
            >
               Enviar mensagem
            </Button>
         </FormButtonContainer>
      </FormContainer>
   );
};

export default Form;
