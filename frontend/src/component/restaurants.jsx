import { useEffect, useState } from "react";
import "../styles/restaurant.css";
import Res_card from "./res-card.jsx"
import { useDispatch, useSelector } from "react-redux";
import { setlocation } from "../../store/location.jsx";


const Restaurants=()=>{
    let [res_data,setres_data]=useState([])
    let loc=useSelector((state)=>state.locationSlice.location)
    const [location,setloc]=useState(loc);
    let dispatch=useDispatch()

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position)=>{
                const lat=position.coords.latitude
                const long =position.coords.longitude;
                const res=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=0a1f7b290fca4b248d6018370e14de5b`);
                const data=await res.json();
                const locationDetails = data.results[0].components;
                sessionStorage.location=locationDetails.state_district;
                dispatch(setlocation(locationDetails.state_district));
            })
        }
    },[])

    useEffect(()=>{
        fetch(`https://localhost:8181/user/api/restaurants?location=${loc}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.response=="not found restaurants !!!!")
                alert("avilable locations are Mumbai Delhi Jaipur")
            else
            setres_data(data[0].restaurants)
        })
        setloc(loc)
    },[loc])

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