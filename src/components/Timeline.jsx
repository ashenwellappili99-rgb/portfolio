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
                            Current: Year 2, Semester 2 (2026)
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px' }}>
                            Advanced AI coursework, Machine Learning algorithms, and software engineering.
                        </p>
                    </div>
                </div>

                <div className="timeline-item completed">
                    <div className="timeline-dot" style={{ borderColor: '#22c55e', background: '#22c55e' }}></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 2</h3>
                        <p className="date">
                            <CheckCircle2 size={14} style={{ display: 'inline', marginRight: 4, color: '#22c55e', verticalAlign: 'middle' }} />
                            Completed
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', listStyleType: 'none', paddingLeft: 0 }}>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>IT1306</strong>: Database Design and Development
                            </li>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>IT1307</strong>: System Analysis and Design
                            </li>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>IT1308</strong>: Web Application Development
                            </li>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>IT1309</strong>: Discrete Mathematics
                            </li>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>IT1210</strong>: General English & Communication Skills
                            </li>
                            <li style={{ background: 'rgba(37, 99, 235, 0.06)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <strong style={{ color: 'var(--primary-blue)' }}>BM4213</strong>: Organizational Behaviour
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Year 1, Semester 1</h3>
                        <p className="date">
                            <CheckCircle2 size={14} style={{ display: 'inline', marginRight: 4, color: '#22c55e', verticalAlign: 'middle' }} />
                            Completed
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Foundational programming in C & C++, Logic Design, and Computational Theory.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
