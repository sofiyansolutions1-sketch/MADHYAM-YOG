import { Hero, TrustStrip, Pillars, Founder, About } from '../components/HeroSection';
import { Programs, FeaturedProgram } from '../components/ProgramsSection';
import { StudentResult } from '../components/StudentResult';
import { VideoGallery } from '../components/VideoGallery';
import { MembershipSection } from '../components/MembershipSection';
import { WhyChoose, WhoIsItFor } from '../components/InfoSection';
import { GallerySection } from '../components/GallerySection';
import { PrenatalPostnatalYoga } from '../components/PrenatalPostnatalYoga';
import { VideoTerminals } from '../components/VideoTerminals';
import { LiverDetox } from '../components/LiverDetox';
import { Philosophy, Testimonials, FAQ, FinalCTA, Contact } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal><TrustStrip /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><StudentResult /></ScrollReveal>
      <ScrollReveal><Pillars /></ScrollReveal>
      <ScrollReveal><VideoGallery /></ScrollReveal>
      <ScrollReveal><FeaturedProgram /></ScrollReveal>
      <ScrollReveal><Founder /></ScrollReveal>
      <ScrollReveal><MembershipSection /></ScrollReveal>
      <ScrollReveal><WhyChoose /></ScrollReveal>
      <ScrollReveal><WhoIsItFor /></ScrollReveal>
      <ScrollReveal><LiverDetox /></ScrollReveal>
      <ScrollReveal><PrenatalPostnatalYoga /></ScrollReveal>
      <ScrollReveal><VideoTerminals /></ScrollReveal>
      <ScrollReveal><Philosophy /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><Programs /></ScrollReveal>
      <ScrollReveal><FinalCTA /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </>
  );
}
