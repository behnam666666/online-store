
import {TextField , Button ,IconButton , InputAdornment } from "@mui/material";
import {VisibilityOff , Visibility} from '@mui/icons-material';
import Grid from "@mui/material/Grid2";
import { useState } from 'react';
import { useFormik } from "formik";
import { contactValidationSchemasignup } from "../../../validations/contactValidation";
import type { SignupFormValues } from "../../../type/signformvalue.type";
import { signupUser } from "../../../services/contactService";
import { toast } from "react-toastify";
import { SignupData } from "../../../data/SigninSignupData";
 const Signupform= ()=>{
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
    const [showPasswordconfirm, setShowPasswordconfirm] = useState<boolean>(false);
    const togglePasswordconfirmVisibility = () => {
      setShowPasswordconfirm((prev) => !prev);
    };   
    const formik = useFormik<SignupFormValues>({
        initialValues: {
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          phone:"",
          password: "",
          passwordconfirm: "",
        },
        onSubmit: async(values) => {
            const { status }: { status: number } = await signupUser(values);
            console.log(status);
            if(status==200){
                toast.success("sing up")
            }
            else(
                toast.error("sing up")
            )    
        },
        validationSchema: contactValidationSchemasignup,
      });
    return(
        <>
        <form autoComplete="off" onSubmit={formik.handleSubmit} style={{width:"100%" , display:"flex", justifyContent:"center" , flexDirection:"column" , alignItems:"center"}}>
                    <Grid container size={11} marginTop={"24px"} spacing={2}  >
                            
                    {SignupData?.map((data, index) => {
                          return (
                            <Grid  size={data.column} key={index} >
                                <TextField  type={data.label === "password"? showPassword? "text": "password": data.label === "passwordconfirm"? showPasswordconfirm? "text": "password": "text"} id={data.label} label={data.label=="passwordconfirm"? "confirm password": data.label} variant="outlined" fullWidth  
                                InputProps={data.label === "password"||data.label ==="passwordconfirm" ? {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={data.label === "password"? togglePasswordVisibility : togglePasswordconfirmVisibility} edge="end">
                                        {(data.label === "password"&&!showPassword) ||(data.label === "passwordconfirm"&&!showPasswordconfirm) ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                } : undefined}
                               helperText={
                                formik.touched[data.label as keyof SignupFormValues] 
                                  ? formik.errors[data.label as keyof SignupFormValues] 
                                  : null
                              }
                              error={Boolean(formik.touched[data.label as keyof SignupFormValues] && formik.errors[data.label as keyof SignupFormValues])}
                              value={formik.values[data.label as keyof SignupFormValues]}    
                              onChange={formik.handleChange}/>
                            </Grid>
                          );
                        })}   
                    </Grid>
                    <Button type="submit" variant="outlined" size="large" sx={{marginTop:"16px", color:"white.main",zIndex:"1"}} onClick={()=>{!formik.isValid?toast.error("Please fix the errors before submitting."):""}}>Signup</Button>
                </form>
        </>
    )
}
export default Signupform;