import MainLayout from "./components/layouts/MainLayout";

import { Route,Routes ,Navigate, Outlet } from "react-router-dom";
import Signin from "./components/signin_signup/signin/Signin";
import Signup from "./components/signin_signup/signup/Signup";
import Home from "./components/home/Home";
import { Box } from "@mui/material";

import SingleProdut from "./components/SingleProduct/SingleProduct";
import Pagecart from "./components/Pagecart/Pagecart";
import Headnav from "./components/home/Headnav";



function App() {
  
  
  return (
    <MainLayout>
<Box sx={{bgcolor:"black.main" , overflow:"hidden" }}>
    <Routes>
      <Route path="/" element={<Navigate to="/Signup" />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin  />} />
      <Route path="/" element={<><Headnav Color="white.main"></Headnav><Outlet></Outlet></>} >
        <Route path="/home" element={<><Home  /></>} ></Route>
        <Route path="/cart" element={<Pagecart></Pagecart>} />
        <Route path="SingleProduct/:productid" element={<SingleProdut></SingleProdut>} />

      </Route>



    </Routes>
</Box>
      
    
  </MainLayout>
  )
}

export default App;
