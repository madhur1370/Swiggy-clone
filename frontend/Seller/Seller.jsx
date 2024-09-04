import { Link } from "react-router-dom";
import "./styles/seller.css"
const Seller = function (){
    return(<div className="mainblock">
        <img className="leftblock" src="/logo.ico"/>
        <div className="rightblock">
            <div className="title2">Expand Your Bussiness with SIZZLE</div>
            <div className="buttons">
            <Link to={"/login_register"} className="sell_login button">Login </Link>
            <Link to={"/login_register"} className="button">Create Bussiness</Link>
            </div>
        </div>
    </div>)
}
export default Seller;