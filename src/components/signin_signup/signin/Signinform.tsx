import {TextField , Button ,IconButton , InputAdornment } from "@mui/material";
import {VisibilityOff , Visibility} from '@mui/icons-material';
import Grid from "@mui/material/Grid2";
import { useState } from 'react';
import { useFormik } from "formik";
import { contactValidationSchemasignin } from "../../../validations/contactValidation";
import type { SigninFormValues } from "../../../type/signformvalue.type";
import { loginUser } from "../../../services/contactService";
import { toast } from "react-toastify";
import { SigninData} from "../../../data/SigninSignupData";
 import { useNavigate } from "react-router-dom";
 import Cookies from "js-cookie";



 const Signinform= ()=>{
  const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
    const formik = useFormik<SigninFormValues>({
        initialValues: {
          username: "",
          password: "",
        },
        onSubmit: async(values) => {
            const { status  }: { status: number } = await loginUser(values);
            if(status==200){
                toast.success("sing in")
                const userId = Cookies.get("userId");
                if (userId) {
                  console.log("User ID from cookies:", userId);
                } else {
                  console.log("No User ID found in cookies.");
                }
                navigate("/online-store/home")
            }
            else(
                toast.error("sing in error")
            )    
        },
        validationSchema: contactValidationSchemasignin,
      });
    return(
        <>
        <form autoComplete="off" onSubmit={formik.handleSubmit} style={{width:"100%" , display:"flex", justifyContent:"center" , flexDirection:"column" , alignItems:"center"}}>
                    <Grid container size={12} marginTop={"24px"} spacing={2} sx={{display:"flex" , justifyContent:"center" , flexWrap:"wrap"}}  >      
                    {SigninData?.map((data, index) => {
                          return (
                            <Grid  size={data.column} key={index} >
                                <TextField  type={data.label==="password"?showPassword ? "text" : "password":"text"} id={data.label} label={data.label} variant="outlined" fullWidth  
                                InputProps={data.label === "password" ? {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={togglePasswordVisibility} edge="end">
                                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                } : undefined}
                               helperText={
                                formik.touched[data.label as keyof SigninFormValues] 
                                  ? formik.errors[data.label as keyof SigninFormValues] 
                                  : null
                              }
                              error={Boolean(formik.touched[data.label as keyof SigninFormValues] && formik.errors[data.label as keyof SigninFormValues])}
                              value={formik.values[data.label as keyof SigninFormValues]}    
                              onChange={formik.handleChange}/>
                            </Grid>
                          );
                        })}             
                    </Grid>
                    <Button type="submit" variant="outlined" size="large" sx={{marginTop:"16px", color:"white.main" , zIndex:"1"}} onClick={()=>{!formik.isValid?toast.error("Please fix the errors before submitting."):""}}>Signin</Button>
                </form>
        </>
    )
}
export default Signinform;