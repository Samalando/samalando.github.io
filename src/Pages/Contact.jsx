import '../index.css'
import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <>

                <div className="header">
                    <button className="button">
                        <Link to="/">Home Page</Link>
                    </button>
                    <button className="button">
                       <a href="https://samalando.eu">Portfolio</a>
                    </button>
                    <button className="button">
                        <Link to="/contact">Contact Me</Link>
                    </button>
                </div>
                <div className='center-text'>
                    Contacts:
                    <br/>
                    <a href="https://github.com/samalando">GitHub</a>
                    <br/>
                    <a href="https://ko-fi.com/samalando">Kofi</a>
                    <br/>
                    Discord is @samalando1034
                    <br/>
                    <a href="mailto:me@samalando.com">Email</a>
                </div>

        </>
    )
}