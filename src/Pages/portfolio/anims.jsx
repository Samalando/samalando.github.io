import {Link} from "react-router-dom";
import "./porfolio.css"
export default function anims(){
    return (
        <>
            <button className="button">
                <Link to="/portfolio">Return to main</Link>
            </button>
            <br/>
            <div className="container">
            <video controls loop autoPlay playsInline>
                <source src="/portfolio/anims/reading.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            </>
            )
            }