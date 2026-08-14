import React from 'react';
import { ExternalLink, Award, ShieldCheck } from 'lucide-react';

export const Certifications = () => {
    const certsList = [
        {
            title: 'AI Skills Fest 2026',
            issuer: 'Microsoft',
            issueDate: '2026',
            badgeImage: 'https://images.credly.com/images/082c8d0c-5232-4597-b6c4-6bebcc4f3046/linkedin_thumb_blob',
            description: 'Demonstrates foundational and applied AI knowledge, practical use cases, responsible AI application, and problem solving using modern AI tools.',
            credlyUrl: 'https://www.credly.com/badges/da42ec48-3af2-4381-9ce5-c0bbb3abf9c6/public_url'
        }
    ];

    return (
        <section id="certifications" className="section">
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={28} style={{ color: 'var(--primary-blue)' }} />
                Certifications & Badges
            </h2>
            <p className="section-subtitle">Verified digital credentials and industry certifications.</p>

            <div className="projects-grid">
                {certsList.map((cert, index) => (
                    <div key={index} className="project-card" style={{ gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <img
                                src={cert.badgeImage}
                                alt={cert.title}
                                style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '12px' }}
                            />
                            <div>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '4px' }}>
                                    <ShieldCheck size={14} /> Verified Credential • {cert.issuer}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>{cert.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    {cert.description}
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                            <a
                                href={cert.credlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ padding: '8px 16px', fontSize: '13px' }}
                            >
                                Verify on Credly <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
