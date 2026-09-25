import { useState } from 'react';
import '../css/ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', company: '',
    inquiryType: 'General', subject: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your actual submit endpoint / email service.
    console.log('Contact form submitted:', form);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <p className="form-sub">Tell us a bit about your inquiry and we'll get back to you.</p>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input name="fullName" placeholder="Your name" value={form.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>
          <input name="phone" placeholder="+971 5X XXX XXXX" value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Inquiry Type</label>
          <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
            <option>General</option>
            <option>Partnership</option>
            <option>Wholesale</option>
            <option>Support</option>
          </select>
        </div>
        <div className="form-group">
          <label>Subject *</label>
          <input name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label>Message *</label>
        <textarea name="message" rows="5" placeholder="Please share details about your inquiry..." value={form.message} onChange={handleChange} required />
      </div>

      <div className="form-footer">
        <p className="disclaimer">
          We'll only use your details to respond to your inquiry.<br />
          By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a>.
        </p>
        <button type="submit" className="submit-btn">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;