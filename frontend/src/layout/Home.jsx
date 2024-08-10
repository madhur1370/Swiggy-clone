import Header  from "../component/Header.jsx";
import Footer from "../component/Footer.jsx"
import List from "../component/list.jsx";
import "../styles/home.css"
import Restaurants from "../component/restaurants.jsx";
function Home(){
    return(
        <div>
            <Header></Header>
            <div className="main">
            <List></List>
            <Restaurants/>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;