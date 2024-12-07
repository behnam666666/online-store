import { Box, Typography } from "@mui/material"
import { IProduct } from "../../type/products.type"
import { ShoppingBagOutlined} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const Product =({ product }: { product: IProduct })=>{
    const navigate = useNavigate()
    return(
        <>
        <Box component="div" width={"330px"}  key={product.id} onClick={()=>{navigate(`/online-store/SingleProduct/${product.id}`)}} sx={{cursor:"pointer"}} >
                                <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center", width:"100%",  height:"400px", border:"2px solid", borderColor:"white.main" , borderRadius:"12px"}}>
                                    <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center", width:"100%",  height:"400px", border:"1px solid", borderColor:"white.main" , borderRadius:"12px", bgcolor:"#fff"}}>
                                        <Box component="img" src={product.image} sx={{maxWidth:"90%" , maxHeight:"380px" ,cursor:"pointer" , borderRadius:"12px"}}  />
                                    </Box>
                                </Box>
                                <Box sx={{width:"100%",height:"60px" , display:"flex", alignItems:"center" , justifyContent:"space-between" , marginTop:"20px"}}>
                                    <Box sx={{width:"80%"}}>
                                        <Typography sx={{fontSize:"20px" , fontWeight:"500" ,whiteSpace: "nowrap",    overflow : "hidden",     textOverflow: "ellipsis",color:"white.main"}}>{product.title}</Typography>
                                        <Typography sx={{fontSize:"22px" , fontWeight:"600",color:"white.main"}}>${product.price}</Typography>
                                    </Box>
                                    <Box sx={{width:"20%" , display:"flex" , justifyContent:"end", alignItems:"center"}}>
                                        <ShoppingBagOutlined sx={{fontSize: 30 , color:"white.main" , cursor:"pointer" , border:"2px solid", borderColor:"white.main", borderRadius:"50%" , padding:"4px"}}></ShoppingBagOutlined>
                                    </Box>
                                </Box>
                            </Box>
        </>
    )
}

export default Product