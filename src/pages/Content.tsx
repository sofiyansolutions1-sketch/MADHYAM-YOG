import { VideoGallery } from '../components/VideoGallery';
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
}