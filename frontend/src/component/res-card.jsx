import "../styles/res-card.css"
const Res_card=(props)=>{
    let array=props.name.info.cuisine
    return(
        <div className="main-cont">
            <img src={props.name.info.image.url} className="res-image" alt="" />
            <div className="res-name">{props.name.info.name}</div>
            <div className="address">{props.name.info.locality.name}</div>
            <p className="cuisine" style={{textOverflow:"ellipsis"}}>{
                array.map((val)=>{
                    return(val.name+" ")
                })
                }
            </p>
            <p className="status">
                {(props.name.info.timing.text==="")?"closed":"open"}
            </p>
        </div>
    )
}
export default Res_card;