import HeroCarousel from '../components/HeroCarousel';
import PromoBanner from '../components/PromoBanner';
import StatsBar from '../components/StatsBar';
import ProductGrid from '../components/ProductGrid';
import BrandsSection from '../components/BrandsSection';
import RetailPartners from '../components/RetailPartners';
import Reveal from '../components/Reveal';
import '../css/Home.css';

function Home() {
  return (
    <>
      <HeroCarousel />
      <PromoBanner />
      <StatsBar />

      <Reveal direction="left">
        <section className="intro-section container">
          <h2>Elevating Skincare Excellence Across the UAE</h2>
          <p>
            We are distributors of world-class skincare and beauty innovations, offering a curated
            selection of premium brands trusted by leading retailers and beauty destinations. Guided
            by a passion for science, sustainability, and design, we bring results-driven formulations
            and intelligent skincare solutions that redefine modern self-care. With strong global
            partnerships and a deep understanding of consumer needs, we deliver exceptional products
            that inspire confidence, radiance, and lasting trust.
          </p>
        </section>
      </Reveal>

      <Reveal direction="right">
        <ProductGrid />
      </Reveal>

      <Reveal direction="left">
        <BrandsSection />
      </Reveal>

      <Reveal direction="right">
        <RetailPartners />
      </Reveal>
    </>
  );
}

export default Home;