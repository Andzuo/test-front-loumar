import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Banner from "../assets/Banner.png";
import BannerMobile from "../assets/BannerMobile.png";

const ImageContainer = styled("div")(({ theme }) => ({
   display: "flex",
   width: "100%",
   height: "26.5625rem",
   justifyContent: "center",
   position: "relative",
   "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "opacity 0.3s ease-in-out",
   },
}));

const HeroSection = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   return (
      <ImageContainer>
         <img src={isMobile ? BannerMobile : Banner} alt="Banner" />
      </ImageContainer>
   );
};

export default HeroSection;
