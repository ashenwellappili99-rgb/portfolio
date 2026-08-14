import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Timeline = () => {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Academic Journey</h2>
            <p className="section-subtitle">My degree path and foundational computer science coursework.</p>

            <div className="timeline">
                <div className="timeline-item active">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>BSc (Hons) in Information Technology</h3>
                        <p className="specialization">Specializing in Artificial Intelligence</p>
                        <p className="status">
                            <Calendar size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                            Current: Year 1, Semester 2 (2026)
                        </p>
                        <ul>
                            <li>Web Application Development (React, HTML/CSS, JS)</li>
                            <li>Advanced Python Programming & AI Principles</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 1</h3>
                        <p className="date">
                            <CheckCircle2 size={14} style={{ display: 'inline', marginRight: 4, color: '#22c55e', verticalAlign: 'middle' }} />
                            Completed: Feb 2026
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Foundational fundamentals in C, C++ object-oriented programming, logic design, and computational theory.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
