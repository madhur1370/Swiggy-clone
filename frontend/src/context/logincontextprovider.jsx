import { useState } from "react"
import LoginContext from "./context"

const Logincontextprovider=({children})=>{
    const [islogin,setIslogin]=useState(false);
    return(<LoginContext.Provider  value={{islogin,setIslogin}}>
        {children}
    </LoginContext.Provider>)
} 

export default Logincontextprovider;