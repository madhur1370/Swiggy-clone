import { useState } from "react"
import "../styles/res-card.css"
const Res_card=(props)=>{
    let array=props.name.info.cuisine;
    let [color,setColor]=useState("green")
    function setstar(){
        let star=props.name.info.rating.rating_text
        if(star!=="-"){
            star=Number(star);
            let color="green"
            if(star>0&&star<=1)
                color="red"
            else if(star>1&&star<=2)
                color="orange"
            else if(star>2&&star<=3)
                color="yellow"
            else if(star>3&&star<=4)
                color="lightgreen"
            return(<div className="color" style={{backgroundColor:color}}><div className="star" style={{backgroundColor:color}} >{star}</div><img  src="../../images/star.png" className="img-star"/></div>)

        }
    }
    return(
        <div className="main-cont">
            <img src={props.name.info.image.url} className="res-image" alt="" />
            <div className="top-layer">
            <div className="res-name">{props.name.info.name}</div>
            {setstar()}
            </div>
            <div className="address">{props.name.info.locality.name}</div>
            <div className="second-layer">
            <div className="cuisine" style={{textOverflow:"ellipsis"}}>{
                array.map((val)=>{
                    return(val.name+" ")
                })
                }
            </div>
            <div className="price">
                {props.name.info.costText.text}
            </div>
            </div>
            <div className="bottom-status">
            {
                (props.name.info.timing.text==="")?<div className="status" style={{color:"red"}}>closed</div>:<div className="status" style={{color:"green"}}>open</div>}
            {
                <div className="distance" >{props.name.distance}</div>
            }
            </div>
            
        </div>
    )
}
export default Res_card;