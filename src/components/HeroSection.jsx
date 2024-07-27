import React from "react";
import { Box } from "@mui/material";
import Banner from "../assets/Banner.png";

const HeroSection = () => {
   return (
      <Box
         sx={{
            width: "100%",
            justifyContent: "center",
            overflow: "hidden",
         }}
      >
         <Box
            component="img"
            src={Banner}
            alt="banner"
            sx={{
               width: "100%",
            }}
         />
      </Box>
   );
};

export default HeroSection;
