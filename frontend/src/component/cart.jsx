import "../styles/cart.css"
import Header from "./Header"
import Footer from "./Footer"
const Cart=()=>{
    return(
    <div>
    <Header/>
    <div className="cart-items">
        <img src="../../images/empty_cart.jpg" className="cart-img"/>
        <div className="cart-empt">
            your cart is empty
        </div>
    </div>
    <Footer />
    </div>
    )
}

export default Cart