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
   marginBottom: "115px",
   [theme.breakpoints.down("sm")]: {
      padding: "8px",
   },
}));

const FormFieldContainer = styled(Box)(({ theme }) => ({
   marginBottom: "24px",
   width: "70%",
   display: "flex",
   flexDirection: "column",
   "& .MuiInputBase-root": {
      height: "auto",
   },
   [theme.breakpoints.down("sm")]: {
      marginBottom: "8px",
   },
}));

const CustomLabel = styled(Typography)(({ theme }) => ({
   fontWeight: "bold",
   marginBottom: "8px",
}));

const FormButtonContainer = styled(Box)(({ theme }) => ({
   width: "70%",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   marginTop: "16px",
   textTransform: "none",
   outline: "none",
   "& button": {
      width: "100%",
      color: "#fff",
      padding: "16px 20px",
      borderRadius: "8px",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   width: "100%",
   paddingLeft: "32px",
   textAlign: "center",
   [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
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
            <CustomLabel>Primeiro Nome</CustomLabel>
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
            >
               Enviar mensagem
            </Button>
         </FormButtonContainer>
      </FormContainer>
   );
};

export default Form;
