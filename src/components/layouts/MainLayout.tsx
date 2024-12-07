import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { themedark, themelight } from "../ui/theme";
import { useState } from "react";
import {LightModeRounded , NightsStay} from '@mui/icons-material';
import { ToastContainer } from "react-toastify";


const cacheLTR = createCache({
  key: "mui",
  stylisPlugins: [prefixer],        
});

interface MainLayoutProps {
  children: ReactNode;
}


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  const [mode, setmode] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("themeMode") || "false")
  );

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(mode));
  }, [mode]);
  return (
    <CacheProvider value={cacheLTR}>
      <ThemeProvider theme={!mode ? themelight:themedark}>
        <HelmetProvider>
          {mode? <NightsStay style={{position:"absolute" , top:"5px" , left:"5px",cursor:"pointer" ,zIndex:"20"}} onClick={()=>{setmode(!mode)}} sx={{color:"#fff"}} /> :<LightModeRounded style={{position:"absolute" , top:"5px" , left:"5px",cursor:"pointer",zIndex:"20"}} onClick={()=>{setmode(!mode)}}/>} 
          <Helmet>
            <title>RastavaShop</title>
          </Helmet>
          <ToastContainer theme="colored"  />
         
            {children}
          
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
