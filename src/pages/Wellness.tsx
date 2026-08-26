import { Programs } from '../components/ProgramsSection';
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
}