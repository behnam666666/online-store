import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Footer from '../Footer/Footer';
import CartCost from './CartCost';
import CartItems from './CartItems';
import CartTitle from './CartTitle';
import { useEffect, useState } from 'react';
import { IUserCart } from '../../type/IuserCart.type';
import { fetchCartDetails, usercart } from '../../services/contactService';
import { IProduct } from '../../type/products.type';

const Pagecart =()=>{

    const [usercartdata , setusercartdata] = useState<IUserCart[]>();
    const [cartproduct , setcartproduct] = useState<IProduct[]>();

 
    useEffect(() => {
        const fetchData = async () => {
          try {   
            const { data , status } = await usercart();
            setusercartdata(data);
            console.log(data);
            setusercartdata(data);
            console.log(data.length)
            console.log(status);
            
          } catch (err) {
            console.log("error show comment:", err);
          }
        };
        fetchData();
      }, []);



      useEffect(() => {
        const fetchData = async () => {
          try {
            if (usercartdata && usercartdata.length > 0) {
              const allDetails = await Promise.all(
                usercartdata.map(async cart => {
                  const products = await fetchCartDetails(cart.products);
                  return products;
                })
              );
              const mergedDetails = allDetails.flat();   
              console.log(mergedDetails)
              setcartproduct(mergedDetails)
              console.log("Fetched Cart Details:", mergedDetails);
            }
          } catch (err) {
            console.error("Error fetching cart details:", err);
          }
        };
    
        fetchData();
      }, [usercartdata]);

    return(
        <>
        <Box sx={{width:"100%" , minHeight:"calc(100vh - 190px)"}}>
            <Grid container spacing={4} sx={{marginTop:"120px" ,} }>
                    <CartTitle></CartTitle>
                    <CartItems  cartproduct={cartproduct} ></CartItems>
                    <CartCost cartproduct={cartproduct} ></CartCost>     
            </Grid>

        </Box>           
            <Footer></Footer>
        </>
    )
}
export default Pagecart