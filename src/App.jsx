import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
    return (
        <ThemeProvider>
            <div className="app-container">
                <main style={{ paddingTop: '40px' }}>
                    <Hero />
                    <Skills />
                    <Certifications />
                    <Projects />
                    <Timeline />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
