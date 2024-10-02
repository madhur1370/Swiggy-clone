import { createBrowserRouter, Navigate,RouterProvider} from "react-router-dom";
import Home from "./layout/Home.jsx"
import Login from "./layout/Login.jsx"
import Cart from "./component/cart.jsx";
import Seller from "../Seller/Seller.jsx";
import Seller_login from "../Seller/components/Seller_login.jsx";
import Dashboard from "../Seller/components/Dashboard.jsx";
import RestaurantProfile from "./component/RestaurantsProfile.jsx";

const route=createBrowserRouter([
    {
        
        path:"/" ,
        element:<Home/>
    },
    {

        path:"/user/cart" ,
        element:<Cart/>
    },
    {
        path:"/seller" ,
        element:<Seller/>
    },
    {

        path:"/login/register/" ,
        element:<Seller_login/>
    },
    {

        path:"seller/dashboard" ,
        element:<Dashboard/>
    },
    {

        path:"/user/restaurantinfo" ,
        element:<RestaurantProfile/>
    },
    {

        path:"/user/login" ,
        element:<Login/>
    }
])
function Approutes(){
    return(<>
        <RouterProvider router={route}/>
        </>
    );
}
export default Approutes;