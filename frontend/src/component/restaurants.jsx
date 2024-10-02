import { useEffect, useState } from "react";
import "../styles/restaurant.css";
import Res_card from "./res-card.jsx"


const Restaurants=()=>{
    let [res_data,setres_data]=useState([])
    let [location,setlocation]=useState("Jaipur")
    useEffect(()=>{
        fetch("http://localhost:8181/user/api/restaurants?location=Jaipur")
        .then((res)=>{
            console.log(res)
            return res.json()})
        .then((data)=>{
            setres_data(data[0].restaurants)
        })
    },[])
    return(
        <div className="res-main">
            <div className="title">Top Picks From {location}</div>
                <div className="res-container" >
                    {res_data.map((val,item)=>{
                            return(<Res_card key={item} name={val} loc={location}/>)
                        })
                    }
                </div>
        </div>
    )
}
export default Restaurants;