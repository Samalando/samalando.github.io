import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/portfolio/blender'>Blender</Link>
            <Link to="/portfolio/anims">Gifs and Animations</Link>
            <Link to='/portfolio/nyctophobia'>Nyctophobia</Link>
        </nav>
    )
}