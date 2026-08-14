import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBrain } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
    const skillsList = [
        {
            name: 'Python',
            icon: <FontAwesomeIcon icon={faPython} />,
            desc: 'Specialized in AI libraries & data automation'
        },
        {
            name: 'C++',
            icon: <FontAwesomeIcon icon={faCode} />,
            desc: 'High performance memory & algorithm design'
        },
        {
            name: 'HTML5 & Web',
            icon: <FontAwesomeIcon icon={faHtml5} />,
            desc: 'Modern semantic layouts & responsive design'
        },
        {
            name: 'AI & Machine Learning',
            icon: <FontAwesomeIcon icon={faBrain} />,
            desc: 'Foundation in NumPy, Pandas & ML concepts'
        }
    ];

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Core technologies and domains I am actively mastering.</p>

            <div className="skills-grid">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon-box">{skill.icon}</div>
                        <span>{skill.name}</span>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
