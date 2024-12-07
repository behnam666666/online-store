import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid2';
const SingleproductSkeleton=()=>{
    return(
        <>
<Box sx={{width:"100%" , py:"120px"  }}>
          <Grid container spacing={3}>
            <Grid size={{xs:12 , md:6}}   >
                  <Skeleton animation="wave" variant="rectangular"  sx={{ margin:"auto",maxWidth:"400px" ,width:"80%" , borderRadius:"16px" , height:"500px" ,}}>
                      
                  </Skeleton>
            </Grid>
            <Grid size={{xs:12 , md:6}} sx={{display:"flex" , justifyContent:{md:"start" , xs:"center"} }}>
              <Box sx={{display:"flex" , flexDirection:"column" , width:"90%" , alignItems:{xs:"center" , md:"start"} ,justifyContent:"space-between" }}>
                  <Skeleton animation="wave" variant="text" sx={{textAlign:{xs:"center" , md:"start"} ,width:"80%",height:"70px" }}></Skeleton>
                  <Skeleton animation="wave" variant="text" sx={{textAlign:{xs:"center" , md:"start"} ,width:"80%",height:"70px" }}></Skeleton>
                  <Skeleton animation="wave" variant="text" sx={{textAlign:{xs:"center" , md:"start"} ,width:"80%",height:"70px" }}></Skeleton>
                  <Skeleton animation="wave" variant="text" sx={{textAlign:{xs:"center" , md:"start"} ,width:"80%",height:"70px" }}></Skeleton>
                  <Skeleton animation="wave" variant="text" sx={{textAlign:{xs:"center" , md:"start"} ,width:"150px",height:"80px" , borderRadius:"32px" }}></Skeleton>
              </Box>
            </Grid>
          </Grid>     
        </Box>  
        </>
    )
}
export default SingleproductSkeleton