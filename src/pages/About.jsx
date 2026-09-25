import Reveal from '../components/Reveal';
import '../css/About.css';

function About() {
  return (
    <section className="about-page container">
      <Reveal direction="left">
        <div className="about-block">
          <h2>Our Philosophy</h2>
          <p>
            Our philosophy centers on redefining self-care through advanced formulations, sustainable
            ingredients, and technology-infused skincare. Every product we represent embodies the
            perfect balance of science and nature — crafted to elevate daily routines into
            transformative rituals.
          </p>
        </div>
      </Reveal>

      <Reveal direction="right">
        <div className="about-block">
          <h2>Partnerships & Excellence</h2>
          <p>
            Backed by strong partnerships with international brands, we ensure excellence from product
            sourcing to retail execution. Our team works closely with beauty experts, dermatologists,
            and retail partners to deliver an experience that blends innovation, authenticity, and
            visible results.
          </p>
        </div>
      </Reveal>

      <Reveal direction="left">
        <div className="about-block">
          <h2>Our Portfolio & Promise</h2>
          <p>
            From luxurious facial treatments to intelligent skincare devices, our portfolio caters to
            the evolving needs of modern consumers who seek quality, performance, and trust. With a
            deep understanding of market trends and consumer expectations, we continue to empower our
            retail partners and customers with exceptional skincare solutions that inspire confidence
            and radiance.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;