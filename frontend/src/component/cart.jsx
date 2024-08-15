import "../styles/cart.css"
import Header from "./Header"
import Logincontextprovider from "../context/logincontextprovider"
import Account from "./account"
import Footer from "./Footer"
const Cart=()=>{
    return(
    <Logincontextprovider>
    <div>
    <Header/>
    <Account/>
    <div className="cart-items">
        <img src="../../images/empty_cart.jpg" className="cart-img"/>
        <div className="cart-empt">
            your cart is empty
        </div>
    </div>
    <Footer />
    </div>
    </Logincontextprovider>
    )
}

export default Cart