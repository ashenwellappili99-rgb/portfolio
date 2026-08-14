import React from 'react';
import { Calendar } from 'lucide-react';

export const Timeline = () => {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Academic Journey</h2>
            <p className="section-subtitle">My degree path and practical skills built at ICBT Campus.</p>

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
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            Developing advanced skills in Object-Oriented software architecture, network data protocols, cybersecurity fundamentals, user-centered UI/UX design, statistical data analysis, and core Artificial Intelligence principles.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 2</h3>
                        <p className="date">Completed</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            Gained practical expertise in relational database modeling & SQL query optimization, software system analysis & SDLC design, full-stack web application development, discrete mathematical logic, and team organizational dynamics.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 1</h3>
                        <p className="date">Completed</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            Built strong core skills in computer hardware & operating system architecture, structured algorithm design, foundational programming logic, and IT mathematics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
