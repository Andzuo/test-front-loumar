import React from "react";
import { Paper } from "@mui/material";
import Banner from "../assets/Banner.png";

const HeroSection = () => {
   return (
      <Paper
         sx={{
            display: "flex",
            width: "100%",
            height: "26.5625rem", // 425px convertidos para rem
            justifyContent: "center",
            overflow: "hidden",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
         }}
      ></Paper>
   );
};

export default HeroSection;
