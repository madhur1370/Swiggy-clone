import { nanoid } from "@reduxjs/toolkit";
import "../styles/item.css"
function Item(props){
    let t=""
    let a=props.dish.id;
    for (let i = 0; i < a.length; i++) {
        if(a[i]!=' ' && a[i]!=',')
        t+=""+a[i]
    }
    return(
    <div className="cartcontainer" onMouseEnter={()=>{
        document.querySelector("."+t).style.display="block"
    }}
    onMouseLeave={()=>{
        document.querySelector("."+t).style.display="none"
    }}
    >
    <div className="dishname" style={{textAlign:"center",alignContent:"center"}}>{props.dish.dish_name}</div>
    <div className="quant1">{props.dish.quantity}</div>
    <div className="quant2">₹{props.dish.price}</div>
    <div className={"cont " +t}>
        <img src={props.dish.image} alt="" />
        <div>{props.dish.id.substring(0,props.dish.id.indexOf(','))}</div>
    </div>
    </div>)
}
export default Item;