import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
const CartTitle =()=>{
    return(
        <>
        <Grid size={{xs:12 ,sm:12 , md:8 , lg: 8}}>
                        <Box sx={{width:"95%", margin:"auto" }}>
                            <Typography sx={{fontSize:"40px" , fontWeight:"700" , color:"white.main" }}>Cart</Typography>
                        </Box>
        </Grid>
        </>
    )
}

export default CartTitle;