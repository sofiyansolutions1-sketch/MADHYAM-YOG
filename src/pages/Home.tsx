import { YogaCheckup } from '../components/YogaCheckup';
import { GallerySection } from '../components/GallerySection';
import { StudentResult } from '../components/StudentResult';
import { LiverDetox } from '../components/LiverDetox';
import { FeaturedProgram } from '../components/ProgramsSection';
import { Testimonials } from '../components/ClosingSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hero } from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><YogaCheckup /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><StudentResult /></ScrollReveal>
      <ScrollReveal><LiverDetox /></ScrollReveal>
      <ScrollReveal><FeaturedProgram /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
    </>
  );
}