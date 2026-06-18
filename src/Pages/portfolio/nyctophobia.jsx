import {Link} from "react-router-dom";
import "./porfolio.css"

export default function nyctophobia(){
    return (
        <>
            <button className="button">
                <Link to="/portfolio">Return to main</Link>
            </button>
            <div className="container">
                <img src="/portfolio/nytophobia/1.png" alt="spooky liminal photo" /> <br />
                <img src="/portfolio/nytophobia/2.png" alt="spooky liminal photo" /> <br/>
                <img src="/portfolio/nytophobia/3.png" alt="spooky liminal photo" /> <br/>
                <img src="/portfolio/nytophobia/4.png" alt="spooky liminal photo" /> <br/>
                <img src="/portfolio/nytophobia/5.png" alt="spooky liminal photo" /> <br/>
                <img src="/portfolio/nytophobia/6.png" alt="spooky liminal photo" /> <br/>
                <img src="/portfolio/nytophobia/7.png" alt="spooky liminal photo" /> <br/>
            </div>
        </>
    )
}