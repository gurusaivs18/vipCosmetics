import { Link } from 'react-router-dom';
import '../css/Footer.css';
import vipLogo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src={vipLogo} alt="VIP Cosmetics" className="brand-logo-img" />
            <h3>VIP Cosmetics Trading LLC</h3>
          </div>
          <p>
            Distributors of world-class skincare across the UAE & KSA.
            We partner with leading retailers to deliver premium,
            science-forward beauty that inspires confidence and results.
          </p>
        </div>

        <div>
          <h4>VIP Cosmetics Trading LLC</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="mailto:info@vipcosmetics.net">info@vipcosmetics.net</a>
          <a href="tel:+971504545061">+971 50 454 5061</a>
          <p className="office-title">UAE Office</p>
          <p>Office 2403, Oaks Liwa Heights, Cluster W, Jumeirah Lakes Towers, Dubai, UAE</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2026 VIP Cosmetics Trading LLC. All rights reserved.</span>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;