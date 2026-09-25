import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/Reveal.css';

// direction: 'left' | 'right' — side the section slides in FROM
function Reveal({ direction = 'left', children, className = '' }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;