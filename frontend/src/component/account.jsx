import { useContext } from "react";
import "../styles/account.css"
import LoginContext from "../context/context";
const Account=()=>{
    const {islogin} =useContext(LoginContext)
    if(islogin){
    return(<div className="account">
        <div className="head">
            <p style={{color:'black'}}>Login</p>
            or <div style={{color:'blue'}} >create account</div>
        </div>
        <div   className="mid-sec">
        <label className="acc-label" htmlFor="username">username</label>
        <input className="acc-inp" type="text"  name="username" maxLength={15} required/>
        <label className="acc-label" htmlFor="phone">phone</label>
        <input className="acc-inp" type="char" name="phone" maxLength={10} minLength={10} required/>
        <label className="acc-label" htmlFor="email">email</label>
        <input className="acc-inp" type="text" name="email" required/>
        </div>
        <button >login</button>
    </div>);
    }
}
export default Account;