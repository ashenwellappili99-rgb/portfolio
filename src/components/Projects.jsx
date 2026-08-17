import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
    const projectsList = [
        {
            title: 'Apec Ardent Immigration Company Website',
            description: 'A comprehensive Web Development project built in Year 1, Semester 2, featuring a responsive immigration & visa consultancy platform for Apec Ardent with modern UI design, service showcases, and interactive components.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Web Development'],
            githubUrl: 'https://github.com/ashenwellappili'
        },
        {
            title: 'QuickFix Repair Shop System',
            description: 'A C & C++ programming fundamentals project developed in Year 1, Semester 1, applying core Programming Fundamentals, Object-Oriented Programming (OOP), and data management for repair order and client service workflows.',
            tags: ['C++', 'C', 'Programming Fundamentals', 'OOP'],
            githubUrl: 'https://github.com/ashenwellappili'
        },
        {
            title: 'Personal React Portfolio',
            description: 'A modern, component-driven portfolio web application built with React and Vite, featuring dynamic dark/light themes, instant portfolio search, and responsive design.',
            tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
            githubUrl: 'https://github.com/ashenwellappili/portfolio'
        }
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">A showcase of real software systems and web applications I have built.</p>

            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <h3>{project.title}</h3>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', transition: 'transform 0.2s' }}
                                    title="View on GitHub"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <p>{project.description}</p>
                        </div>
                        <div>
                            <div className="tags" style={{ marginTop: '16px' }}>
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                >
                                    View Project <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
