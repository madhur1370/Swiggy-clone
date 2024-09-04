import {useEffect, useState } from "react";
import "../../src/styles/account.css"
const Seller_login=()=>{
    const [loginClicked,setLoginClicked]=useState(false)
    useEffect((e)=>{
        if(loginClicked)
        {
            let username=document.querySelector(".username").value;
            let password=document.querySelector(".password").value;
            if(username==""||password=="")
            {
                window.alert("please enter username or password");
                return;
            }
            let content={
                "username":username,
                "password":password,
            } 
            let reqtype="/seller_Login";
            if(switchlogin_create)
            {
                let email=document.querySelector(".email").value;
                let phone=document.querySelector(".phone").value;
                if(email==""||phone=="")
                {
                    window.alert("please enter email or phone");
                    return;
                }
                content["email"]=email;
                content["phone"]=phone;
                reqtype="/seller_create"
            }
            const obj={
                method:'POST',
                header:{'Content-Type':'text/plain'},
                body:JSON.stringify(content)
            }
            let url="http://127.0.0.1:4545"+reqtype;
            console.log(url)
            fetch(url,obj)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
            })
            .catch((e)=>{
                console.log(e);
            })
            setLoginClicked(!loginClicked)
        }
        
    },[loginClicked]);
    const [switchlogin_create,setslc]=useState(false);
    return(<div className="account">
        <div className="head">
            <p id="acc-head" style={{color:'black'}}>Login</p>
            or <div id="acc-create"style={{color:'blue',cursor:"pointer"}} onClick={(e)=>{
               const ele=document.getElementById("acc-head");
               const ele2=document.getElementById("acc-create");
               if(ele.innerText=="Login" )
               {
                ele.innerText="create account";
                ele2.innerText="Login";
                setslc(!switchlogin_create);
               }
               else
               {
                setslc(!switchlogin_create);
                ele2.innerText="create account";
                ele.innerText="Login";
               }
            }}>create account</div>
        </div>
        <div   className="mid-sec">
        <label className="acc-label" htmlFor="username">username</label>
        <input className="acc-inp username" type="text"  name="username" maxLength={20} required/>
        <label className="acc-label" htmlFor="password">password</label>
        <input className="acc-inp password" type="password" name="password"></input>
        {(switchlogin_create)?<div style={{display:"flex", flexDirection:"column"}}>
        <label className="acc-label" htmlFor="phone">phone</label>
        <input className="acc-inp phone" type="number" name="phone" maxLength={10} minLength={10} min={0}  required/>
        <label className="acc-label" htmlFor="email">email</label>
        <input className="acc-inp email" type="email" name="email" required/>
        </div>:""
        }
        </div>
        <button onClick={()=>setLoginClicked(!loginClicked)}>login</button>
    </div>);
}
export default Seller_login;