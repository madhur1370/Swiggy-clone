import { Navigate, Route, Routes} from "react-router-dom";
import Home from "./layout/Home.jsx"
import Login from "./layout/Login.jsx"
import Cart from "./component/cart.jsx";
import Seller from "../Seller/Seller.jsx";
import Seller_login from "../Seller/components/Seller_login.jsx";
function Approutes(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login_createuser" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/bussiness_owner/" element={<Seller/>}></Route>
        <Route path="/login_register/" element={<Seller_login></Seller_login>}></Route>
    </Routes>
    );
}
export default Approutes;