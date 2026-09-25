 
import '../css/BrandsSection.css';

import brand1 from '../assets/yu-r1.png';
import brand2 from '../assets/geske2.png';
import brand3 from '../assets/phenome3.png';
import brand4 from '../assets/antala4.png';
import brand5 from '../assets/equlib5.png';
import brand6 from '../assets/sheida6.png';

const brands = [
  { name: 'Brand 1', img: brand1 },
  { name: 'Brand 2', img: brand2 },
  { name: 'Brand 3', img: brand3 },
  { name: 'Brand 4', img: brand4 },
  { name: 'Brand 5', img: brand5 },
  { name: 'Brand 6', img: brand6 },
];

function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-heading">Our Brands</h2>

        <p className="brands-intro">
          We are dedicated to bringing world-class skincare and beauty innovations to the region.
          We focus on delivering premium products that combine science, nature, and innovation to
          enhance everyday beauty and wellbeing. From advanced skincare solutions to eco-conscious
          formulations and smart beauty technologies, our carefully curated portfolio offers something
          for every lifestyle and skin type. Each brand we represent shares the same philosophy —
          empowering confidence, celebrating individuality, and making professional skincare accessible
          to everyone.
        </p>

        <div className="brands-row">
          {brands.map((brand) => (
            <div className="brand-logo" key={brand.name}>
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
  