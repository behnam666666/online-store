
import { Box , Typography } from "@mui/material";
import headerimg from "../../assets/headerimg.jpg";
import AppButton from "../Button/AppButton";

const Headerhome = () =>{
    

    return(
        <>
         <Box sx={{width:"100%" , height:"100vh",position:"relative" ,  background:`url(${headerimg})`, backgroundPosition:"left" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <Box component="div" sx={{position:"absolute" , top:"0" , right:"0" , left:"0", bottom:"0", backgroundColor:"rgba(0,0,0,.3)"}}></Box>
            <Box sx={{transform:"translateY(0px)" , width:"100%" , display:"flex" , flexDirection:"column" , justifyContent:"center", alignItems:"center"}} >
                <Typography  sx={{fontSize:{xs:"60px" , sm:"100px"}  ,fontWeight:"700", color:"#fff" , textAlign:"center" ,mx:"10px" , display:"block" , position:"relative" , width:"80%", lineHeight:{xs:"90px",sm:"134px"}}}>Mowj Black Friday</Typography>

                <Box sx={{maxWidth:"850px" ,mx:"20px" , marginTop:"10px"}}>
                    <Typography sx={{fontSize:"18px" , fontWeight:"700" , textAlign:"center" , color:"#fff" , lineHeight:"24px"}}>Lorem ipsum dolor sit amet consectetur. Sagittis velit ac amet massa dictum eget et. Scelerisque sed ipsum tellus nisl venenatis sit dolor purus. Nunc semper amet sodales id. Facilisis ut dui</Typography>
                </Box>
                <Box sx={{width:"100%" , textAlign:"center" , marginTop:"30px"}}>
                    <AppButton variant="contained" bgcolor="#fff" fontcolor="#000"  >See All</AppButton>
                </Box>
            </Box>
        </Box>
        </>
    )
}
export default Headerhome;