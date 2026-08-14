import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const botResponses = {
    skills: "I am proficient in Python, C++, HTML, and CSS. I am currently specializing in Artificial Intelligence! 🤖 My main focus is on mastering Python libraries like NumPy and Pandas.",
    projects: "I have worked on several projects, including a Python automation tool for data processing and a high-performance C++ system. Check out the 'My Projects' section for more details! 🚀",
    expertise: "My expertise lies in Python development, particularly for AI and Machine Learning. I also have strong foundations in C++ and Web Development (React/HTML/CSS). 💻",
    academic: "I am an undergraduate IT student specializing in AI. I've completed my first semester with a foundation in C, C++, and Logic Design. Currently, I'm diving into Web Development and Advanced Python! 🎓",
    freelance: "Yes! I am always open to discussing new projects, collaborations, or freelance opportunities. Feel free to reach out via the contact form! 🤝",
    contact: "You can reach me at ashenwellappili99@gmail.com or via my LinkedIn and GitHub profiles. I'm always happy to connect! 📧",
    about: "I'm Ashen, an IT undergraduate with a passion for Artificial Intelligence. I love building structured, logical solutions and I'm constantly leveling up my skills in Python and ML. 👋",
    location: "I am based in Matara, Sri Lanka. You can even see my location on the map in the contact section! 📍",
    greeting: "Hello! 👋 I'm Ashen's virtual assistant. How can I help you today? You can ask about my skills, projects, or how to contact me.",
    thanks: "You're very welcome! Let me know if there's anything else I can help with. 😊",
    bye: "Goodbye! Have a great day! 👋",
    help: "I can tell you about Ashen's technical skills, his academic journey, his projects, or provide his contact information. Just type what you're looking for! 💡"
};

const findBestMatch = (query) => {
    const q = query.toLowerCase();
    const keywords = {
        'skill': 'skills', 'language': 'skills', 'python': 'skills', 'c++': 'skills', 'html': 'skills', 'css': 'skills',
        'project': 'projects', 'work': 'projects', 'build': 'projects',
        'expert': 'expertise', 'special': 'expertise', 'ai': 'expertise', 'machine learning': 'expertise',
        'academic': 'academic', 'study': 'academic', 'university': 'academic', 'education': 'academic', 'degree': 'academic',
        'freelance': 'freelance', 'hire': 'freelance', 'job': 'freelance', 'opportunity': 'freelance',
        'contact': 'contact', 'email': 'contact', 'linkedin': 'contact', 'github': 'contact', 'reach': 'contact',
        'about': 'about', 'who': 'about', 'ashen': 'about',
        'where': 'location', 'live': 'location', 'place': 'location', 'matara': 'location', 'sri lanka': 'location',
        'hi': 'greeting', 'hello': 'greeting', 'hey': 'greeting',
        'thank': 'thanks', 'cool': 'thanks', 'great': 'thanks',
        'bye': 'bye', 'goodbye': 'bye',
        'help': 'help'
    };

    for (const [key, value] of Object.entries(keywords)) {
        if (q.includes(key)) return botResponses[value];
    }
    return "I'm not sure how to answer that specifically, but I can tell you about Ashen's skills, projects, or contact info! Try clicking one of the buttons below. 😊";
};

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! 👋 I'm Ashen's virtual assistant. How can I help you today?", type: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

    const handleSend = (textToSend) => {
        const text = textToSend || input.trim();
        if (!text) return;

        setMessages((prev) => [...prev, { text, type: 'user' }]);
        if (!textToSend) setInput('');

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const reply = findBestMatch(text);
            setMessages((prev) => [...prev, { text: reply, type: 'bot' }]);
        }, 700);
    };

    const quickReplies = [
        { label: 'Skills', key: 'skills' },
        { label: 'Projects', key: 'projects' },
        { label: 'Expertise', key: 'expertise' },
        { label: 'Academic', key: 'academic' },
        { label: 'Freelance', key: 'freelance' },
        { label: 'Contact', key: 'contact' }
    ];

    return (
        <div className="chatbot-widget">
            {!isOpen && (
                <button
                    className="chatbot-toggle"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open AI Chatbot"
                    title="Ask AI Assistant"
                >
                    <MessageSquare size={24} />
                </button>
            )}

            <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
                <div className="chatbot-header">
                    <div className="bot-info">
                        <div className="bot-status"></div>
                        <h3>AI Assistant</h3>
                    </div>
                    <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close Chat">
                        <X size={20} />
                    </button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}-message`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && <div className="message bot-message typing-message">Assistant is typing...</div>}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-quick-replies">
                    {quickReplies.map((item, index) => (
                        <button
                            key={index}
                            className="quick-reply-btn"
                            onClick={() => handleSend(botResponses[item.key])}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="chatbot-input-container">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className="chatbot-send-btn" onClick={() => handleSend()} aria-label="Send">
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};
