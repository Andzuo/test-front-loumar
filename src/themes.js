import { createTheme } from "@mui/material";

export const theme = createTheme({
   palette: {
      primary: {
         main: "#FFB800",
      },
      secondary: {
         main: "#475467",
      },
      tertiary: {
         main: "#FF5000",
      },
      whatsappButton1: {
         main: "#25D366",
      },
      whatsappButton2: {
         main: "#fff",
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 750,
         md: 1280,
         lg: 1440,
         xl: 1920,
      },
   },
});
