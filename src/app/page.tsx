import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Curriculum from '@/components/Curriculum'
import Instructor from '@/components/Instructor'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Curriculum />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
