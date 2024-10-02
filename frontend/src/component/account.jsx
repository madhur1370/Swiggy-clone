import {useState ,useContext} from "react";
import "../styles/account.css"
import LoginContext from "../context/context";
import { Navigate } from "react-router-dom";
const Account=()=>{
    const {Islogin,setIslogin}=useContext(LoginContext);
    const Loginclicked=function (e){
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
            let reqtype="/user/login";
            if(switchlogin_create)
            {
                let email=document.querySelector(".email").value;
                let phone=document.querySelector(".phone").value;
                let name=document.querySelector(".name").value;
                if(email==""||phone==""||name=="")
                {
                    window.alert("please enter email or phone");
                    return;
                }
                content["name"]=name;
                content["email"]=email;
                content["phone"]=phone;
                reqtype="/user/create-account"
            }
            const obj={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(content)
            }
            let url="http://127.0.0.1:8181"+reqtype;
            fetch(url,obj)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.response=="ok")
                {
                    sessionStorage.setItem("username",username);
                    setIslogin(!Islogin);
                }
                else
                {
                    alert(data.response);
                }
            })
            .catch((e)=>{
                console.log(e);
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
        <input className="acc-inp password" type="password" name="password"></input>
        {(switchlogin_create)?<div style={{display:"flex", flexDirection:"column"}}>
        <label className="acc-label" htmlFor="name">name</label>
        <input className="acc-inp name" type="text" name="name" required/>
        <label className="acc-label" htmlFor="phone">phone</label>
        <input className="acc-inp phone" type="number" name="phone" maxLength={10} minLength={10} required/>
        <label className="acc-label" htmlFor="email">email</label>
        <input className="acc-inp email" type="email" name="email" required/></div>:""
        }
        </div>
        {(!Islogin)?<button onClick={()=>{Loginclicked()}}>{(switchlogin_create)?"create":"login"}</button>:<Navigate to={"/"}/>}
    </div>);
}
export default Account;