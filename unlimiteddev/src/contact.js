import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Tetris from './tetris';
import { Theme } from './theme';

function Contact() {
  const { theme } = useContext(Theme);
  const [formData, setFormData] = useState({
    email: '',
    services: [],
  });

  const servicesList = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'UI/UX Design',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      services: formData.services.join(', '),
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        alert('Your request has been sent successfully!');
        setFormData({ email: '', services: [] });
      })
      .catch((err) => {
        alert('Failed to send your request. Please try again.');
      });
  };

  return (
    <section id="contact" className={`contact ${theme}`}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Services you are interested in:</label>
          <div className="services-container">
            <div className="services-list">
              {servicesList.map((service) => (
                <label key={service} className="service-label">
                  {service}
                </label>
              ))}
            </div>
            <div className="checkbox-list">
              {servicesList.map((service) => (
                <input
                  key={service}
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                  className="service-checkbox"
                />
              ))}
            </div>
          </div>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      <div className="social-icons">
        <div className="social-icon">
          <i className="fab fa-github"></i>
          <span>https://github.com/joejassy</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-linkedin"></i>
          <span>Joe Jassy</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-twitter"></i>
          <span>@joejassy</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-telegram"></i>
          <span>user2121</span>
        </div>
        <div className="social-icon">
          <i className="fas fa-envelope"></i>
          <span>joejassyio@gmail.com</span>
        </div>
      </div>
      <Tetris />
    </section>
  );
}

export default Contact;
