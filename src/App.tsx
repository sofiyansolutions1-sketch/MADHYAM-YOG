import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FloatingContact } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Wellness from './pages/Wellness';
import Content from './pages/Content';
import Teacher from './pages/Teacher';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-primary-bg">
        <Navbar />
        <FloatingContact />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/content" element={<Content />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}