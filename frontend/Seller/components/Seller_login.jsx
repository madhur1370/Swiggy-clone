import {useState } from "react";
import {Navigate} from "react-router-dom";
import "../../src/styles/account.css"
const Seller_login=()=>{
    const [isloginsuccess,setloginsuccess]=useState(false);
    const Login_Clicked=function (){
        let username=document.querySelector(".username").value;
        let password=document.querySelector(".password").value;
        if(!switchlogin_create&&(username==""||password==""))
        {
            window.alert("please enter username or password");
            return;
        }
        let content={
            "username":username,
            "password":password,
        } 
        let reqtype="/seller/login";
        if(switchlogin_create)
        {
            let name=document.querySelector(".name").value;
            let email=document.querySelector(".email").value;
            let phone=document.querySelector(".phone").value;
            if(email==""||phone=="")
            {
                window.alert("please enter email or phone");
                return;
            }
            content["email"]=email;
            content["name"]=name;
            content["phone"]=phone;
            reqtype="/seller/create"
        }
        const obj={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(content)
        }
        let url="http://127.0.0.1:8181"+reqtype;
        console.log(url)
        fetch(url,obj)
        .then((res)=>res.json())
        .then((d)=>{
            console.log(d)
            if(d.response!="ok")
                alert(d.response);
            else{
                sessionStorage.seller_username=username
                setloginsuccess(true);
            }
        })
        .catch((e)=>{
            alert("Server error !!!!");
        })
    };
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
        <input className="acc-inp password" type="password" name="password" maxLength={20} minLength={10}></input>
        {(switchlogin_create)?<div style={{display:"flex", flexDirection:"column"}}>
        <label className="acc-label" htmlFor="name">name</label>
        <input className="acc-inp name" type="text" name="name" required/>
        <label className="acc-label" htmlFor="phone">phone</label>
        <input className="acc-inp phone" type="number" name="phone" maxLength={10} minLength={10} min={0}  required/>
        <label className="acc-label" htmlFor="email">email</label>
        <input className="acc-inp email" type="email" name="email" required/>
        </div>:""
        }
        </div>
        <button onClick={()=>Login_Clicked()}>{(switchlogin_create)?"create":"login"}</button>{(isloginsuccess)?<Navigate to="/seller/dashboard"></Navigate>:""}
    </div>);
}
export default Seller_login;