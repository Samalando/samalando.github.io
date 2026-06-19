import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact.jsx';
import VoxyRedirect from "./Pages/VoxyRedirect.jsx"
import VoxyPage from "./Pages/VoxyShaders.jsx"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/voxy-shaders" element={<VoxyRedirect />} />
                <Route path="/voxy/shaders" element={<VoxyPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;