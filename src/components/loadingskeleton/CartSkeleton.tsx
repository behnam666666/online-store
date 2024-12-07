
import { Box } from "@mui/material"
import Skeleton from '@mui/material/Skeleton';

const CartSkeleton=()=>{
    return(
        <>
        <Box sx={{display:"flex"  ,  gap:"40px" , overflow:"hidden" , width:"95%"  , margin:"auto" , flexDirection:{xs:"column",sm:"row"} ,alignItems:{xs:"center" , sm:"start"}}}>
            <Skeleton animation="wave" variant="rectangular"  sx={{ width:"240px" , borderRadius:"16px" , height:"250px" }} />
            <Box sx={{width:"70%" , height:"250px" , display:"flex" , flexDirection:"column" , justifyContent:"space-between",alignItems:{xs:"center" , sm:"start"} }}  >
                <Skeleton animation="wave" variant="rectangular"  sx={{ width:"80%" , borderRadius:"16px" , height:"50px" ,}} />
                <Skeleton animation="wave" variant="rectangular"  sx={{ width:"50%" , borderRadius:"16px" , height:"30px" ,}} />
                <Box sx={{display:"flex" , flexDirection:"column" , width:"100%" ,alignItems:{xs:"center" , sm:"start"}}}>
                    <Skeleton animation="wave" variant="rectangular"  sx={{ width:"80%" , borderRadius:"16px" , height:"30px" ,}} />
                    <Skeleton animation="wave" variant="rectangular"  sx={{ width:"80%" , borderRadius:"16px" , height:"30px" , marginTop:"10px"}} />
                </Box>
            </Box>

        </Box>
        </>
    )
}

export default CartSkeleton;