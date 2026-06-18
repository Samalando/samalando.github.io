import '../App.css'
import {Link} from "react-router-dom";

export default function Home() {

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
                Hey person! I make stuff sometimes and now you get to see that stuff
            </div>
      </>
  )
}
