import {useEffect, useState } from "react";
import "../styles/account.css"
const Account=()=>{
    const [loginClicked,setLoginClicked]=useState(false)
    useEffect((e)=>{
        if(loginClicked)
        {
            console.log("clicked");
            const content={
                username:"madhur",
                password:"madhir12344#"
            } 
            const obj={
                method:'POST',
                header:{'Content-Type':'text/plain'},
                body:JSON.stringify(content)
            }
            fetch("http://127.0.0.1:4545",obj)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
            })
            .catch((e)=>{
                console.log(e);
            })
            setLoginClicked(!loginClicked)
        }
        
    },[loginClicked]);
    return(<div className="account">
        <div className="head">
            <p  style={{color:'black'}}>Login</p>
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
        <button onClick={()=>setLoginClicked(!loginClicked)}>login</button>
    </div>);
}
export default Account;