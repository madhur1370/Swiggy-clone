import SellerHeader from "./SellerHeadder";
import "../styles/dashboard.css";
import {useEffect, useState } from "react";
import Profile from "./Profile";
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


    useEffect(()=>{
        fetch("http://localhost:8181/user/api/restaurants/?location=Jaipur")
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
        .catch(console.log("error fetching bussiness owner details!!!"))
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

            <div className="resabout" style={{marginTop:"20px",height:"fit-content",fontSize:"100%",fontWeight:"500"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse impedit fugit quis dolorem dolores beatae aut quia. Quos dolor molestiae odio qui reprehenderit omnis dicta incidunt nostrum, earum, voluptate eos!
            Tempora assumenda hic placeat in, dolores doloremque et veritatis dolorem iste distinctio aliquam necessitatibus minus cum eligendi praesentium similique neque saepe, non qui, quos ratione dolorum reiciendis cupiditate sequi. Dolor.
            Aut vero iusto exercitationem nihil, error voluptatum deleniti tempora dolore similique? Maiores molestias excepturi atque labore beatae tenetur alias, autem corrupti molestiae, quibusdam recusandae numquam suscipit odit porro incidunt maxime!
            Voluptatibus tempore eos doloribus rerum aperiam at iure deserunt quo repellendus doloremque fuga quae ratione dicta voluptate, temporibus, vitae obcaecati nobis dolorem numquam aliquam quam alias natus eligendi similique. Rerum.
            Repellat, odio quisquam? Neque aspernatur rerum cupiditate numquam excepturi quidem ducimus sed cumque sit. Placeat saepe odio quis repellendus cum iusto eligendi numquam asperiores. Tempore porro voluptatum dolores obcaecati necessitatibus?
            Eius cumque fugiat laudantium magnam debitis quod impedit tempore ipsam perferendis velit ratione, vel ea recusandae fugit beatae ex dignissimos accusamus! Expedita reiciendis perferendis dolor, omnis suscipit qui pariatur facilis.
            Odit quidem atque repudiandae pariatur. Labore voluptatibus inventore maxime amet dolorem consectetur necessitatibus fuga soluta officia. Suscipit accusantium cum tenetur voluptas ratione natus nemo necessitatibus ad. Pariatur autem repellendus minus!
            Minus fugiat at illum aspernatur delectus voluptas officiis totam ex quasi iste error, ipsam nihil ea quaerat eveniet ipsa voluptates eaque aliquid fugit eligendi quae laboriosam non optio. Totam, eum.
            Dignissimos optio quo cumque quae iusto voluptatem unde blanditiis quia facere, tempora aliquid earum obcaecati repellendus, exercitationem eius doloremque dolore reprehenderit rem officia recusandae sint dicta aliquam. Dolorem, culpa eius.
            Quam enim, maxime, optio assumenda alias quod nisi nesciunt ipsum dignissimos excepturi saepe repudiandae laboriosam aut dolorum ad in facilis odit quidem velit molestias beatae sed itaque possimus repellat. Architecto!
            Maxime, nobis? Quia placeat molestiae temporibus sit obcaecati ad aliquid labore, tempora fugit reprehenderit, natus iusto consequuntur nemo modi esse voluptatum a aut nam. Tenetur assumenda sapiente reprehenderit dolorem atque.
            Aliquam tempore cupiditate facere, soluta commodi nihil quod inventore a tempora reprehenderit sed provident harum iure dolores. Id, praesentium officiis? Aut, voluptatem quidem repellendus officia dolorem architecto sapiente tempora sequi?
            Ut corrupti saepe eveniet exercitationem, non, est laudantium, possimus unde sapiente magnam quasi. Reiciendis quis pariatur quam tempore, ea, culpa nesciunt ab laboriosam provident officiis nihil iusto corrupti velit nemo!
            Id at quo provident praesentium quos vero error sed optio consequatur tempora maxime nemo quis ab laboriosam fugit aperiam voluptatum dolor, ducimus eligendi similique pariatur deserunt laborum iusto eveniet! Nulla.
            Laborum ipsa commodi quas earum dolore natus ipsum voluptatem officia libero? Esse porro in vitae earum vel nemo sit alias laborum ducimus quaerat quisquam, est laudantium ipsam quis fugiat maiores?
            Accusantium aperiam totam optio dolores voluptatum corporis, incidunt rerum nostrum veritatis eum aut ab. Nulla nesciunt officia dignissimos ducimus pariatur, beatae voluptatibus harum consectetur atque suscipit in cum provident reiciendis.
            Dolor architecto molestiae ex necessitatibus deserunt laboriosam aspernatur vero quisquam fugit, sunt iusto omnis earum eius maiores voluptatibus repellat a nemo iste libero dolorem veritatis dicta. Laboriosam deserunt maxime earum!
            Nemo aliquid itaque incidunt accusamus dolores suscipit possimus reprehenderit, quibusdam ducimus dolorum fuga accusantium nisi animi eveniet corrupti unde numquam, eum maiores vero? Aliquid temporibus iusto magnam cupiditate nisi pariatur.
            Dolorum sunt voluptatibus praesentium nemo animi quisquam accusantium mollitia aspernatur commodi eaque eveniet velit temporibus omnis, illo, tempore doloremque? Itaque reprehenderit ipsum earum culpa similique voluptas natus quae eos molestiae.
            Nulla nostrum alias autem quidem porro. Doloremque qui ipsum suscipit reiciendis optio numquam possimus eaque harum consectetur quia reprehenderit officia, totam explicabo illo facere blanditiis minus natus vel magnam nemo.
            Saepe sapiente reprehenderit perferendis ex cum sunt modi! Aliquid iste, eos odit vel voluptate facere voluptatibus voluptatum. Nam doloribus esse dolorum quis quasi commodi, deserunt vel, sapiente voluptates maiores repellat!
            Dolores necessitatibus tempore nulla pariatur sunt laudantium assumenda velit deleniti, suscipit sequi quia ratione iure quidem doloremque quos molestias odio! Ipsum maiores corporis veniam, labore consequatur blanditiis illum exercitationem tempore?
            Fugit quam dolorem suscipit similique perspiciatis provident blanditiis, distinctio est reiciendis libero dolore a nihil veniam illo corporis quo harum mollitia facere ut, laborum nulla eligendi omnis. Porro, perspiciatis doloremque.
            Dolorem distinctio at rerum labore quaerat impedit vel similique officiis aspernatur? Deleniti reprehenderit possimus ratione rerum, vitae deserunt explicabo dicta architecto beatae illo reiciendis pariatur laboriosam et. Similique, praesentium quasi?
            Officiis saepe quos quisquam reprehenderit. Voluptate temporibus sed consequatur in, excepturi quis inventore perferendis maxime soluta placeat quam corrupti accusamus quidem delectus modi eos numquam atque nam laboriosam similique repellendus.
            Ex eum aliquid delectus deleniti corrupti sequi velit voluptates porro provident hic officiis, quidem mollitia, ad minus dolorem fugit ipsa quasi soluta harum ducimus reprehenderit recusandae. Dolores officiis temporibus beatae.
            Tenetur ipsam at, eum pariatur quis dolores possimus porro corrupti quo! Ratione adipisci natus ipsam. Nesciunt voluptatum, qui hic quia nam animi ipsam incidunt non, quidem omnis quaerat, accusantium fugit?
            Expedita dolor voluptatem tempore reprehenderit vel. Ratione reprehenderit exercitationem sequi. Architecto minus tenetur provident impedit ipsum, fugit deserunt odio commodi neque quaerat, iure esse officiis sapiente. Obcaecati ab temporibus iusto?
            Possimus, dignissimos? Temporibus nesciunt odit neque, illum maxime facilis perspiciatis dolor blanditiis officia, esse nulla dicta vitae quia sed beatae voluptatem quae recusandae consequatur dolore totam minima praesentium perferendis! Voluptatibus.
            Blanditiis, inventore! Recusandae veritatis adipisci, voluptatibus fuga odit laudantium aut dolore, ad atque, ut dolorum quibusdam doloribus doloremque corporis ducimus eum perferendis voluptatem minima. Possimus veniam facilis ex! Quidem, reiciendis.</div>
        </div>
        </div>
    </div>)
}
export default Dashboard;