import "../styles/cart.css"
import Header from "./Header"
import Footer from "./Footer"
import {useSelector } from "react-redux"
import Item from "./item"
const Cart=()=>{
    const items=useSelector(state=>state.cartSlice.cartuser)
    return(
    <div>
    <Header/>
    <div className="cart-items" style={{marginBottom:"20px"}}>
    {items.map((val,item)=>{
    return(<Item key={item} dish={val}/>)}
    )}
    </div>
    <Footer />
    </div>
    )
}

export default Cart