import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AppButton from '../Button/AppButton';
import { IProduct } from '../../type/products.type';
import { useEffect, useState } from 'react';

const CartCost=({cartproduct}:{cartproduct:IProduct[] | undefined})=>{
    const [totalcart , settotalcart] = useState<number>();
    const [totalcartstatus , settotalcartstatus] = useState<number>();

    let totalprice = 0;
    useEffect(()=>{
        console.log("cartproduct : " , cartproduct)
        cartproduct?.map((item)=>{
            totalprice = totalprice + item.price* (item.quantity? item.quantity : 1)
            console.log("totalcart : " , totalcart)
        })
        settotalcart(totalprice);
        settotalcartstatus(200)
    },[cartproduct])
    return(
        <>
        {
            totalcartstatus==200?
            <Grid size={{xs:12 , sm:12 ,md:4 , lg: 4}}>
                        <Box sx={{width:"calc(100% - 48px)" ,margin:"auto" , border:"2px solid" , borderColor:"white.main" , borderRadius:"16px"}}>
                            <Box sx={{ margin:"auto",padding:"24px" }}>
                                <Typography sx={{fontSize:"24px" , fontWeight:"700" , color:"white.main" }}>Cart Total:</Typography>
                                <Box sx={{display:"flex" , justifyContent:"space-between" , marginTop:"14px"}}>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" ,color:"white.main" }}>cart subtotal</Typography>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" , color:"white.main"}} >${totalcart}</Typography>
                                </Box>
                                <Box sx={{display:"flex" , justifyContent:"space-between" , marginTop:"10px"}}>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" ,color:"rgba(55, 157, 0, 1)" }}>cart subtotal</Typography>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" , color:"rgba(55, 157, 0, 1)"}} >$0</Typography>
                                </Box>
                                <Box sx={{display:"flex" , justifyContent:"space-between" , marginTop:"10px"}}>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" ,color:"white.main" }}>cart subtotal</Typography>
                                    <Typography sx={{fontSize:"20px" , fontWeight:"500" , color:"white.main"}} >${totalcart}</Typography>
                                </Box>
                                <Box sx={{width:"100%" , textAlign:"center" , marginTop:"30px"}}>
                                    <AppButton fontcolor="black.main" bgcolor="white.main" fullWidth>Apply</AppButton>
                                </Box>
                                
                                
                            </Box>
                        </Box>
                    
                    </Grid>:""
        }
        
        </>
    )
}

export default CartCost;