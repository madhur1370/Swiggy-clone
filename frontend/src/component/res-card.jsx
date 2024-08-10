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
            return(<p className="color" style={{backgroundColor:color}}><p className="star" style={{backgroundColor:color}} >{star}</p><img  src="../../images/star.png" className="img-star"/></p>)

        }
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