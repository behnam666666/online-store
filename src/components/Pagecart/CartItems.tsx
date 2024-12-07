import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {AddRounded , DeleteForeverRounded,RemoveRounded } from '@mui/icons-material';
import { IProduct } from '../../type/products.type';
import { useNavigate } from 'react-router-dom';
import CartSkeleton from '../loadingskeleton/CartSkeleton';
const CartItems =({cartproduct}:{cartproduct:IProduct[] | undefined})=>{
    const navigate = useNavigate()
    return(
        <>
        <Grid size={{xs:12 ,sm:12 , md:8 , lg: 8}}>
            {
                cartproduct?
                cartproduct.map((item ,index)=>{
                    return(
                    <>
                        <Box sx={{position:"relative",width:"95%" , margin:"auto" , borderBottom:"1px solid", borderColor:"white.main" , paddingBottom:"32px" ,}} key={index}>                  
                            <Box sx={{display:"flex",height:"100%", flexDirection:{xs:"column" ,sm:"row" , md:"row"} , justifyContent:{xs:"center" ,sm:"space-between" , md: "space-between"} , marginTop:"30px" , width:"100%"}}>
                                <Box sx={{display:"flex",position:"relative" ,width:{xs:"100%" , sm:"calc(100% - 145px)"} , flexDirection:{xs:"column" ,sm:"row" , md:"row"} , justifyContent:{xs:"center" ,sm:"start" , md: "start"} ,alignItems:{xs:"center" , sm:"start"} }}> 
                                    <Box component="div" onClick={()=>{navigate(`/SingleProduct/${item.id}`)}} className="box" sx={{width:"166px" , maxHeight:"200px" , position:"relative" , zIndex:"1"  , display:"flex" , justifyContent:"center" , padding:"3px" , borderRadius:"16px" , cursor:"pointer" }}>
                                        <span className="borderLine"></span>
                                        <Box sx={{width:"100%" , height:"162px"  , position:"relative" , overflow:"hidden" , zIndex:"1" ,bgcolor:"#fff" ,  display:"flex" , justifyContent:"center", borderRadius:"16px"   , padding:"16px"  }}>
                                            <Box  component="img" src={item.image} sx={{  width:"100%" ,height:"auto"    }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{position:"relative" ,marginLeft:{xs:"0" , sm:"16px"},height:"200px" ,width:{xs:"100%" ,sm:"calc(100% - 200px)"} , textAlign:{xs:"center" , sm:"left"} , marginTop:{xs:"16px" , sm:"0" , display:"flex", flexDirection:"column" , justifyContent:"space-between"}}}>
                                        <Typography sx={{fontSize:"24px" , fontWeight:"500" , color:"white.main"  , overflow:"hidden" , textOverflow: "ellipsis",whiteSpace: "nowrap"}}>{item.title}</Typography>
                                        <Box sx={{display:"flex"  , marginTop:"8px" , marginBottom:"16px" ,justifyContent:{xs:"center" , sm:"start"} }}>
                                            <Typography sx={{fontSize:"20px" , fontWeight:"500" , color:"white.main"}}>Category: </Typography>
                                            <Typography sx={{fontSize:"20px" , fontWeight:"500" , color:"grey"}}> {item.category}</Typography>
                                        </Box>      
                              
                                        <Typography sx={{fontSize:"18px" ,position:"relative",bottom:"0", fontWeight:"500" , color:"grey" ,display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden" }}>{item.description}</Typography>
                                
                                    </Box>
                            </Box>
                            <Box  sx={{display:"flex" , width: {xs:"100%" ,sm:"140px"} , flexDirection:"column" , justifyContent:"space-between" , alignItems:"center" , marginTop:{xs:"16px" , sm:"0"}}}>
                                <Typography sx={{fontSize:"24px" , fontWeight:"500" , color:"white.main"}}>${item.price }</Typography>
                                <Box sx={{display:"flex" , justifyContent:"space-around" , alignItems:"center" ,width:"136px" , height:"42px", border:"1px solid" , borderColor:"white.main" , borderRadius:"8px" }}>
                                    {
                                        item.quantity==1?<DeleteForeverRounded sx={{color:"rgba(252, 15, 19, 1)"}}></DeleteForeverRounded>:<RemoveRounded sx={{color:"white.main"}}></RemoveRounded>
                                    }
                                    <Typography sx={{color:"white.main" ,fontSize:"20px" , fontWeight:"700"}}>{item.quantity}</Typography>
                                    <AddRounded sx={{color:"white.main"}}></AddRounded>
                                </Box>
                            </Box>
                        </Box>

                        </Box>
                    </>
                )
                }):<CartSkeleton></CartSkeleton>
            }               
                    </Grid>
        </>
    )
}
export default CartItems;