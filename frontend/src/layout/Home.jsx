import Header  from "../component/Header.jsx";
import Footer from "../component/Footer.jsx"
import Account from "../component/account.jsx";
import List from "../component/List.jsx";
import "../styles/home.css"
import Restaurants from "../component/restaurants.jsx";
import Logincontextprovider from "../context/logincontextprovider.jsx";
function Home(){
    return(
        <Logincontextprovider>
        <div>
            <Header></Header>
            <Account/>
            <div className="main">
            <List></List>
            <Restaurants/>
            </div>
            <Footer></Footer>
            
        </div>
        </Logincontextprovider>
    );
}

export default Home;