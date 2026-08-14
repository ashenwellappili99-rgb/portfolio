import React from 'react';
import { Calendar } from 'lucide-react';

export const Timeline = () => {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Academic Journey</h2>
            <p className="section-subtitle">My degree path and computer science coursework at ICBT Campus.</p>

            <div className="timeline">
                <div className="timeline-item active">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>BSc (Hons) in Information Technology</h3>
                        <p className="specialization">Specializing in Artificial Intelligence</p>
                        <p className="status">
                            <Calendar size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                            Current: Year 2, Semester 1 (2026)
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Currently mastering Object Oriented Programming, Data Communication, Cyber Security Principles, User Experience & Design, Statistics, and Essentials in AI.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 2</h3>
                        <p className="date">Completed</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Database Design and Development, System Analysis and Design, Web Application Development, Discrete Mathematics, and Organizational Behaviour.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 1</h3>
                        <p className="date">Completed</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Computer Systems architecture, Information Systems, Programming Fundamentals, and Mathematics for IT.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
