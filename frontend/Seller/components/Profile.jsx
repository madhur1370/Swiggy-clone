import { useState } from "react";
import "../styles/profile.css"

const Profile=(props)=>{
    let [count,setcount] = useState(0);

    function countclick(){
        let ele=document.querySelectorAll(".field");
        for (let i = 0; i < ele.length; i++) {
            if(count==0)
            ele[i].classList.add("highlight");
            else
            ele[i].classList.remove("highlight");
            
        }
        if(count==0)
            setcount(1);
        else
            setcount(0)
    }




    function handlesubmit()
    {
        let a=document.querySelector('input[name="owner_name"]').value,b=document.querySelector('input[name="res_name"]').value
        let c=document.querySelector('input[name="phone"]').value
        let d=document.querySelector('input[name="address"]').value,e=document.querySelector('input[name="email"]').value
        const body={
            username:sessionStorage.seller_username,
            name:a,
            phone:c,
            res_name:b,
            address:d,
            email:e,
            location:sessionStorage.location
        }
        let content={
            method:"POST",
            headers:{"Content-Type":"application/plain"},
            body:JSON.stringify(body)
        }

        fetch("http://localhost:8181/seller/editprofile",content)
        .then((res)=>res.json())
        .then((d)=>{
                alert(d.response);
                setcount(0);
        }
        )
        .catch((e)=>console.log("some entered valued wrong"))
    }




    return(<div id="editprofile" 
    >
            {count === 1 ? (
                <>
                    <input
                        className="field"
                        name="owner_name"
                        defaultValue={props.val.owner_name}
                        
                    />
                    <input
                        className="field"
                        name="res_name"
                        defaultValue={props.val.res_name}
                        
                    />
                    <input
                        className="field"
                        name="phone"
                        defaultValue={props.val.phone}
                        
                    />
                    <input
                        className="field"
                        name="address"
                        defaultValue={props.val.address}
                        
                    />
                    <input
                        className="field"
                        name="email"
                        defaultValue={props.val.email}
                        
                    />
                </>
            ) : (
                <>
                    <li className="field">{props.val.owner_name}</li>
                    <li className="field">{props.val.res_name}</li>
                    <li className="field">{props.val.phone}</li>
                    <li className="field">{props.val.address}, {sessionStorage.location}</li>
                    <li className="field">{props.val.email}</li>
                </>
            )}

            {count === 1 ? (
                <button
                    className="button"
                    style={{ display: "flex", alignSelf: "center", marginTop: "20px", marginBottom: "20px" }}
                    onClick={()=>handlesubmit()}
                >
                    Submit
                </button>
            ) : (
                <button
                    className="button"
                    style={{ display: "flex", alignSelf: "center", marginTop: "20px", marginBottom: "20px" }}
                    onClick={() => countclick()}
                >
                    Edit Profile
                </button>
            )}
        </div>
    );
};
export default Profile;