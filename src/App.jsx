import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { LoginModal } from './components/LoginModal';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

export function App() {
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <ThemeProvider>
            <div className="app-container">
                <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
                <Navbar onOpenLogin={() => setLoginOpen(true)} />
                <main>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Timeline />
                    <Contact />
                </main>
                <Chatbot />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
