import { About as HeroAbout, Pillars  } from '../components/HeroSection';
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
}