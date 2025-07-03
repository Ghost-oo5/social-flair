import ExamplesGallery from './components/ExamplesGallery';
import FAQ from './components/FAQ';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';
import Hero from './components/Hero';
import IndustryBenefits from './components/IndustryBenefits';
import Pricing from './components/Pricing';
import ProblemSolution from './components/ProblemSolution';
import Testimonials from './components/Testimonials';
export default function Home() {
  return (
   <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <ProblemSolution />
      <Features />
      <IndustryBenefits />
      <ExamplesGallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      {/* <Footer /> */}
    </div>
  );
}
