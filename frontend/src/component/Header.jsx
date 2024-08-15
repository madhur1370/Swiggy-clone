import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "../styles/header.css"
import LoginContext from "../context/context";
function Header(){
    const {islogin,setIslogin} = useContext(LoginContext)
    return(<div>
    <div className="bar">
        <div className="bar1">
            <img src="../logo.ico" className="logo"></img>
            <p className="logo-text">sizzle</p>
        </div>
        <div className="bar2">
            <img src="../images/search.svg"></img><div className="search"><div>search</div></div>
            <img src="../images/home.png"></img><Link to="/" className="home">Home </Link>
            <img src="../images/cart.png"></img><Link to={"/cart"} className="cart" >cart</Link>
            <img src="../images/offer.png"></img><div className="offer"><div>offers</div></div>
            <img src="../images/help.png"></img><div className="help"><div>help</div></div>
        </div>
        <div className="bar3">
            <img src="../images/profile.png" className="profile"></img>
            <div className="name" onClick={()=>{setIslogin(!islogin)}}>login</div>
        </div>
    </div>
    </div>
    
)
}
export default Header