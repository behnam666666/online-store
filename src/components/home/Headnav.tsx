import { Box , Typography } from "@mui/material";

import {AccountCircleOutlined , SearchOutlined , ShoppingBagOutlined ,Menu} from '@mui/icons-material';
import { useEffect, useState } from "react";
import { getuser } from "../../services/contactService";
import { IUser } from "../../type/Iuser.type";
import { useNavigate, useLocation  } from "react-router-dom";
import Cookies from "js-cookie";

import { usercart } from "../../services/contactService";
import { IUserCart } from "../../type/IuserCart.type";
const Headnav =({Color} : {Color : string})=>{

    const  productid  = useLocation();
    // console.log("sdgfsgsgsg        ," , productid.pathname)
    const [showmenu , setshowmenu] = useState<boolean>(false);
 
    const navigate = useNavigate()
    const [user , setuser] = useState <IUser> ();

    if(productid.pathname=="/online-store/home"){
        Color="#fff"
    }
    
    useEffect(()=>{
      
        const fetchData = async () => {
            const userId = Cookies.get("userId");
            try {
                if(userId){
                    const  data   = await getuser(parseInt(userId));
                    setuser(data)
                }
              
              
            } catch (err) {
                console.error("Error fetching user:", err);
            }
          };
          fetchData();
    },[])


    const [usercartdata , setusercartdata] = useState<IUserCart[]>( )
 
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

    return(
        <>
        <Box sx={{width:"100%",position:"absolute",top:"0px" , display:"flex" , justifyContent:"space-between", alignItems:"center"  , zIndex:"3" }}>
                <Box sx={{margin:"20px"}}>
                    <Typography component="div" sx={{fontSize:"36px" , fontWeight:"700", color:Color  , cursor:"pointer"}} onClick={()=>{navigate("/online-store/home")}}>Mowj</Typography>
                </Box>
                <Box sx={{display:{xs:"none" , sm:"flex"} , margin:"20px" , }} >
                    <Box sx={{display:"flex", cursor:"pointer"}}>
                            <SearchOutlined sx={{width:"30px" , height:"30px" , color:Color, mx:"8px"}}></SearchOutlined>
                            <Typography sx={{fontSize:"22px", fontWeight:"500", color:Color}}>Search</Typography>
                    </Box>
                    {user? <Box  component="div" onClick={()=>{navigate("/online-store/cart")}}  sx={{display:"flex" , mx:"24px", cursor:"pointer" , position:"relative"}}>  <ShoppingBagOutlined sx={{width:"30px" , height:"30px" , color:Color, mx:"8px"}}></ShoppingBagOutlined><Typography sx={{fontSize:"22px", fontWeight:"500", color:Color}}>Cart{usercartdata?`(${usercartdata.length})`:""}</Typography></Box>: <Box sx={{ mx:"24px"}}></Box> }
                    {user? <Box component="div" onClick={()=>{navigate("/online-store/Signin")}} sx={{display:"flex" , cursor:"pointer"}} > <AccountCircleOutlined sx={{width:"30px" , height:"30px" , color:Color, mx:"8px"}}></AccountCircleOutlined> <Typography sx={{fontSize:"22px", fontWeight:"500", color:Color}}>{user.username}</Typography> </Box>:<Box component="div" onClick={()=>{navigate("/online-store/Signin")}} sx={{display:"flex" , cursor:"pointer"}} > <AccountCircleOutlined sx={{width:"30px" , height:"30px" , color:Color, mx:"8px"}}></AccountCircleOutlined> <Typography sx={{fontSize:"22px", fontWeight:"500", color:Color}}>Login</Typography> </Box>}
                </Box>


                <Box component="div" sx={{display:showmenu?"block":"none" , width:"100%", height:"200vh" , position:"fixed", backgroundColor:"#000",opacity:"0.6", zIndex:"-1" , top:"0"}} onClick={()=>{setshowmenu(!showmenu)}}>
                </Box>
                <Box component="div" sx={{zIndex:"2" ,display:{xs:"flex" , sm:"none"} , position:"fixed" , right:showmenu?"135px":"-52px" ,top:"0" , transition:".3s" }} onClick={()=>{setshowmenu(!showmenu)}}>
                    <Menu sx={{fontSize:"40px" ,  cursor:"pointer",color:"black.main" , backgroundColor:"white.main" , borderRadius:"8px" , padding:"4px 10px 4px 4px" , position:"relative" , right:"44px" , top:"25px"}}></Menu>
                    <Box sx={{height:"200vh",borderLeft:"2px solid" , borderColor:"black.main", width:"150px" ,display:{xs:"flex" , sm:"none"} , flexDirection:"column", position:"absolute" , top:"0px" ,right:"-140px", backgroundColor:"white.main" , padding:"20px"}} >
                        <Box sx={{display:"flex", cursor:"pointer" , backgroundColor:"black.main" , borderRadius:"16px" , padding:"8px" , alignItems:"center" , justifyContent:"center"}}>
                                <SearchOutlined sx={{width:"30px" , height:"30px" , color:"white.main",}}></SearchOutlined>
                                <Typography sx={{fontSize:"22px", fontWeight:"500", color:"white.main"}}>Search</Typography>
                        </Box>
                        {user? <Box  component="div" onClick={()=>{navigate("/online-store/cart")}}  sx={{my:"10px" , backgroundColor:"black.main", padding:"8px", borderRadius:"16px" ,  display:"flex", cursor:"pointer" , position:"relative" , justifyContent:"center" , alignItems:"center"}}>  <ShoppingBagOutlined sx={{width:"30px" , height:"30px" , color:"white.main",}}></ShoppingBagOutlined><Typography sx={{fontSize:"22px", fontWeight:"500", color:"white.main"}}>Cart{usercartdata?`(${usercartdata.length})`:""}</Typography></Box>: <Box sx={{ mx:"24px"}}></Box> }
                        {user? <Box component="div" onClick={()=>{navigate("/online-store/home")}} sx={{backgroundColor:"black.main", padding:"8px", borderRadius:"16px" , display:"flex" , cursor:"pointer" , justifyContent:"center" , alignItems:"center"}} > <AccountCircleOutlined sx={{width:"30px" , height:"30px" , color:"white.main",}}></AccountCircleOutlined> <Typography sx={{fontSize:"22px", fontWeight:"500", color:"white.main" , maxWidth:"120px", overflow:"hidden", textOverflow:"ellipsis"}}>{user.username}</Typography> </Box>:<Box component="div" onClick={()=>{navigate("/online-store/Signin")}} sx={{backgroundColor:"black.main",padding:"8px",marginTop:"10px" , borderRadius:"16px" , display:"flex" , cursor:"pointer" , justifyContent:"center" , alignItems:"center"}} > <AccountCircleOutlined sx={{width:"30px" , height:"30px" , color:"white.main"}}></AccountCircleOutlined> <Typography sx={{fontSize:"22px", fontWeight:"500", color:"white.main"}}>Login</Typography> </Box>}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Headnav