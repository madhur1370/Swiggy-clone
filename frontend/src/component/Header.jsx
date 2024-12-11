import React, { useRef, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import "../styles/header.css"
import { useDispatch} from "react-redux";
import { setlocation } from "../../store/location";
function Header(){
    const [profileClicked,setprofileClicked] = useState(false);
    const Search=useRef(null)
    let session=(sessionStorage.username==null)?"login":sessionStorage.username;

    const dispatch=useDispatch();



    let profiledisplay="none";
    if(session!="login"&&profileClicked&&profileClicked=="none")
        profileClicked("block");
    else if(session!="login"&&profileClicked&&profileClicked=="block")
        profileClicked("block");


    return(<div className="bar">
        <div className="bar1">
            <img src="../../logo.ico" className="logo"></img>
            <p className="logotext">sizzle</p>
        </div>
        <div className="search">
            <input ref={Search} style={{paddingLeft:"10px"}}placeholder="  enter the location" ></input>
            <img src="../../images/search.svg" className="searchimg" onClick={()=>dispatch(setlocation(Search.current.value))}></img>
        </div>
        <div className="bar2">
            <img src="../../images/home.png"></img><Link to="/" className="home">Home </Link>
            <img src="../../images/cart.png"></img><Link to="/user/cart" className="cart" >cart</Link>
            <img src="../../images/offer.png"></img><div className="offer"><div>offers</div></div>
            <img src="../../images/help.png"></img><div className="help"><div>help</div></div>
        </div>
        <div className="bar3">
            <img src="../../images/profile.png" className="profile"></img>
            <div className="userprofile" onClick={()=>setprofileClicked(!profileClicked)}>{(profileClicked&&session=="login")?<Navigate to={"/user/login"}/>:session}</div>
        </div>
    </div>
)
}
export default Header