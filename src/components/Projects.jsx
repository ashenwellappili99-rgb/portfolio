import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
    const projectsList = [
        {
            title: 'Coffee Shop Website',
            description: 'A responsive web application project featuring an interactive menu showcase, brand narrative, and modern styled UI built for Web Application Development.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Web Development'],
            githubUrl: 'https://github.com/ashenwellappili99-rgb'
        },
        {
            title: 'QuickFix Repair Shop System',
            description: 'A comprehensive C & C++ application developed in Year 1, Semester 1 using Object-Oriented Programming and C fundamentals for managing repair orders, client records, and service workflows.',
            tags: ['C++', 'C', 'OOP', 'Data Management'],
            githubUrl: 'https://github.com/ashenwellappili99-rgb'
        },
        {
            title: 'Personal React Portfolio',
            description: 'A modern, component-driven portfolio web application built with React and Vite, featuring dynamic dark/light themes, instant portfolio search, and responsive design.',
            tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
            githubUrl: 'https://github.com/ashenwellappili99-rgb/portfolio'
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
                        <div className="tags" style={{ marginTop: '16px' }}>
                            {project.tags.map((tag, tIndex) => (
                                <span key={tIndex} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
