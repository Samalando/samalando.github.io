import {Link} from "react-router-dom";
import "./porfolio.css"
export default function blender(){
    return (
        <>
        <button className="button">
            <Link to="/portfolio">Return to main</Link>
        </button>
        <div className="container">
        <img src="/portfolio/blender/liminal.jpg" alt="spooky liminal photo" />
        </div>
        </>
    )
}
