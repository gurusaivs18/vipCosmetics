import ContactForm from '../components/ContactForm';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact-page container">
      <div className="contact-grid">
        <div className="office-card">
          <h3>Head Office — UAE</h3>
          <p>Office No. 2403, Oaks Liwa Heights, Cluster W, Jumeirah Lakes Towers, United Arab Emirates</p>
          <a href="mailto:info@vipcosmetics.net">info@vipcosmetics.net</a>
          <a href="tel:+971504545061">+971 50 454 5061</a>
          <a href="#">WhatsApp</a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;