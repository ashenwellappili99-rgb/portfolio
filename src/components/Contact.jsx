import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section id="contact" className="section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
                Currently leveling up my skills in Python and AI, following a structured and logical learning path.
                Feel free to reach out for collaborations or project inquiries!
            </p>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ashenwellappili99@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ashenwellappili99@gmail.com
                        </a>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <a
                            href="https://www.linkedin.com/in/ashen-wellappili/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <a
                            href="https://github.com/ashenwellappili99-rgb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--primary-blue)' }}>
                            <Check size={48} style={{ marginBottom: 12 }} />
                            <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Message Sent!</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Thank you for contacting me. I will get back to you soon!
                            </p>
                        </div>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                                Send Message <Send size={16} />
                            </button>
                        </>
                    )}
                </form>

                <div className="map-wrapper">
                    <iframe
                        title="Matara Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.83770335606!2d80.511105!3d5.949635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1391d3a0a1f9d%3A0x29673448db1bc908!2sMatara!5e0!3m2!1sen!2slk!4v1715504780000!5m2!1sen!2slk"
                        width="100%"
                        height="280"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
