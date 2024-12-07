import { useEffect, useState } from "react";
import { getAllCategory } from "../../services/contactService";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import mensclothing from "../../assets/mensclothing.jpg";
import womensclothing from "../../assets/womensclothing.jpg";
import jewelery from "../../assets/jewelery.jpg";
import electronics from "../../assets/electronics.jpg";
import AppButton from "../Button/AppButton";
const CategoryList = () => {
  const [categorys, setCategorys] = useState<string[]>();
  const [categorysStatus, setcategorysStatus] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await getAllCategory();
        console.log(data);
        setCategorys(data);
        setcategorysStatus(status);
      } catch (err) {
        console.log("error show comment:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <Box sx={{position:"relative",width:"1530px" ,margin:"auto"}}>

    {/* <Box sx={{position:"absolute" , top:"0",bottom:"0",left:"0",right:"0" , boxShadow: "inset 150px 0 70px -100px #fff, inset -150px 0 70px -100px #fff",zIndex:"2" , pointerEvents:"none"}}></Box> */}
      <Swiper
        freeMode={true}
        speed={3000}
        slidesPerView={4}
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        style={{width:"1530px" , display:"flex", paddingLeft:"0px", }}
      >
        {categorysStatus==200?categorys?.map(()=>{
            return(<>
                <SwiperSlide  >
                    <Box sx={{cursor:"pointer",overflow:"hidden" ,width:"326px" , height:"225px" , borderRadius:"20px", display:"flex" ,flexDirection:"column" , justifyContent:"center" , alignItems:"center" , position:"relative" , px:"15px","&:hover .contentBox": {transform: "translateY(0)", transition: "transform 0.3s ease", } , "&:hover .titleText": {transform: "translateY(0)",      transition: "transform 0.3s ease",},}}> 
                        <Box sx={{background:`url(${womensclothing})`, top:"0",right:"0",left:"0",bottom:"0" , backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"20px" , filter: "grayscale(100%) brightness(0.5)" ,transition: "filter 0.3s", "&:hover": {filter: "grayscale(0%) brightness(0.7)" ,} , position:"absolute"}}></Box>
                        <Typography className="titleText" sx={{transition:".3s", fontSize:"32px" , fontWeight:"700" , color:"#fff" , position:"relative" , zIndex:"1", pointerEvents:"none" ,transform:"translateY(60px)"  }}>Women sclothing</Typography>
                        <Box className="contentBox" sx={{ transition:".3s" , transform:"translateY(300%)" , textAlign:"center" , pointerEvents:"none"}}>
                            <Typography sx={{fontSize:"18px" , fontWeight:"500" , color:"#fff" ,marginBottom:"15px" }}>Check our cool headwear collections.
                            Get Disc 10% on new Season!</Typography>
                            <AppButton fontcolor="#000" bgcolor="#fff">See All</AppButton>
                        </Box>
                    </Box>
                    <Box sx={{cursor:"pointer",overflow:"hidden" , width:"326px" , height:"377px" , borderRadius:"20px", display:"flex",flexDirection:"column" , justifyContent:"center" , alignItems:"center" , position:"relative" , marginTop:"20px", px:"15px","&:hover .contentBox": {transform: "translateY(0)", transition: "transform 0.3s ease", } , "&:hover .titleText": {transform: "translateY(0)",      transition: "transform 0.3s ease",},}}>
                        <Box sx={{background:`url(${mensclothing})`, top:"0",right:"0",left:"0",bottom:"0" , backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"20px" , filter: "grayscale(100%) brightness(0.5)" ,transition: "filter 0.3s", "&:hover": {filter: "grayscale(0%) brightness(0.7)" ,} , position:"absolute"}}></Box>
                        <Typography className="titleText" sx={{transition:".3s", fontSize:"32px" , fontWeight:"700" , color:"#fff" , position:"relative" , zIndex:"1", pointerEvents:"none" ,transform:"translateY(60px)"  }}>Men Sclothing</Typography>
                        <Box className="contentBox" sx={{transition:".3s" , transform:"translateY(300%)" , textAlign:"center" , pointerEvents:"none"}}>
                            <Typography sx={{fontSize:"18px" , fontWeight:"500" , color:"#fff" ,marginBottom:"15px" }}>Check our cool headwear collections.
                            Get Disc 10% on new Season!</Typography>
                            <AppButton fontcolor="#000" bgcolor="#fff">See All</AppButton>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{cursor:"pointer", width:"326px" , height:"377px" , borderRadius:"20px", display:"flex",flexDirection:"column" , justifyContent:"center" , alignItems:"center" , position:"relative", px:"15px","&:hover .contentBox": {transform: "translateY(0)", transition: "transform 0.3s ease", } , "&:hover .titleText": {transform: "translateY(0)",      transition: "transform 0.3s ease",},}}>
                        <Box sx={{background:`url(${jewelery})`, top:"0",right:"0",left:"0",bottom:"0" , backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"20px" , filter: "grayscale(100%) brightness(0.5)" ,transition: "filter 0.3s", "&:hover": {filter: "grayscale(0%) brightness(0.7)" ,} , position:"absolute"}}></Box>
                        <Typography className="titleText" sx={{transition:".3s", fontSize:"32px" , fontWeight:"700" , color:"#fff" , position:"relative" , zIndex:"1", pointerEvents:"none" ,transform:"translateY(60px)"  }}>Jewelery</Typography>
                        <Box className="contentBox" sx={{transition:".3s" , transform:"translateY(300%)" , textAlign:"center" , pointerEvents:"none"}}>
                            <Typography sx={{fontSize:"18px" , fontWeight:"500" , color:"#fff" ,marginBottom:"15px" }}>Check our cool headwear collections.
                            Get Disc 10% on new Season!</Typography>
                            <AppButton fontcolor="#000" bgcolor="#fff">See All</AppButton>
                        </Box>
                    </Box>
                    <Box sx={{cursor:"pointer", width:"326px" , height:"225px" , borderRadius:"20px", display:"flex",flexDirection:"column" , justifyContent:"center" , alignItems:"center" , position:"relative", marginTop:"20px", px:"15px","&:hover .contentBox": {transform: "translateY(0)", transition: "transform 0.3s ease", }, "&:hover .titleText": {transform: "translateY(0)",      transition: "transform 0.3s ease",},}}>
                        <Box sx={{ background:`url(${electronics})`, top:"0",right:"0",left:"0",bottom:"0" , backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"20px" , filter: "grayscale(100%) brightness(0.5)" ,transition: "filter 0.3s", "&:hover": {filter: "grayscale(0%) brightness(0.7)" ,} , position:"absolute"}}></Box>
                        <Typography className="titleText" sx={{transition:".3s", fontSize:"32px" , fontWeight:"700" , color:"#fff" , position:"relative" , zIndex:"1", pointerEvents:"none" ,transform:"translateY(60px)"  }}>Electronics</Typography>
                        <Box className="contentBox" sx={{transition:".3s" , transform:"translateY(300%)" , textAlign:"center" , pointerEvents:"none"}}>
                            <Typography sx={{fontSize:"18px" , fontWeight:"500" , color:"#fff" ,marginBottom:"15px" }}>Check our cool headwear collections.
                            Get Disc 10% on new Season!</Typography>
                            <AppButton fontcolor="#000" bgcolor="#fff">See All</AppButton>
                        </Box>
                    </Box>    
                </SwiperSlide></>
            )
        })
         :""}
      </Swiper>
      </Box>
    </>
  );
};

export default CategoryList;
