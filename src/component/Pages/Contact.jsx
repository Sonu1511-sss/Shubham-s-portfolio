import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const contactMethods = [
  { id: 1, title: 'Email', detail: 'Shubhamuprade0@gmail.com', icon: '📧' },
  { id: 2, title: 'Phone', detail: '+91 9977423362', icon: '📞' },
  { id: 3, title: 'LinkedIn', detail: 'linkedin.com/shubham-uprade', icon: '🔗' },
  { id: 4, title: 'GitHub', detail: 'https://github.com/Sonu1511-sss', icon: '🐱' },
  { id: 5, title: 'Location', detail: 'Bhopal, Madhya Pradesh, India', icon: '📍' },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_fdrkusw',  // Replace with your service ID
        'template_g7h0uq9',  // Replace with your template ID
        form.current,
        'YtkT7-e_NYTsOLza-'  // Replace with your user ID
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ from_name: '', from_email: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('Failed to send message...', error);
          setStatus('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <section className="py-12 mt-10">
      <h2 className="text-center text-4xl font-bold text-purple-500 mb-8">
        Contact <span className="text-white">Me</span>
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg shadow-lg ">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-orange-400">{status}</p>}
        </form>
         {/* Contact Methods Section */}
         <div className="p-6 rounded-lg shadow-lg ">
          <h3 className="text-xl font-bold text-purple-500 mb-4">Contact Methods</h3>
          <ul className="space-y-4">
            {contactMethods.map((method) => (
              <li key={method.id} className="flex items-center">
                <span className="text-2xl mr-2">{method.icon}</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">{method.title}</h4>
                  <p className="text-gray-300">{method.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
