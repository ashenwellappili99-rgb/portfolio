import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Search, X, Menu, MapPin, Lock } from 'lucide-react';

const searchableContent = [
    {
        id: 'hero',
        title: 'About Me',
        category: 'Profile',
        content: 'Hi, I\'m Ashen. Undergraduate IT student specializing in Artificial Intelligence. Python, Machine Learning, learning, web development, coding, programming, developer, engineer',
        preview: 'Ashen - Undergraduate IT student specializing in Artificial Intelligence...'
    },
    {
        id: 'skills',
        title: 'Technical Skills',
        category: 'Skills',
        content: 'Python, C++, HTML, Programming Languages, coding, development, web, frontend, backend, languages, frameworks, tools',
        preview: 'Python, C++, HTML and other technical skills'
    },
    {
        id: 'education',
        title: 'Academic Journey',
        category: 'Education',
        content: 'BSc Information Technology, Artificial Intelligence, ICBT Campus, Year 2 Semester 1, Object Oriented Programming, Data Communication, Cyber Security Principles, User Experience and Design, Statistics, Essentials in AI, Database Design, System Analysis, Web Application Development, Discrete Mathematics, Computer Systems, Information Systems, Programming Fundamentals, Mathematics for IT',
        preview: 'BSc (Hons) IT (AI Specialization) at ICBT Campus - Currently in Year 2, Semester 1...'
    },
    {
        id: 'projects',
        title: 'Projects',
        category: 'Work',
        content: 'Python Automation Tool, C++ Performance System, automation, algorithms, speed, memory, projects, portfolio',
        preview: 'Python Automation Tool & C++ Performance System projects'
    },
    {
        id: 'contact',
        title: 'Contact Me',
        category: 'Contact',
        content: 'Get In Touch, Gmail, GitHub, LinkedIn, Email, Contact Information, ashenwellappili99@gmail.com, Matara, Sri Lanka, reach out, connect',
        preview: 'Contact details, message form and Matara Google Map'
    }
];

export const Navbar = ({ onOpenLogin }) => {
    const { theme, toggleTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const searchRef = useRef(null);

    // Filter search results
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        const query = searchQuery.toLowerCase().trim();
        const matches = searchableContent.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.content.toLowerCase().includes(query)
        );
        setSearchResults(matches);
        setShowResults(true);
    }, [searchQuery]);

    // Close search dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            setShowResults(false);
            setSearchQuery('');
            setMobileMenuOpen(false);

            // Add pulse highlight class
            element.classList.remove('highlight-section');
            void element.offsetWidth; // Trigger reflow
            element.classList.add('highlight-section');
            setTimeout(() => {
                element.classList.remove('highlight-section');
            }, 2000);
        }
    };

    return (
        <header className="navbar-header">
            <nav className="navbar">
                <button
                    className="menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <Menu size={22} />
                </button>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <button
                        className={`nav-page-link ${activeSection === 'hero' ? 'active' : ''}`}
                        onClick={() => scrollToSection('hero')}
                    >
                        About
                    </button>
                    <button
                        className={`nav-page-link ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`nav-page-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={`nav-page-link ${activeSection === 'education' ? 'active' : ''}`}
                        onClick={() => scrollToSection('education')}
                    >
                        Academic
                    </button>
                    <button
                        className={`nav-page-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                    <button className="nav-page-link" onClick={onOpenLogin}>
                        <Lock size={14} style={{ marginRight: 4, display: 'inline' }} />
                        Login
                    </button>
                </div>

                <div className="navbar-center" ref={searchRef}>
                    <div className="search-container">
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search portfolio..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery ? (
                                <button className="clear-icon-btn" onClick={() => setSearchQuery('')}>
                                    <X size={16} />
                                </button>
                            ) : (
                                <button className="search-icon-btn">
                                    <Search size={16} />
                                </button>
                            )}
                        </div>

                        {showResults && (
                            <div className="search-results">
                                <div className="search-results-header">
                                    <span>Search Results ({searchResults.length})</span>
                                    <button className="clear-icon-btn" onClick={() => setShowResults(false)}>
                                        <X size={14} />
                                    </button>
                                </div>
                                <div className="search-results-content">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((item) => (
                                            <div
                                                key={item.id}
                                                className="search-result-item"
                                                onClick={() => scrollToSection(item.id)}
                                            >
                                                <div className="search-result-header">
                                                    <div className="search-result-title">
                                                        <MapPin size={14} style={{ color: 'var(--primary-blue)', marginRight: 6, display: 'inline' }} />
                                                        {item.title}
                                                    </div>
                                                    <span className="search-result-category">{item.category}</span>
                                                </div>
                                                <div className="search-result-preview">{item.preview}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="search-no-results">
                                            No matches found for "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle dark/light mode"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};
