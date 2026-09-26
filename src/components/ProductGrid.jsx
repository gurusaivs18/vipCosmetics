 
import '../css/ProductGrid.css';

import product1 from '../assets/Ceramides.jpg';
import product2 from '../assets/powderwash.png';
import product3 from '../assets/prod3.jpg';
import product4 from '../assets/prod4.jpg';
import product5 from '../assets/prod5.jpg';
import product6 from '../assets/prod6.jpg';
import product7 from '../assets/prod7.jpg';
import product8 from '../assets/antiaging8.jpeg';



const products = [
  {
    name: 'Barrier Repair serum',
    img: product1,
  },
   {
    name: 'Pore minimizing Enzyme clay powder wash',
    img: product2,
  },
  {
    name: 'Antioxidant glow booster',
    img: product3,
  },
  {
    name: 'On-the-go skin quencher',
    img: product4,
  },
  {
    name: 'Refining overnight treatment',
    img: product5,
  },
  {
    name: 'UVA/UVB daily protection',
    img: product6,
  },
  {
    name: 'Firming & smoothing moisturizer',
    img: product7,
  },
  {
    name: 'Anti-aging and repair eye cream',
    img: product8,
  },


];

function ProductGrid() {
  return (
    <section className="product-grid-section">
      <div className="container">
        <h2 className="section-heading">Featured Collection</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <img src={p.img} alt={p.name} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
 
