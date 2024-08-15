import { Navigate, Route, Routes} from "react-router-dom";
import Home from "./layout/Home.jsx"
import Login from "./layout/Login.jsx"
import About from "./layout/About.jsx"
import Cart from "./component/cart.jsx";
function Approutes(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    );
}
export default Approutes;