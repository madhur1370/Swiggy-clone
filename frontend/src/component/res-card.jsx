import { Link } from "react-router-dom";
import "../styles/res-card.css";
const Res_card = (props) => {
    let array = props.name.menu;
    function setstar(){
        let star = props.name.avg_rating; // Example static star value, this should be dynamic
        if(star !== "-"){
            let total=0,star =0;
            let i=0;
            props.name.ratings.forEach(e => {
                star+=e*i;
                i++;
                total+=e;
            });
            star=Math.floor(star/total)
            let color = "green";
            if(star > 0 && star <= 1)
                color = "red";
            else if(star > 1 && star <= 2)
                color = "orange";
            else if(star > 2 && star <= 3)
                color = "yellow";
            else if(star > 3 && star <= 4)
                color = "lightgreen";
            return (
                <div className="color" style={{ backgroundColor: color }}>
                    <div className="star" style={{ backgroundColor: color }}>{star}</div>
                    <img src="/images/star.png" className="img-star" alt="star" />
                </div>
            );
        }
    }
    let data=props.name
    data["location"]=props.loc
    return (
        <Link className="main-cont" to={"/restaurant/info"} state={data} >
            <img 
                src={props.name.res_image[3]}
                className="res-image" 
                alt="Restaurant" 
                />
            <div className="top-layer">
                <div className="res-name">{props.name.res_name}</div>
                {setstar()}
            </div>
            <div className="address">{props.name.address}, {props.loc}</div>
            <div className="second-layer">
                <div className="cuisine" style={{ textOverflow: "ellipsis" }}>
                    {array.map((val) => val.dish_name + " ")}
                </div>
                <div className="price">
                    ₹{props.name.menu[0].price}
                </div>
            </div>
            <div className="bottom-status">
                {("asd" === "") 
                    ? <div className="status" style={{ color: "red" }}>closed</div> 
                    : <div className="status" style={{ color: "green" }}>open</div>}
                <div className="distance">2.5km</div>
            </div>
        </Link>
    );
};

export default Res_card;
