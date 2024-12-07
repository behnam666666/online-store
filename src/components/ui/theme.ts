import { createTheme, ThemeOptions } from "@mui/material/styles";


export const themedark = createTheme({
 
  palette: {
    mode: "dark",
    black: {
      main: "#121212",
    },
    white:{
      main:"#fff"
    }
  },
  // typography: {
  //   fontFamily: "IRANSansWeb , vazir",
  // },
} as ThemeOptions);


export const themelight = createTheme({

  palette: {
    mode: "light",
    black: {
      main: "#fff",
    },
    white:{
      main:"#121212"
    }
  },
  // typography: {
  //   fontFamily: "IRANSansWeb , vazir",
  // },
} as ThemeOptions);
