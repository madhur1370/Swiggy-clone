import React from "react";
import {Link} from "react-router-dom";
import "../../src/styles/header.css"

function SellerHeader(props){
    let session = sessionStorage.seller_username||"user"
    return(
    <div>
    <div className="bar">
        <div className="bar1">
            <img src="../logo.ico" className="logo"></img>
            <p className="logo-text">sizzle</p>
        </div>
        <div className="bar2">
            <img src="../images/home.png"></img><Link to="/seller_dashboard" className="home">Home </Link>
            <img src="../images/cart.png"></img><Link to="/order" className="cart" >order</Link>
        </div>
        <div className="bar3">
            <img src="../images/profile.png" className="profile"></img>
            <div className="name" onClick={()=>{
                props.message();
            }}> {session}</div>
        </div>
    </div>
    </div>
)
}
export default SellerHeader;