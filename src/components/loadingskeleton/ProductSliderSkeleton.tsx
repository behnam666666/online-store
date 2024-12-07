import { Box } from "@mui/material"
import Skeleton from '@mui/material/Skeleton';

const ProductSliderSkeleton=()=>{
    return(
        <>
        <Box sx={{display:"flex" , flexWrap:"nowrap" , justifyContent:"space-between", gap:"40px" , overflow:"hidden"}}>
            <Skeleton animation="wave" variant="rectangular"  sx={{margin:"auto" , minWidth:"340px" , borderRadius:"16px" , height:"450px" ,}} />
            <Skeleton animation="wave" variant="rectangular"  sx={{ margin:"auto" , minWidth:"340px" , borderRadius:"16px" , height:"450px" ,}} />
            <Skeleton animation="wave" variant="rectangular"  sx={{ margin:"auto" , minWidth:"340px" , borderRadius:"16px" , height:"450px" ,}} />
            <Skeleton animation="wave" variant="rectangular"  sx={{ margin:"auto" , minWidth:"340px" , borderRadius:"16px" , height:"450px" , display:{md:"none" , lg:"block"}}} />          
        </Box>
        </>
    )
}

export default ProductSliderSkeleton