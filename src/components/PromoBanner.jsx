import { useState } from 'react';
import '../css/PromoBanner.css';

// Only one tagline was visible in the recording — add the rest to match your dot count.
const taglines = [
  'Beauty for every vibe. Every Generation. Always VIP.',
];

function PromoBanner() {
  const [active, setActive] = useState(0);

  return (
    <section className="promo-banner">
      <div className="promo-dots">
        {taglines.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? 'dot-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to tagline ${i + 1}`}
          />
        ))}
      </div>
      <div className="promo-text">{taglines[active]}</div>
    </section>
  );
}

export default PromoBanner;