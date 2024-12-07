import { Box, } from "@mui/material";
import Footer from "../Footer/Footer";
import Contentproduct from "./Contentproduct";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/contactService";
import { useParams } from "react-router-dom";
import type { IProduct } from "../../type/products.type";
import SingleproductSkeleton from "../loadingskeleton/SingleproductSkeleton";
const SingleProdut =()=>{

  const { productid } = useParams<{ productid: string }>();
  const [product , setproduct] = useState<IProduct>();
  const [statusproduct , setstatusproduct] = useState<number>();  
  useEffect(() => {
    const fetchData = async () => {
      if (productid) {
        const numericProductId = parseInt(productid, 10);
        if (!isNaN(numericProductId)) {
          try {
            const { data , status } = await getProduct(numericProductId);
            console.log(data);
            setproduct(data);
            setstatusproduct(status);
          } catch (err) {
            console.error("Error fetching product:", err);
          }
        } else {
          console.error("Invalid product ID: Not a number");
        }
      } else {
        console.error("Product ID is undefined");
      }
    };
  
    fetchData();
  }, []);

    return(
        <>
        <Box sx={{bgcolor:"black.main"  }}>

          {
            statusproduct==200?<Contentproduct product={product} /> :<SingleproductSkeleton />
          }
          
        </Box>
        <Footer></Footer>
        </>
    )
}
export default SingleProdut;