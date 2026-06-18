import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact.jsx';
import BlenderPage from './Pages/portfolio/blender.jsx'
import AnimsPage from './Pages/portfolio/anims.jsx'
import NyctophobiaPage from './Pages/portfolio/nyctophobia.jsx'
import Portfolio from "./Pages/Portfolio.jsx";
import VoxyRedirect from "./Pages/VoxyRedirect.jsx"
import VoxyPage from "./Pages/VoxyShaders.jsx"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio/anims" element={<AnimsPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/blender" element={<BlenderPage />} />
                <Route path="/portfolio/nyctophobia" element={<NyctophobiaPage />}></Route>
                <Route path="/voxy-shaders" element={<VoxyRedirect />} />
                <Route path="/voxy/shaders" element={<VoxyPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;