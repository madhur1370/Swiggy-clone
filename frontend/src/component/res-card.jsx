import { useState } from "react"
import "../styles/res-card.css"
const Res_card=(props)=>{
    let array=props.name.info.cuisine;
    function setstar(){
        let star=props.name.info.rating.rating_text
        if(star!=="-")
            return(<><p className="star" >{star}</p><img src="../../images/star.png" className="img-star"/></>)
    }
    return(
        <div className="main-cont">
            <img src={props.name.info.image.url} className="res-image" alt="" />
            <p className="top-layer">
            <div className="res-name">{props.name.info.name}</div>
            {setstar()}
            </p>
            <div className="address">{props.name.info.locality.name}</div>
            <p className="second-layer">
            <p className="cuisine" style={{textOverflow:"ellipsis"}}>{
                array.map((val)=>{
                    return(val.name+" ")
                })
                }
            </p>
            <p className="price">
                {props.name.info.costText.text}
            </p>
            </p>
            <p className="bottom-status">
            {
                (props.name.info.timing.text==="")?<p className="status" style={{color:"red"}}>closed</p>:<p className="status" style={{color:"green"}}>open</p>}
            {
                <p className="distance" >{props.name.distance}</p>
            }
            </p>
            
        </div>
    )
}
export default Res_card;