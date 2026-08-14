import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export const Projects = () => {
    const projectsList = [
        {
            title: 'Python Automation Tool',
            description: 'A custom script developed to automate repetitive data processing tasks, improving workflow efficiency by 40%.',
            tags: ['Python', 'Automation', 'Data Processing'],
        },
        {
            title: 'C++ Performance System',
            description: 'A high-performance backend module focused on low-level memory management, efficient algorithms, and speed.',
            tags: ['C++', 'Algorithms', 'System Design'],
        },
        {
            title: 'React AI Assistant Portfolio',
            description: 'A modern, dynamic portfolio built with Vite + React, featuring dark/light themes, instant site search, and interactive AI chatbot.',
            tags: ['React', 'JavaScript', 'Vite', 'AI Assistant'],
        }
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">A showcase of hands-on applications and systems I have built.</p>

            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="tags">
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
