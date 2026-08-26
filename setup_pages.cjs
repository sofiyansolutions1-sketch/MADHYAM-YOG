const fs = require('fs');

const appTsx = `import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <main className="flex-grow overflow-x-hidden pt-20">
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
}`;

fs.writeFileSync('src/App.tsx', appTsx);

const homeTsx = `import { GallerySection } from '../components/GallerySection';
import { StudentResult } from '../components/StudentResult';
import { LiverDetox } from '../components/LiverDetox';
import { FeaturedProgram } from '../components/ProgramsSection';
import { Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { TrustStrip } from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <ScrollReveal><TrustStrip /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><StudentResult /></ScrollReveal>
      <ScrollReveal><LiverDetox /></ScrollReveal>
      <ScrollReveal><FeaturedProgram /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/Home.tsx', homeTsx);

const aboutTsx = `import { About as HeroAbout, Pillars } from '../components/HeroSection';
import { Philosophy, Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function About() {
  return (
    <>
      <ScrollReveal><HeroAbout /></ScrollReveal>
      <ScrollReveal><Philosophy /></ScrollReveal>
      <ScrollReveal><Pillars /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/About.tsx', aboutTsx);

const wellnessTsx = `import { Programs } from '../components/ProgramsSection';
import { FinalCTA, Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Wellness() {
  return (
    <>
      <ScrollReveal><Programs /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><FinalCTA /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/Wellness.tsx', wellnessTsx);

const contentTsx = `import { VideoGallery } from '../components/VideoGallery';
import { PrenatalPostnatalYoga } from '../components/PrenatalPostnatalYoga';
import { MembershipSection } from '../components/MembershipSection';
import { Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Content() {
  return (
    <>
      <ScrollReveal><VideoGallery /></ScrollReveal>
      <ScrollReveal><PrenatalPostnatalYoga /></ScrollReveal>
      <ScrollReveal><MembershipSection /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/Content.tsx', contentTsx);

const teacherTsx = `import { Founder } from '../components/HeroSection';
import { WhoIsItFor } from '../components/InfoSection';
import { Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Teacher() {
  return (
    <>
      <ScrollReveal><Founder /></ScrollReveal>
      <ScrollReveal><WhoIsItFor /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/Teacher.tsx', teacherTsx);

const contactTsx = `import { FinalCTA, FAQ, Testimonials, Contact as ContactComponent } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Contact() {
  return (
    <>
      <ScrollReveal><FinalCTA /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><ContactComponent /></ScrollReveal>
    </>
  );
}`;
fs.writeFileSync('src/pages/Contact.tsx', contactTsx);
