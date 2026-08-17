import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
                Currently leveling up my skills in Python and AI, following a structured learning path at ICBT Campus.
                Feel free to reach out for collaborations or project inquiries!
            </p>

            <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
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
                        href="https://github.com/ashenwellappili"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repository
                    </a>
                </div>
            </div>
        </section>
    );
};
