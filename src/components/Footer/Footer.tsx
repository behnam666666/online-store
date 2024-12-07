import { Box, Typography } from "@mui/material";
import {Facebook , Instagram , Telegram , X} from '@mui/icons-material';
import mapimg from "../../assets/map.png"

const Footer =()=>{




    return(
        <>
        <Box sx={{width:"100%" , marginTop:"70px" , backgroundColor:"rgba(18, 18, 18, 1)" ,borderTop:"2px solid grey" , py:"30px" , position:"relative",zIndex:"0" }}>
            <Box sx={{background:`url(${mapimg})`,zIndex:"1" , position:"absolute" , top:"0" , bottom:"0" , right:"0" , left:"0" ,backgroundPosition:"center" , backgroundRepeat:"no-repeat",}}></Box>
            <Box sx={{background:"rgba(0,0,0,.8)",zIndex:"2" , position:"absolute" , top:"0" , bottom:"0" , right:"0" , left:"0"}}></Box>
            <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around", position:"relative" ,zIndex:"3"}}>
                <Box sx={{width:"350px" , margin:"30px", textAlign:{xs:"center" , sm:"left"}}}>
                    <Typography sx={{fontSize:"48px" , fontWeight:"700" , color:"#fff", cursor:"pointer"}}>Mowj</Typography>
                    <Typography sx={{fontSize:"18px" , color:"#fff" , marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur. Sagittis velit ac amet  Lorem ipsum dolor sit amet.</Typography>
                </Box>
                <Box sx={{ margin:"30px" , textAlign:{xs:"center" , sm:"left"}}}>
                    <Typography sx={{fontSize:"22px" , color:"#fff" , fontWeight:"500", marginBottom:"18px"}}>Categories</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>Women sclothing</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>Men Sclothing</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>Jewelery</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>Electronics</Typography>
                </Box>
                <Box sx={{ margin:"30px" , textAlign:{xs:"center" , sm:"left"}}}>
                    <Typography sx={{fontSize:"22px" , color:"#fff" , fontWeight:"500", marginBottom:"18px"}}>Company</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>About Us</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>Ui Resume</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#fff" , fontWeight:"500", cursor:"pointer"}}>React Resume</Typography>
                </Box>
                <Box sx={{ margin:"30px"}}>
                    <Facebook sx={{color:"#fff" , width:"30px" , height:"30px" , cursor:"pointer"}}></Facebook>
                    <Instagram sx={{color:"#fff" , width:"30px" , height:"30px" , mx:"30px", cursor:"pointer"}}> </Instagram>
                    <Telegram sx={{color:"#fff" , width:"30px" , height:"30px", cursor:"pointer"}}></Telegram>
                    <X sx={{color:"#fff" , width:"30px" , height:"30px", mx:"30px", cursor:"pointer"}}></X>
                </Box>  
            </Box>
            <Box sx={{textAlign:"center" , marginTop:"50px" ,position:"relative" , zIndex:"3"}}>
                <Typography sx={{fontSize:"16px" , fontWeight:"500",color:"#fff"}}>© 2024 for Bhenam666666 and ostowar.p.a</Typography>
            </Box>
        </Box>
        </>
    )
}
export default Footer;