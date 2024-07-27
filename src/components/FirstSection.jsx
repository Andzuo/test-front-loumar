import React from "react";
import { Box, Typography, styled } from "@mui/material";
import HandIcon from "./icons/HandIcon";
import EngineIcon from "./icons/EngineIcon";
import CartIcon from "./icons/CartIcon";
import Pizza1 from "../assets/Icon1.png";

const SectionContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center",
   padding: "5%",
   width: "100%",
   margin: "0 auto",
   [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      padding: "16px",
   },
}));

const ImageContainer = styled("div")({
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
});

const TextContainer = styled(Box)(({ theme }) => ({
   marginLeft: "32px",
   flex: 1,
   maxWidth: "700px",
   [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "28px",
      textAlign: "start",
      alignItems: "center",
      justifyContent: "center",
   },
}));

const ListItem = styled(Box)({
   display: "flex",
   alignItems: "flex-start",
   marginBottom: "16px",
});

const IconWrapper = styled(Box)(({ theme }) => ({
   marginRight: "16px",
   marginTop: "8px",
   display: "flex",
   border: "1px solid #fff",
   boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
   borderRadius: "20%",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   width: "48px",
   height: "48px",
}));

const Section = () => {
   return (
      <SectionContainer>
         <ImageContainer>
            <img src={Pizza1} alt="Pizza Suculenta" />
         </ImageContainer>
         <TextContainer>
            <Typography color="primary">Por que escolher Pizza SVG</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
               A melhor Pizza com o melhor
               <br />
               atendimento da cidade
            </Typography>
            <ListItem>
               <IconWrapper>
                  <HandIcon />
               </IconWrapper>
               <Box>
                  <Typography variant="h6" color="textPrimary">
                     Lorem Ipsum Dolor
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                     Lorem ipsum dolor sit amet consectetur. Etiam pellentesque
                     gravida eu egestas sed quis donec ipsum eu. In viverra
                     velit.
                  </Typography>
               </Box>
            </ListItem>
            <ListItem>
               <IconWrapper>
                  <EngineIcon />
               </IconWrapper>
               <Box>
                  <Typography variant="h6" color="textPrimary">
                     Lorem Ipsum Dolor
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                     Lorem ipsum dolor sit amet consectetur. Etiam pellentesque
                     gravida eu egestas sed quis donec ipsum eu. In viverra
                     velit.
                  </Typography>
               </Box>
            </ListItem>
            <ListItem>
               <IconWrapper>
                  <CartIcon />
               </IconWrapper>
               <Box>
                  <Typography variant="h6" color="textPrimary">
                     Lorem Ipsum Dolor
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                     Lorem ipsum dolor sit amet consectetur. Etiam pellentesque
                     gravida eu egestas sed quis donec ipsum eu. In viverra
                     velit.
                  </Typography>
               </Box>
            </ListItem>
         </TextContainer>
      </SectionContainer>
   );
};

export default Section;
