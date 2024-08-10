import { Navigate, Route, Routes} from "react-router-dom";
import Home from "./layout/Home.jsx"
import Login from "./layout/Login.jsx"
import About from "./layout/About.jsx"
function Approutes(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    );
}
export default Approutes;