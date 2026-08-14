import React from 'react';
import { ArrowRight } from 'lucide-react';
import avatarImg from '../assets/portfolio.jpg';

export const Hero = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-text">
                <h1>
                    Hi, I'm <span>Ashen 👋</span>
                </h1>
                <p>
                    I am an undergraduate IT student specializing in Artificial Intelligence, committed to building a
                    strong foundation in Python and Machine Learning. I follow a structured and logical approach to
                    learning, steadily developing my skills through consistent practice and hands-on projects.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                        Get In Touch <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-outline" onClick={() => scrollToSection('projects')}>
                        View Projects
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-image-wrapper">
                    <img src={avatarImg} alt="Ashen Wellappili Headshot" />
                </div>
            </div>
        </section>
    );
};
