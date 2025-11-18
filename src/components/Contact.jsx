import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SectionTitle = ({ title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-10 w-full justify-center">
        {title}
    </h2>
);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <SectionTitle title="Let's Connect" />
        <h3 className="text-3xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
        <p className="text-slate max-w-xl mx-auto mb-8">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lightest-slate font-mono mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-lightest-navy border border-slate/30 rounded-xl px-4 py-3 text-lightest-slate focus:outline-none focus:border-green transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lightest-slate font-mono mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-lightest-navy border border-slate/30 rounded-xl px-4 py-3 text-lightest-slate focus:outline-none focus:border-green transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-lightest-slate font-mono mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-lightest-navy border border-slate/30 rounded-xl px-4 py-3 text-lightest-slate focus:outline-none focus:border-green transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          {status === 'success' && (
            <div className="bg-green/10 border border-green text-green px-4 py-3 rounded-xl">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-xl">
              Oops! Something went wrong. Please try again or email me directly.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 border border-green text-green rounded-xl font-mono text-lg hover:bg-green/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <span className="text-slate">or</span>
            <a
              href="mailto:shresthikashyap14@email.com"
              className="text-green hover:underline font-mono"
            >
              Email me directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;