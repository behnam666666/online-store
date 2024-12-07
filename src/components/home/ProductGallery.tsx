import { Box, } from "@mui/material";
import { ProductSliderType } from "../../type/ProductSliderType";
import Product from "./Product";



const ProductGallery =({products,statusproducts}:ProductSliderType)=>{
    return(
        <>
        <Box sx={{width:"96%",margin:"auto", display:"flex" , flexWrap:"wrap" , justifyContent:"space-around" , gap:"15px"}}>
        {statusproducts==200? products?.map((product)=>{return(
                            
                            <Product product={product}  ></Product>
                        )
                        }):""}

        </Box>
        </>
    )
}

export default ProductGallery;