import { Box, Typography ,Rating } from "@mui/material";
import Grid from '@mui/material/Grid2';
import type { IProduct } from "../../type/products.type";
import AppButton from "../Button/AppButton";
import { addCart } from "../../services/contactService";
import { toast } from "react-toastify";
const Contentproduct =({product}:{product:IProduct | undefined })=>{
    const AddCart = async () => {
        try {
            if(product){
                const status = await addCart(product.id);  
                console.log(status)
                if(status==200){
                    toast.info("Add Cart")
                }
            }  
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
      };
    return(
        <>
          <Box sx={{width:"100%" , py:"120px"  }}>
          <Grid container spacing={3}>
            <Grid size={{xs:12 , md:6}}   >
                  <Box className="box" sx={{ margin:"auto",maxWidth:"400px"  , width:"80%"  , position:"relative" , zIndex:"1"  , display:"flex" , justifyContent:"center" , padding:"4px" , borderRadius:"16px" , }}>
                      <span className="borderLine"></span>
                      <Box sx={{width:"100%" , position:"relative" , zIndex:"1" ,bgcolor:"#fff" ,  display:"flex" , justifyContent:"center", borderRadius:"16px"   , padding:"20px"  }}>
                        <Box  component="img" src={product?.image} sx={{maxWidth:"400px" , width:"90%" ,height:"auto"    }} />
                      </Box>
                  </Box>
            </Grid>
            <Grid size={{xs:12 , md:6}} sx={{display:"flex" , justifyContent:{md:"start" , xs:"center"} }}>
              <Box sx={{display:"flex" , flexDirection:"column" , width:"90%" , alignItems:{xs:"center" , md:"start"} }}>
                  <Typography sx={{fontSize:"40px" , fontWeight:"500" , color:"white.main" ,textAlign:{xs:"center" , md:"start"} }}>{product?.title}</Typography>
                  <Typography sx={{fontSize:"52px" , fontWeight:"500", color:"white.main" , marginTop:"5px" , alignItems:{xs:"center" , md:"start"}}}>${product?.price}</Typography>
                  <Box sx={{display:"flex" , marginTop:"12px"}}>
                    <Rating name="read-only" value={ product?.rating.rate} readOnly sx={{color:"white.main"}} />
                    <Typography sx={{fontSize:"16px" , fontWeight:"500", color:"white.main"}}>({product?.rating.rate}) {product?.rating.count} Reviews</Typography>
                  </Box>
                  <Typography sx={{fontSize:"18px" , fontWeight:"500", color:"white.main" , marginTop:"24px"}}>Descriptions</Typography>
                  <Typography sx={{fontSize:"18px" , fontWeight:"500", color:"grey" , marginTop:"10px" , textAlign:{xs:"center" , md:"left"}}}>{product?.description}</Typography>

                    <Box sx={{marginTop:"36px"}}>
                        <AppButton fontcolor="black.main" bgcolor="white.main" onClick={()=>{AddCart()}} >Add Cart</AppButton>
                    </Box>
              </Box>
            </Grid>
          </Grid>     
        </Box>        
       
        </>
    )
}
export default Contentproduct;