import '../index.css'
import {Link} from "react-router-dom";

export default function Portfolio() {
    return (
        <>

                <div className="header">
                    <button className="button">
                        <Link to="/">Home Page</Link>
                    </button>
                    <button className="button">
                        <Link to="/portfolio">Portfolio</Link>
                    </button>
                    <button className="button">
                        <Link to="/contact">Contact Me</Link>
                    </button>
                </div>
                <div className='center-text'>
                    Stuffs of mine:
                    <br/>
                   <Link to="/portfolio/blender">Blender stuff</Link>
                    <br/>
                    <Link to="/portfolio/anims">Gifs and Animations</Link>
                    <br/>
                    <Link to="/portfolio/nyctophobia">Nyctophobia (Laggy!)</Link>
                </div>

        </>
    )
}