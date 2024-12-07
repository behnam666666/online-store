import {Typography  , Zoom , Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Signupform from "./Signupform";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {

  const navigate = useNavigate();
  const [zoomIn, setZoomIn] = useState(true);
  const handleNavigate = () => {
    setZoomIn(false); 
    setTimeout(() => {
      navigate("/online-store/Signin");    
    }, 500); 
  };

  return (
    <>
      <Zoom  in={zoomIn}   timeout={{ enter: 200, exit: 200 }}>

            <Grid  
                    container
                    sx={{
                      height: "100vh",
                    
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:"black.main"
                    }}
                  >
            <Grid className="box" size={{ xs: 10, sm: 10, md: 8, lg: 4}} sx={{  position:"relative" ,backgroundColor:"black.main", borderRadius:"14px" , display:"flex", justifyContent:"center" , alignItems:"center",padding:"4px"    }}  >
            <span className="borderLine"></span>

            <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , zIndex:"2" , position:"relative",backgroundColor:"black.main", borderRadius:"14px"  ,padding:" 50px 4px" , margin:"auto" }}>
                    <Typography variant="h4" sx={{ color: "white.main" ,   }}>
                        Sign Up
                    </Typography>
                    
                    <Signupform />

                    <Grid size={11} sx={{position:"absolute", bottom:"30px", marginLeft:"10px" }}>
                        <Typography onClick={()=>{handleNavigate();console.log("sdafasdf")}} variant="body1" sx={{width:"30px", color:"white.main", cursor:"pointer","&:hover": {color: "primary.main", }, }} >SignIp</Typography>

                    </Grid>
            </Box>
                    
                        
            </Grid>
          </Grid>

      </Zoom>
      
    </>
  );
};

export default Signup;
