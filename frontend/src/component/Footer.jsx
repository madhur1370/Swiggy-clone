import "../styles/footer.css"
import {Link} from "react-router-dom"
function Footer(){
    return(<div className="footer">
        <div className="logo-pos">
            <img className="logo-img" src="../../logo.ico"/>
            <p > SIZZLE</p>
        </div>
        <div className="c1">
            Contact
            <p>sizzle@sizzle.com</p>
            <p style={{display:"flex"}}><img className="flag-img" src="../../images/flag.png"/>+91 0522 235689</p>
            <div className="imp-link">
            <Link  to={"https://github.com/madhur1370"}>
            <img className="a" src="../../images/github.png"/>
            </Link>
            <Link  to={"https://www.linkedin.com/in/madhur-verma-457657280/"}>
            <img className="a" src="../../images/linkedin.png"/>
            </Link>
            <Link  to={""}>
            <img className="a" src="../../images/instagram.png"/>
            </Link>
            <Link to={""} >
            <img className="a" src="../../images/twitter.png"/>
            </Link>
        </div>
        </div>
        <div className="seller">AS A SELLLER<Link to={"/seller"}><br/>Login</Link></div>
    </div>);
}
export default Footer