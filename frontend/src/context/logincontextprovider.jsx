import { useState } from "react"
import LoginContext from "./context"

const Logincontextprovider=({children})=>{
    const [Islogin,setIslogin]=useState(false);
    return(<LoginContext.Provider  value={{Islogin,setIslogin}}>
        {children}
    </LoginContext.Provider>)
} 

export default Logincontextprovider;