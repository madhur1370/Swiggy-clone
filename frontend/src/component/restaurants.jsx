import restaurants from "../../data/restaurants/restaurants.js"
import "../styles/restaurant.css";
import Res_card from "./res-card.jsx"

const Restaurants=()=>{
    return(
        <div className="res-main">
            <div className="title">Top Picks From Lucknow</div>
                <div className="res-container">
                    {
                        restaurants.map((val,item)=>{
                            if(val.type=="restaurant")
                                return(<Res_card name={val}/>)
                        })
                    }
                </div>
        </div>
    )
}
export default Restaurants;