import React, { useState} from "react";
import {Link, Navigate} from "react-router-dom";
import "../styles/header.css"
function Header(){
    const [profileClicked,setprofileClicked] = useState(false);
    let session=(sessionStorage.username==null)?"login":sessionStorage.username;
    return(<div>
    <div className="bar">
        <div className="bar1">
            <img src="../logo.ico" className="logo"></img>
            <p className="logo-text">sizzle</p>
        </div>
        <div className="bar2">
            <img src="../images/search.svg"></img><div className="search"><div>search</div></div>
            <img src="../images/home.png"></img><Link to="/" className="home">Home </Link>
            <img src="../images/cart.png"></img><Link to="/user/cart" className="cart" >cart</Link>
            <img src="../images/offer.png"></img><div className="offer"><div>offers</div></div>
            <img src="../images/help.png"></img><div className="help"><div>help</div></div>
        </div>
        <div className="bar3">
            <img src="../images/profile.png" className="profile"></img>
            <div className="userprofile" onClick={()=>setprofileClicked(!profileClicked)}>{(profileClicked&&session=="login")?<Navigate to={"/user/login"}/>:session}</div>
        </div>
    </div>
    </div>
    
)
}
export default Header