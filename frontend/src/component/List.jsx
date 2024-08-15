import "../styles/list.css"
import React from "react";
import assest from "../../images/assest";
const array=Object.values(assest)
function List(){
    return(<div className="list">
        <div className="head">what's your taste today</div>
        <div>
        <div className="images">
        {
            array.map((item,index)=>(<div key={index} className={item}><img className="imenu" src={item}></img></div>))
        }
        </div>
        </div>
    </div>)
}
export default List;