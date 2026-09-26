
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactForm.css';

const SERVICE_ID = 'service_jgife38';
const TEMPLATE_ID = 'template_cjzj8p3';
const PUBLIC_KEY = 'mAgXMTXwg3WM34wDk';

function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'General',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      title: form.subject,
      name: form.fullName,
      email: form.email,
      time: new Date().toLocaleString('en-AE', {
        timeZone: 'Asia/Dubai',
      }),
      message:
        `${form.message}\n\n---\nPhone: ${form.phone || 'N/A'}\nCompany: ${
          form.company || 'N/A'
        }\nInquiry Type: ${form.inquiryType}`,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');

        setForm({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: 'General',
          subject: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

  const handleWhatsApp = () => {
    const whatsappNumber = '971504545061';


    const whatsappMessage = `Hello, I would like to make an inquiry.

Name: ${form.fullName || 'N/A'}
Email: ${form.email || 'N/A'}
Phone: ${form.phone || 'N/A'}
Company: ${form.company || 'N/A'}
Inquiry Type: ${form.inquiryType || 'General'}
Subject: ${form.subject || 'N/A'}

Message:
${form.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send us a message</h2>

      <p className="form-sub">
        Tell us a bit about your inquiry and we'll get back to you.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>

          <input
            name="fullName"
            placeholder="Your name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>

          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>

          <input
            name="phone"
            placeholder="+971 5X XXX XXXX"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Company</label>

          <input
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Inquiry Type</label>

          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
          >
            <option>General</option>
            <option>Partnership</option>
            <option>Wholesale</option>
            <option>Support</option>
          </select>
        </div>

        <div className="form-group">
          <label>Subject *</label>

          <input
            name="subject"
            placeholder="How can we help?"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Message *</label>

        <textarea
          name="message"
          rows="5"
          placeholder="Please share details about your inquiry..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-footer">
        <p className="disclaimer">
          We'll only use your details to respond to your inquiry.
          <br />
          By submitting this form, you agree to our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <div className="contact-buttons">
          <button
            type="button"
            className="whatsapp-btn"
            onClick={handleWhatsApp}
          >
            WhatsApp
          </button>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>

      {status === 'sent' && (
        <p className="form-status form-status-ok">
          Message sent — we'll get back to you soon.
        </p>
      )}

      {status === 'error' && (
        <p className="form-status form-status-error">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
