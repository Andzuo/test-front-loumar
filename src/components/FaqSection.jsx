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
   flexDirection: "row-reverse",
   alignItems: "center",
   justifyContent: "center",
   maxWidth: "100%",
   width: "100%",
   margin: "0 auto",
   gap: "1.25rem",
   padding: "0 0 4rem 0",
   [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "1rem",
   },
}));

const ImageContainer = styled("div")(({ theme }) => ({
   width: "100%",
   maxWidth: "37rem",
   height: "auto",
   borderRadius: "1rem",
   overflow: "hidden",
   transition: "opacity 0.3s ease-in-out",
   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
   },
   [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
      marginTop: "1rem",
   },
}));

const TextContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   maxWidth: "43.75rem",
   paddingLeft: "2rem",
   [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "1.25rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
   "& h4": {
      fontsize: "2.5rem",
      color: theme.palette.tertiary.main,
   },
   "& strong": {
      color: theme.palette.tertiary.main,
   },
}));

const AccordionContainer = styled(Box)(({ theme }) => ({
   width: "100%",
   marginTop: "1rem",
   textAlign: "start",
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
   borderBottom: "1px solid #f2f2f2",
   boxShadow: "none",
}));

const FaqSection = () => {
   return (
      <FAQContainer id="faq">
         <ImageContainer>
            <img src={PizzaImage} alt="Pizza" />
         </ImageContainer>
         <TextContainer>
            <Typography component="h4" color="primary">
               FAQ
            </Typography>
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
      </FAQContainer>
   );
};

export default FaqSection;
