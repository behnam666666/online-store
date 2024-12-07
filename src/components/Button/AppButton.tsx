import { IButtonProps } from "../../type/IButtonProps";

import { Button } from "@mui/material";

const AppButton =({ fontcolor="white.main", bgcolor="black.main"  , ...props}:IButtonProps)=>{
    return(
        <>
        <Button  sx={{height:"48px" , minWidth:"200px" , borderRadius:"38px",bgcolor:bgcolor ,color:fontcolor, fontSize:"18px" , fontWeight:"600"}} {...props}   >{props.children}</Button>
        </>
    )
}

export default AppButton;