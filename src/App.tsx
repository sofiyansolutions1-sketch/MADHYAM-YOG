import { Navbar, Footer, FloatingContact } from './components/Layout';
import { Hero, TrustStrip, About, Pillars, Founder } from './components/HeroSection';
import { Programs, FeaturedProgram } from './components/ProgramsSection';
import { VideoGallery } from './components/VideoGallery';
import { MembershipSection } from './components/MembershipSection';
import { WhyChoose, WhoIsItFor, OnlineExperience, HowItWorks } from './components/InfoSection';
import { GallerySection } from './components/GallerySection';
import { Philosophy, TransitionVideo, Testimonials, FAQ, FinalCTA, Contact } from './components/ClosingSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-bg">
      <Navbar />
      <FloatingContact />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <About />
        <Pillars />
        <Founder />
        <Programs />
        <VideoGallery />
        <FeaturedProgram />
        <MembershipSection />
        <WhyChoose />
        <WhoIsItFor />
        <OnlineExperience />
        <HowItWorks />
        <GallerySection />
        <Philosophy />
        <TransitionVideo />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

