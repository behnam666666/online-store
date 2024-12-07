import { useState , useEffect } from "react";
import { getAllProducts } from "../../services/contactService";
import type { IProduct } from "../../type/products.type";


import Headerhome from "./Headerhome";
import ProductsTitle from "./ProductsTitle";
import ProductSlider from "./ProductSlider";
import AppButton from "../Button/AppButton";
import { Box } from "@mui/material";
import ProductGallery from "./ProductGallery";
import CategoryList from "./CategoryList";
import Footer from "../Footer/Footer";
const Home =()=>{

    const [products , setproducts] = useState <IProduct[]>();
    const [statusproducts , setstatusproducts] = useState <number>(404);
    const [ShowAll,setShowAll] =useState<boolean> (false)



    useEffect(() => {
        const fetchData = async () => {
          try {
            setstatusproducts(404);
            const { data , status } = await getAllProducts();
            console.log(data);
            setproducts(data);
            console.log(status);
            setstatusproducts(status);
          } catch (err) {
            setstatusproducts(404);
            console.log("error show comment:", err);
          }
        };
        fetchData();
      }, []);

    return(
        <>

            <Headerhome />
            <ProductsTitle title="New Collections" caption="Lorem ipsum dolor sit amet consectetur. Sagittis velit ac amet massa dictum eget et. Scelerisque sed ipsum tellus nisl venenatis sit dolor purus. Nunc semper amet sodales id. Facilisis ut dui" />
            {ShowAll? <ProductGallery products={products} statusproducts={statusproducts} />:<ProductSlider products={products} statusproducts={statusproducts} />}
            <Box sx={{width:"100%" , textAlign:"center" , marginTop:"18px"}}>
                <AppButton variant="contained" bgcolor="white.main" fontcolor="black.main" onClick={()=>{setShowAll(!ShowAll)}} >{ShowAll?"See Less" : "See All"}</AppButton>
            </Box>

            <ProductsTitle title="Featured Collections" caption="Lorem ipsum dolor sit amet consectetur. Sagittis velit ac amet massa dictum eget et." />
            <CategoryList />
            <Footer></Footer>
            
        </>
    )
}

export default Home;