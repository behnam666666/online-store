
import { Box , Typography } from "@mui/material";

const ProductsTitle=({ title , caption}:{title:string , caption:string})=>{
    return(
        <>
        <Box sx={{width:"100%" , textAlign:"center" ,justifyContent:"center" , display:"flex" , flexDirection:"column" , alignItems:"center" , margin:"54px 0 18px 0"}}>
                <Box >
                    <Typography sx={{fontSize:"40px", fontWeight:"700" , color:"white.main"}}>{title}</Typography>
                </Box>
                <Box sx={{width:"70%"}}>
                    <Typography sx={{fontSize:"18px", fontWeight:"500" , color:"rgba(106, 106, 106, 1)"}}>{caption}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProductsTitle;