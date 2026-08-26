import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FloatingContact } from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-primary-bg">
        <Navbar />
        <FloatingContact />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
