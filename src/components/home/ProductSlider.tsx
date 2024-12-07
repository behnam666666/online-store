
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { Box  } from "@mui/material";
import type { ProductSliderType } from "../../type/ProductSliderType";
import Product from "./Product";
import ProductSliderSkeleton from "../loadingskeleton/ProductSliderSkeleton";

const ProductSlider=({products,statusproducts}:ProductSliderType)=>{
    return(
        <>
<Box sx={{width:"96%" , margin:"auto"}}>
                    <Swiper navigation={true} modules={[Pagination, Navigation]} breakpoints={{640: {slidesPerView: 1,},768: {slidesPerView: 2,},1050: {slidesPerView: 3,},1400: {slidesPerView: 4,},}} spaceBetween={10}  loop={true} style={{overflow:"visible !important"}}>
                        {statusproducts==200? products?.map((product)=>{return(
                            <SwiperSlide style={{height:"500px", display:"flex" , justifyContent:"center"}} key={product.id} >
                            <Product product={product}></Product>
                        </SwiperSlide>)
                        }):<ProductSliderSkeleton></ProductSliderSkeleton>}
                        
                    </Swiper>
            </Box>
        </>
    )
}
export default ProductSlider