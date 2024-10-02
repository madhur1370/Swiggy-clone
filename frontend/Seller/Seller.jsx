import { Link } from "react-router-dom";
import "./styles/seller.css"
const Seller = function (){
    return(<div className="mainpart">
        <img className="leftpart" src="/logo.ico"/>
        <div className="rightpart">
            <div className="title2">Expand Your Bussiness with SIZZLE</div>
            <div className="buttons">
            <Link to={"/login_register"} className="sell_login button">Login </Link>
            <Link to={"/login_register"} className="button">Create Bussiness</Link>
            </div>
        </div>
    </div>)
}
export default Seller;