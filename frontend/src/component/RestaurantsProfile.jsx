import Dish from "./Dish";
import "../styles/menu.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";
function RestaurantProfile(props)
{
    const location=useLocation()
    const data=location.state || props.data 
    function setstar(){
        let star = data.avg_rating;
        if(star !== "-"){
            star=Math.floor(Number(star))
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
                <div style={{ backgroundColor: color,display:"flex",flexDirection:"row" ,justifyContent:"space-around",height:"20px",width:"40px",borderRadius:"5px"}}>
                    <div style={{ backgroundColor:color,height:"20px",width:"20px",textAlign:"center",fontSize:"12px"}}>{star}</div>
                    <img src="/images/star.png" className="img-star" alt="star" height="25px" width="20px" />
                </div>
            );
        }
    }


    return(
        <div className="rescont">
        <Header/>
        <div className="resprofile"> 
        <div >
            <div className="resimages">
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
            </div>
            <div className="restitle">The {data.res_name}</div>
            <div style={{height:"20px",width:"70vw",borderRadius:"5px",margin: "auto",backgroundColor:"white"}}>{setstar()}</div>
            <div className="restitle" style={{fontFamily:"sans-serif",fontWeight:"500",fontSize:"100%"}}>{data.address},{data.location}, {data.pincode}</div>
            <div className="resabout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias tempora earum voluptates porro eveniet ipsa pariatur fugit incidunt dolore impedit aliquam esse, consectetur expedita ratione in quis veritatis libero!
            Iusto similique, repellendus quod perferendis veritatis adipisci numquam sapiente cumque ea. Voluptates, quasi. Repellendus consequuntur ipsum dolorem vitae, tempore minima asperiores excepturi esse ea voluptas unde molestias molestiae veniam maiores.
            Itaque repellat nesciunt minus assumenda aut magni est possimus necessitatibus consectetur porro accusantium totam saepe tempora, minima iste officiis dolorem quaerat? Ipsam, et cupiditate numquam doloremque magni amet officia soluta!
            Aliquam qui temporibus praesentium perferendis deleniti fugit adipisci? Ad iure officiis excepturi recusandae asperiores voluptate inventore temporibus ut. Placeat consequatur inventore maiores, ratione aliquid doloremque cumque numquam necessitatibus? Recusandae, aperiam!
            Eveniet maxime numquam architecto velit facilis quod officia praesentium recusandae deleniti. Esse illum, corrupti nemo animi neque quidem cupiditate impedit adipisci exercitationem voluptates veritatis ad magnam dolorem beatae eligendi officia!
            Voluptatibus, dignissimos quis. Amet accusantium incidunt maxime perferendis aliquam enim commodi, rem odit veritatis, molestiae asperiores assumenda quis ipsum molestias similique quaerat nemo ipsa officiis! Dicta eum delectus eos quaerat.
            Harum quia a laborum. Eum excepturi doloremque voluptatibus atque aliquam itaque harum eos, quidem impedit perferendis sunt veritatis repellendus eaque architecto earum, odit reiciendis vero modi dolor aperiam, amet magnam?
            Accusamus voluptatum ex nostrum commodi, labore veritatis earum quae rerum doloremque explicabo modi, perferendis necessitatibus neque a illum culpa nobis amet voluptatibus nihil fuga placeat accusantium. Expedita aperiam ab iste.
            Fugit unde eius, repellendus voluptates doloremque necessitatibus rem quos eaque possimus tempore, molestiae tenetur porro sunt ullam beatae impedit perspiciatis explicabo cupiditate! Ipsa libero ipsam est voluptatem quaerat iste voluptas?
            Id corporis dicta placeat unde perspiciatis blanditiis maxime velit quae tempore ducimus modi consequatur voluptatem quisquam, dolore minus laudantium nulla commodi a nobis. Magnam voluptate iure nisi inventore sapiente provident?
            Sequi, animi distinctio hic quod laborum eveniet? Beatae magni quasi libero impedit explicabo hic corporis similique officiis, maxime aspernatur voluptatibus. Tempora eaque vero sint repellat error quod voluptatibus a inventore!
            Excepturi esse itaque ut id alias consectetur, explicabo molestias laudantium, minus corporis modi libero placeat aspernatur. Voluptatem, et iste illum animi nobis rerum. Enim, dolores quod! Placeat aspernatur harum unde?
            Quos, qui. At, atque temporibus totam quis quisquam quo dolorum debitis ullam distinctio delectus aut adipisci obcaecati porro architecto nesciunt aperiam ex dolor tempora iste. Ipsum omnis adipisci voluptatem illum.
            Impedit vitae doloremque perspiciatis error, ad enim voluptas quo! Iusto, aliquid. Maiores facere exercitationem, praesentium voluptas nulla eos commodi tenetur veritatis earum beatae libero nemo, esse, aliquam deleniti quis culpa!
            Repellat aut ut, deserunt tempora reprehenderit labore eius pariatur omnis enim excepturi quos quia cupiditate deleniti molestias reiciendis necessitatibus asperiores. Perferendis nobis excepturi rerum nulla sapiente ex nemo libero repudiandae!
            Natus explicabo a magni, nihil soluta officia ab exercitationem eaque quis, velit, quisquam dicta inventore! Suscipit, aliquam! Sit magnam quos explicabo mollitia libero dignissimos dolor itaque quo voluptates! Nostrum, debitis?
            Esse, sapiente. Rem placeat illum incidunt quod commodi, dolorem libero consectetur molestiae doloribus explicabo possimus nobis voluptatibus debitis fugiat adipisci id. Doloribus molestias quam fuga maxime at repudiandae accusamus totam.
            Incidunt corrupti facere exercitationem illum suscipit, repudiandae quas, doloremque at vitae, asperiores recusandae. Harum aliquid temporibus incidunt dolore atque debitis repudiandae est placeat maxime a aliquam ex, assumenda dicta aut.
            Fugiat esse temporibus distinctio ratione nihil inventore dolor sit odio, id deserunt mollitia quisquam deleniti dolore doloremque, error laboriosam, nam minus quo aperiam ullam molestiae nisi. Illum consequatur eaque perspiciatis?
            Itaque nulla, quia quos eaque cum obcaecati dignissimos vel? Cupiditate aperiam officiis amet ut quo rem culpa esse ducimus, perferendis, tempora iste inventore beatae nihil labore est, nemo id nesciunt.
            Ducimus voluptatibus voluptate similique asperiores, rerum et tempore explicabo eaque illo labore corrupti voluptatem qui at facere! Odio illum nam harum facilis fugit sit soluta natus corrupti provident, dolorem exercitationem.
            Vitae, quisquam! Sequi dolores quaerat nostrum odio asperiores tempora amet consequuntur architecto ex perferendis quidem deleniti ratione ea aliquam iste praesentium, animi magnam corporis repellendus voluptatum accusamus! Optio, nam alias!
            Enim tempore nesciunt iusto sint consectetur, nemo expedita beatae eveniet ipsum recusandae optio doloribus animi voluptatem! Fugiat voluptate sit sequi reiciendis odio id. Blanditiis cupiditate corrupti laborum eaque saepe veniam!
            Incidunt, amet labore. Incidunt quam vero nostrum deleniti, officiis pariatur necessitatibus, provident iste enim officia, recusandae nisi inventore error eligendi vel voluptates? Quos ratione maiores natus doloribus, cupiditate vitae voluptate.
            Minus explicabo atque nostrum dicta dolore illum reprehenderit ipsa impedit totam deserunt quam hic exercitationem iure laboriosam labore, rerum, fuga voluptas praesentium nemo molestiae, aliquam tempora? Porro consequatur reiciendis suscipit?
            Id, repellat repudiandae numquam tenetur eligendi similique rem voluptates natus, rerum nobis consectetur laborum. Libero rerum ipsum molestiae nihil facere illum expedita sunt, quibusdam cupiditate, beatae modi, eligendi ex et.
            Adipisci, consequuntur in delectus sint ut voluptatum. Sit explicabo voluptatibus odit dolor. Necessitatibus corrupti cupiditate repellat unde nulla harum vitae quam? Itaque tenetur consequuntur libero amet voluptates unde ullam eligendi.
            Ducimus voluptate esse voluptatum impedit, explicabo recusandae magni ratione natus facilis ea minima illum unde provident animi, quidem fugit illo? Maiores fugit nulla dolores aliquam cum quidem nam similique? Saepe?
            Exercitationem amet quidem ex sunt architecto, totam itaque animi unde repellendus quibusdam, nobis optio cum explicabo corporis at numquam minima saepe laudantium doloremque excepturi ea consectetur beatae! Quasi, dicta maiores!
            Quis eos vel eligendi assumenda ratione! Temporibus totam nam fugit provident doloribus, excepturi asperiores, eligendi ut quae maxime harum. Ducimus commodi ad blanditiis nihil eveniet eaque veniam repellat quod a!
            Sequi dolore repellendus doloribus aliquam quas itaque eum accusantium dignissimos culpa cum perferendis minima, veritatis maiores laborum non asperiores minus quasi eos! Libero voluptate harum atque illum commodi est laboriosam.
            Optio repudiandae assumenda vitae veritatis nihil tempore eius voluptas accusamus natus modi nemo vel, totam, cupiditate repellat voluptatibus omnis saepe, incidunt ducimus aut laborum rerum alias doloribus quidem nesciunt! Ut.
            Obcaecati laboriosam eaque ducimus excepturi, autem optio! Quas, exercitationem! Quae laboriosam vero adipisci, voluptate commodi harum atque quas porro ab sequi. Sint nesciunt numquam natus incidunt neque, velit repellat quam.
            Odio quas dignissimos optio accusantium vitae ad harum dicta minima neque sequi error fugit voluptas ipsa perferendis nisi consequatur, itaque ex aliquid beatae architecto corporis temporibus fugiat magnam. Culpa, expedita.
            Eum dolores, inventore quo adipisci repellat rerum itaque saepe nesciunt. Hic corporis mollitia impedit doloribus aperiam inventore praesentium alias voluptas, atque autem, tempora accusantium eum quidem molestias distinctio consequuntur quia!
            Labore autem minus ut, officia ab iusto nisi aperiam dolores nesciunt laborum tempora eius veritatis beatae architecto dolorum corporis vero excepturi, earum, quasi exercitationem iste blanditiis ad. Minima, consequatur atque?
            Necessitatibus minus illo accusantium nostrum. Reiciendis perferendis ducimus ab iste molestiae quia unde incidunt quaerat saepe porro. Illum quos cum recusandae minima consequatur ad ea. Quidem provident amet voluptatum natus?
            Illo corrupti animi odit voluptas amet inventore aliquid qui vero est. Reprehenderit numquam accusantium dicta quibusdam accusamus fugiat laboriosam quis corporis architecto dignissimos corrupti odio velit ipsam odit, ad harum?
            Sunt corporis non ducimus at accusamus. Beatae dolor, labore modi iste alias enim. Maxime corporis neque fuga vero reiciendis tenetur officia omnis et qui, repellendus dolorum reprehenderit iste rerum quibusdam!
            Dolorum doloremque delectus dignissimos ipsam autem praesentium soluta inventore amet, voluptatum, magni laudantium! Facere, vel neque accusamus explicabo recusandae id deleniti numquam nulla ut cupiditate temporibus accusantium dignissimos at vitae?
            Cumque quis quas voluptates, unde dignissimos tempora, officiis quae a error soluta dicta velit voluptatum iusto aspernatur, odit iste magni quo? Quod, corrupti. Nostrum unde fugit ea, est fugiat soluta!
            Illo nihil doloribus tenetur beatae accusantium temporibus quo asperiores quibusdam debitis quae impedit animi qui quidem, eos eaque ea rem modi ut ullam ducimus! Non libero odio hic explicabo recusandae?
            Tenetur minus soluta neque deserunt ipsa corrupti rem, culpa obcaecati distinctio reiciendis quas libero quasi. Amet itaque nisi maiores dicta, expedita commodi cum fugiat illo officiis doloribus obcaecati mollitia ipsa?
            Tempore explicabo officia corrupti, saepe neque repellat. Ad, possimus eveniet ex minus tenetur beatae, perspiciatis nulla deserunt inventore dolores culpa. Saepe expedita neque a, vitae alias ratione nesciunt omnis delectus!
            Laudantium ipsa accusantium iusto cumque saepe libero, atque facilis sunt praesentium quos eos provident officiis totam labore aperiam porro distinctio, earum dolorem omnis sed consequuntur quo. Pariatur eos alias sequi!
            Dolorum corrupti molestiae maxime consectetur deleniti repellendus amet, dolorem dolores. Laudantium vitae hic exercitationem excepturi, nostrum necessitatibus tempore sunt, adipisci quo et itaque tenetur, suscipit voluptatum? Commodi dolorum ipsum cumque.
            A perferendis necessitatibus aut! Voluptatum accusantium, molestiae quo culpa, ad saepe quis adipisci, repellat laboriosam optio doloremque repudiandae eligendi enim soluta nam! Libero quam dolorem debitis incidunt labore dolore sit.
            Aspernatur delectus facilis, repellendus corporis, sit veniam reiciendis ut non hic quaerat illo. Quisquam, deleniti consequuntur. A sit ducimus ipsum qui eaque quibusdam, placeat reprehenderit id libero commodi, nesciunt impedit.
            Neque tenetur quia ipsam velit, atque rem suscipit officiis nobis fugit deserunt, ipsum unde pariatur aperiam corporis doloribus quibusdam dicta molestiae vero distinctio placeat molestias quae qui quam? Eos, expedita?
            Delectus ratione temporibus aperiam iste quaerat dignissimos, sapiente dolor et accusantium autem vitae est ut alias consequatur eos illum repellat soluta! Exercitationem perspiciatis quia commodi ea est quasi officiis repellendus.</div>
        </div>
        {
                data.menu.map((val,key)=>{
                    return(<Dish key={key} res_name={data.res_name}  dish={val}/>)
                })
        }
    </div>
    </div>
    )
}
export default RestaurantProfile;