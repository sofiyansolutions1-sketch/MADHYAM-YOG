import { FinalCTA, FAQ, Testimonials, Contact as ContactComponent } from '../components/ClosingSection';
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
}