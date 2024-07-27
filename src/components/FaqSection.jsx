import React from "react";
import {
   Box,
   Typography,
   styled,
   Accordion,
   AccordionSummary,
   AccordionDetails,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PizzaImage from "../assets/Icon2.png";

const FAQContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
   maxWidth: "80%",
   padding: "5%",
   width: "100%",
   margin: "0 auto",
   boxSizing: "border-box",
   [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      padding: "16px",
   },
}));

const ImageContainer = styled("div")(({ theme }) => ({
   width: "100%",
   maxWidth: "592px",
   height: "auto",
   borderRadius: "16px",
   overflow: "hidden",
   transition: "opacity 0.3s ease-in-out",
   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
   },
   [theme.breakpoints.down("lg")]: {
      width: "100%",
      maxWidth: "100%",
      marginTop: "16px",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   maxWidth: "700px",
   paddingLeft: "32px",
   [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "16px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
}));

const AccordionContainer = styled(Box)(({ theme }) => ({
   width: "100%",
   marginTop: "16px",
   [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
   },
}));
const CustomAccordion = styled(Accordion)(({ theme }) => ({
   borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
   padding: "16px",
}));

const FaqSection = () => {
   return (
      <FAQContainer>
         <TextContainer>
            <Typography color="primary">FAQ</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
               Tire todas as suas dúvidas sobre nosso
               <br />
               processo de produção!
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
               Lorem ipsum dolor sit amet consectetur.{" "}
               <Typography component="strong" color="primary">
                  Etiam pellentesque
               </Typography>{" "}
               gravida eu egestas sed quis donec ipsum eu. In viverra velit.
            </Typography>
            <AccordionContainer>
               <CustomAccordion>
                  <AccordionSummary
                     expandIcon={<AddCircleOutlineIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography variant="h6">Pizza é boa?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur. Etiam
                        pellentesque gravida eu egestas sed quis donec ipsum eu.
                        In viverra velit.
                     </Typography>
                  </AccordionDetails>
               </CustomAccordion>
               <CustomAccordion>
                  <AccordionSummary
                     expandIcon={<AddCircleOutlineIcon />}
                     aria-controls="panel2a-content"
                     id="panel2a-header"
                  >
                     <Typography variant="h6">Vende pizza?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur. Etiam
                        pellentesque gravida eu egestas sed quis donec ipsum eu.
                        In viverra velit.
                     </Typography>
                  </AccordionDetails>
               </CustomAccordion>
               <CustomAccordion>
                  <AccordionSummary
                     expandIcon={<AddCircleOutlineIcon />}
                     aria-controls="panel3a-content"
                     id="panel3a-header"
                  >
                     <Typography variant="h6">
                        Tem pizza de calabresa?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur. Etiam
                        pellentesque gravida eu egestas sed quis donec ipsum eu.
                        In viverra velit.
                     </Typography>
                  </AccordionDetails>
               </CustomAccordion>
               <CustomAccordion>
                  <AccordionSummary
                     expandIcon={<AddCircleOutlineIcon />}
                     aria-controls="panel4a-content"
                     id="panel4a-header"
                  >
                     <Typography variant="h6">Tem delivery?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur. Etiam
                        pellentesque gravida eu egestas sed quis donec ipsum eu.
                        In viverra velit.
                     </Typography>
                  </AccordionDetails>
               </CustomAccordion>
               <CustomAccordion>
                  <AccordionSummary
                     expandIcon={<AddCircleOutlineIcon />}
                     aria-controls="panel5a-content"
                     id="panel5a-header"
                  >
                     <Typography variant="h6">Entrega de bike?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur. Etiam
                        pellentesque gravida eu egestas sed quis donec ipsum eu.
                        In viverra velit.
                     </Typography>
                  </AccordionDetails>
               </CustomAccordion>
            </AccordionContainer>
         </TextContainer>
         <ImageContainer>
            <img src={PizzaImage} alt="Pizza" />
         </ImageContainer>
      </FAQContainer>
   );
};

export default FaqSection;
