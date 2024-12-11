import SellerHeader from "./SellerHeadder";
import "../styles/dashboard.css";
import {useEffect, useState } from "react";
import Profile from "./Profile";

let array=[];
function Dashboard(){
    
    let [data,setdata]=useState({});
    let [profileclicked,setclicked]=useState(false)
    function setstar(){
        let star = 0,total=0;
        let array=data.menu||[];
        for (let i = 0; i < array.length; i++) {
            let e=array[i].rating;
            for (let j = 0; j < e.length; j++) {
                star+=e[j]*(j+1);
                total+=e[j];
            }   
        }
        star=star/total;
        if(star !== "-"){
            star=Math.floor(Number(star)) || 5
            let color = "green";
            if(star > 0 && star <= 1)
                color = "red";
            else if(star > 1 && star <= 2)
                color = "orange";
            else if(star > 2 && star <= 3)
                color = "yellow";
            else if(star > 3 && star <= 4)
                color = "lightgreen";
            return (<div style={{display:"flex",flexDirection:"row",marginLeft:"55px",gap:"5px"}}>
                <div style={{ backgroundColor: color,display:"flex",flexDirection:"row",height:"20px",width:"40px",borderRadius:"5px"}}>
                    <div style={{ backgroundColor:color,height:"20px",width:"20px",textAlign:"center",fontSize:"12px"}}>{star}</div>
                    <img src="/images/star.png" className="img-star" alt="star" height="25px" width="20px" />
                </div>
                <div style={{color:"black",fontSize:"70%"}}> ({total})</div>
                </div>
            );
        }
    }

    const func=()=>{
        if(!profileclicked)
            document.querySelector(".right_block").classList.add("hide");
        else
        document.querySelector(".right_block").classList.remove("hide");
        setclicked(!profileclicked)
    }

    array=data.menu||[];
    useEffect(()=>{
        fetch("https://localhost:8181/user/api/restaurants?location=Jaipur")
        .then((res)=>res.json())
        .then((d)=>{
            let a=d[0].restaurants;
            sessionStorage.setItem("location",d[0].location)
            for (let i = 0; i < a.length; i++) {
                const element = a[i];
                if(element.user_name==sessionStorage.seller_username)
                {
                    setdata(element);
                    break;
                }
                
            }
        })
    },[])
    return(<div className="mainblock">
        <SellerHeader message={func}/>
        <div className="block">
        {(profileclicked)?<Profile val={data}/>:""}
        <div className="right_block" >
            <div className="restitle" style={{fontSize:"250%",textAlign:"center",margin:"30px 0 30px 0",textDecoration:"underline"}}>{data.res_name}</div>
            <div style={{height:"fit-content"}}>
                <div className="restitle" style={{padding:"0 5px 0 5px",width:"fit-content",marginTop:"0px",marginLeft:"40px"}}>{data.address}, {sessionStorage.location} {data.pincode}</div>
                {setstar()}
            </div>

            {(data.res_image!=null)?<div className="resimages" style={{marginTop:"30px"}}>
                <div className="left" style={{borderRadius:"5px"}}><img src={data.res_image[1]}alt="" /></div>
                <div className="right">
                    <div  className="rightupper" style={{display:"flex",flexDirection:"row",gap:"10px" ,backgroundColor:"white"}}>
                        <img src={data.res_image[0]} style={{borderRadius:"5px"}} alt="" />
                        <img src={data.res_image[2]} style={{borderRadius:"5px"}} alt="" />
                    </div>
                    <div  className="rightlower" style={{display:"flex",flexDirection:"row",gap:"10px",backgroundColor:"white"}}>
                        <img src={data.res_image[3]} style={{borderRadius:"5px"}} alt="" />
                        <img src={data.res_image[4]} style={{borderRadius:"5px"}} alt="" />
                    </div>
                </div>
            </div>:""}

            <div className="resabout" style={{marginTop:"20px",height:"fit-content",fontSize:"120%",fontWeight:"700" ,fontFamily:"cursive"}}>Welcome to Mahapadam, a premier destination for food lovers in the heart of Lucknow. Known for its blend of traditional Awadhi flavors and contemporary dining experiences, Mahapadam brings you a culinary journey that celebrates the rich cultural heritage of Lucknow.

Our chefs craft each dish with the finest ingredients, ensuring an unforgettable dining experience. From the famous Lucknowi kebabs to aromatic biryanis and delicious Mughlai curries, our menu is designed to please both locals and visitors alike.

At Mahapadam, we believe in offering not just a meal but an experience. Our elegant interiors, coupled with warm hospitality, make us the perfect spot for family dinners, corporate gatherings, or a quiet evening out. We take pride in maintaining the highest standards of service and food quality.</div>
        </div>

        </div>
    </div>)
}
export default Dashboard;