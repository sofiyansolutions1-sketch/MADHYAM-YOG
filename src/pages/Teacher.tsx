import { Founder  } from '../components/HeroSection';
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
}