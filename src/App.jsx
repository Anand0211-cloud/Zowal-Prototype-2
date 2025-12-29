import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="ueberuns" element={<About />} />
                    <Route path="produkte" element={<Products />} />
                    <Route path="kontakt" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
