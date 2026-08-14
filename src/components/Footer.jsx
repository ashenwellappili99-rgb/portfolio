import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} Ashen Wellappili. Built with React & Vite.</p>
            </div>
        </footer>
    );
};
