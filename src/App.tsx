import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/service/:serviceId" element={<><Header /><ServiceDetail /><Footer /></>} />
            </Routes>
        </Router>
    );
}

export default App;
