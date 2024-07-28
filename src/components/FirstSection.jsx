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
   justifyContent: "space-between",
   padding: "4rem",
   width: "100%",
   maxWidth: "80rem",
   margin: "0 auto",
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
   marginLeft: "2rem",
   flex: 1,
   [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: "1.75rem",
      textAlign: "start",
      alignItems: "center",
      justifyContent: "center",
   },
}));

const ListItem = styled(Box)({
   display: "flex",
   alignItems: "flex-start",
   marginBottom: "1rem",
});

const IconWrapper = styled(Box)(({ theme }) => ({
   marginRight: "1rem",
   marginTop: "0.5rem",
   display: "flex",
   border: "1px solid #fff",
   boxShadow: "0.125rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
   borderRadius: "20%",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   width: "3rem",
   minWidth: "3rem",
   height: "3rem",
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
