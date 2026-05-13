// Getting required DOM elements to interact with
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search-btn');
const searchResults = document.getElementById('search-results');
const searchResultsContent = document.getElementById('search-results-content');
const closeResults = document.getElementById('close-results');

// Check user's saved theme preference in local storage on page load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Add a click event to the toggle button to swap themes
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Switch the .dark-mode class on body

    // Adjust local storage and the button icon based on current state
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ===== SEARCH FUNCTIONALITY =====

// Search content data structure
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
        content: 'BSc Information Technology, Artificial Intelligence, Web Application Development, Advanced Python Programming, Semester 1, Semester 2, Logic Design, C, C++, university, degree, coursework, learning',
        preview: 'BSc (Hons) in Information Technology with specialization in AI...'
    },
    {
        id: 'projects',
        title: 'Projects',
        category: 'Work',
        content: 'Coming Soon, Projects, Portfolio projects, work, portfolio, applications, building, development, hands-on',
        preview: 'I am actively working on new projects. Stay tuned!'
    },
    {
        id: 'contact',
        title: 'Contact Me',
        category: 'Contact',
        content: 'Get In Touch, Gmail, GitHub, LinkedIn, Email, Contact Information, ashenwellappili99@gmail.com, reach out, connect, social media, networking',
        preview: 'Contact information and social links'
    }
];

// Function to highlight matching keywords
function highlightKeywords(text, query) {
    if (!query || query.length === 0) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Function to clear all site-wide highlights
function clearSiteHighlights() {
    const highlights = document.querySelectorAll('.site-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize(); // Merge adjacent text nodes
    });
}

// Function to highlight content across the entire main section
function highlightSiteContent(query) {
    clearSiteHighlights(); // First clear old ones
    if (!query || query.length < 2) return; // Don't highlight very short queries

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const regex = new RegExp(`(${query})`, 'gi');

    // Recursive function to traverse text nodes
    function traverse(node) {
        if (node.nodeType === 3) { // Text node
            const matches = node.nodeValue.match(regex);
            if (matches && node.parentNode && !node.parentNode.closest('.chatbot-widget') && !node.parentNode.closest('.navbar')) {
                const fragment = document.createDocumentFragment();
                let lastIdx = 0;
                node.nodeValue.replace(regex, (match, p1, offset) => {
                    fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIdx, offset)));
                    const mark = document.createElement('mark');
                    mark.className = 'site-highlight';
                    mark.textContent = match;
                    fragment.appendChild(mark);
                    lastIdx = offset + match.length;
                });
                fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIdx)));
                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE', 'NOSCRIPT', 'INPUT', 'TEXTAREA'].includes(node.tagName)) {
            // Don't traverse into scripts, styles, or inputs
            Array.from(node.childNodes).forEach(traverse);
        }
    }

    traverse(mainContent);
}

// Function to perform search
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query.length === 0) {
        searchResults.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        clearSiteHighlights();
        return;
    }

    highlightSiteContent(query);

    // Filter results based on search query
    const results = searchableContent.filter(item =>
        item.content.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query)
    );

    // Display results
    displayResults(results, query);
    clearSearchBtn.style.display = 'block';
}

// Function to display search results
function displayResults(results, query) {
    if (results.length === 0) {
        searchResultsContent.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px; display: block; color: var(--primary-blue);"></i>
                No results found for "${query}"
            </div>
        `;
        searchResults.style.display = 'block';
        return;
    }

    let resultsHTML = '';
    results.forEach(result => {
        const highlightedPreview = highlightKeywords(result.preview, query);
        const highlightedTitle = highlightKeywords(result.title, query);

        resultsHTML += `
            <div class="search-result-item" onclick="scrollToSection('${result.id}')">
                <div class="search-result-header">
                    <div class="search-result-title">
                        <i class="fas fa-map-marker-alt" style="margin-right: 8px; color: var(--primary-blue);"></i>
                        ${highlightedTitle}
                    </div>
                    <span class="search-result-category">${result.category}</span>
                </div>
                <div class="search-result-preview">${highlightedPreview}</div>
            </div>
        `;
    });

    searchResultsContent.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
}

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Remove any existing highlight from all sections
        document.querySelectorAll('.highlight-section').forEach(el => {
            el.classList.remove('highlight-section');
        });

        // Add highlight class to the target section
        section.classList.add('highlight-section');

        // Remove the highlight after 2 seconds
        setTimeout(() => {
            section.classList.remove('highlight-section');
        }, 2000);

        searchResults.style.display = 'none';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
    }
}

// Event listeners for search
searchInput.addEventListener('input', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

searchBtn.addEventListener('click', performSearch);

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.style.display = 'none';
    clearSearchBtn.style.display = 'none';
    clearSiteHighlights();
    searchInput.focus();
});

closeResults.addEventListener('click', () => {
    searchResults.style.display = 'none';
    clearSiteHighlights();
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container') &&
        !e.target.closest('.search-results')) {
        searchResults.style.display = 'none';
        clearSiteHighlights();
    }
});

// Clear search and highlights on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchResults.style.display = 'none';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        clearSiteHighlights();
        searchInput.blur();
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const navPageLinks = document.querySelectorAll('.nav-page-link');
const sections = ['hero', 'skills', 'education', 'contact'].map(id => document.getElementById(id));

// Use IntersectionObserver to detect which section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active from all nav links
            navPageLinks.forEach(link => link.classList.remove('active'));
            // Add active to the matching link
            const activeLink = document.querySelector(`.nav-page-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { threshold: 0.35 }); // Trigger when 35% of section is visible

sections.forEach(section => { if (section) observer.observe(section); });

// ===== SCROLL ANIMATIONS =====
const fadeSections = document.querySelectorAll('.fade-in-section');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            // Optional: Remove if you want them to fade out when scrolling away
            entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.15 });

fadeSections.forEach(section => {
    if (section) fadeObserver.observe(section);
});

// ===== MOBILE MENU =====
const mobileMenuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('mobile-active');
    });
}

// Close mobile menu when a link is clicked
navPageLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-active');
    });
});

// ===== CHATBOT LOGIC =====
// Select required chatbot DOM elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const quickReplies = document.querySelectorAll('.quick-reply');

if (chatbotToggle && chatbotClose && chatbotWindow) {
    // Open chat window and hide the toggle button
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
        chatbotToggle.style.transform = 'scale(0)';
    });

    // Close chat window and show the toggle button
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
        chatbotToggle.style.transform = 'scale(1)';
    });

    // Database of pre-defined bot responses
    const botResponses = {
        skills: "I am proficient in Python, C++, HTML, and CSS. I am currently specializing in Artificial Intelligence! 🤖 My main focus is on mastering Python libraries like NumPy and Pandas.",
        projects: "I have worked on several projects, including a Python automation tool for data processing and a high-performance C++ system. Check out the 'My Projects' section for more details! 🚀",
        expertise: "My expertise lies in Python development, particularly for AI and Machine Learning. I also have strong foundations in C++ and Web Development (HTML/CSS). 💻",
        academic: "I am an undergraduate IT student specializing in AI. I've completed my first semester with a foundation in C, C++, and Logic Design. Currently, I'm diving into Web Development and Advanced Python! 🎓",
        freelance: "Yes! I am always open to discussing new projects, collaborations, or freelance opportunities. Feel free to reach out via the contact form! 🤝",
        contact: "You can reach me at ashenwellappili99@gmail.com or via my LinkedIn and GitHub profiles. I'm always happy to connect! 📧",
        about: "I'm Ashen, an IT undergraduate with a passion for Artificial Intelligence. I love building structured, logical solutions and I'm constantly leveling up my skills in Python and ML. 👋",
        location: "I am based in Matara, Sri Lanka. You can even see my location on the map in the contact section! 📍",
        greeting: "Hello! 👋 I'm Ashen's virtual assistant. How can I help you today? You can ask about my skills, projects, or how to contact me.",
        thanks: "You're very welcome! Let me know if there's anything else I can help with. 😊",
        bye: "Goodbye! Have a great day! 👋",
        who: "I am an AI assistant created to help you learn more about Ashen and his work. Ask me anything about his skills, projects, or education!",
        help: "I can tell you about Ashen's technical skills, his academic journey, his projects, or provide his contact information. Just type what you're looking for! 💡"
    };

    // Function to handle user input from the text bar
    function handleUserInput() {
        const text = chatbotInput.value.trim();
        if (text) {
            addChatMessage(text, 'user'); // Add user message bubble
            chatbotInput.value = ''; // Clear input field
            processBotResponse(text.toLowerCase()); // Process the query
        }
    }

    // Function to find the best response based on keywords
    function findBestMatch(query) {
        // 1. Direct keyword mapping
        const keywords = {
            'skill': 'skills', 'language': 'skills', 'python': 'skills', 'c++': 'skills', 'html': 'skills', 'css': 'skills',
            'project': 'projects', 'work': 'projects', 'build': 'projects',
            'expert': 'expertise', 'special': 'expertise', 'ai': 'expertise', 'machine learning': 'expertise',
            'academic': 'academic', 'study': 'academic', 'university': 'academic', 'education': 'academic', 'degree': 'academic',
            'freelance': 'freelance', 'hire': 'freelance', 'job': 'freelance', 'opportunity': 'freelance',
            'contact': 'contact', 'email': 'contact', 'linkedin': 'contact', 'github': 'contact', 'reach': 'contact',
            'about': 'about', 'who': 'about', 'ashen': 'about',
            'where': 'location', 'live': 'location', 'place': 'location', 'matara': 'location', 'sri lanka': 'location',
            'hi': 'greeting', 'hello': 'greeting', 'hey': 'greeting', 'morning': 'greeting',
            'thank': 'thanks', 'cool': 'thanks', 'great': 'thanks', 'awesome': 'thanks',
            'bye': 'bye', 'goodbye': 'bye', 'see ya': 'bye',
            'help': 'help', 'what can': 'help', 'question': 'help'
        };

        for (const [key, value] of Object.entries(keywords)) {
            if (query.includes(key)) return botResponses[value];
        }

        // 2. Search in searchableContent (from search.js context)
        for (const item of searchableContent) {
            if (query.includes(item.title.toLowerCase()) || item.content.toLowerCase().includes(query)) {
                return `Here's what I found about "${item.title}": ${item.preview} You can find more in that section!`;
            }
        }

        return null;
    }

    // Function to process bot responses with a simulated typing delay
    function processBotResponse(query) {
        // Create and show typing indicator
        const typingMsg = document.createElement('div');
        typingMsg.className = 'message bot-message typing';
        typingMsg.textContent = '...';
        chatbotMessages.appendChild(typingMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        setTimeout(() => {
            typingMsg.remove(); // Remove typing indicator

            const matchedResponse = findBestMatch(query);
            let response = matchedResponse || "I'm not sure how to answer that specifically, but I can tell you about Ashen's skills, projects, or contact info! Try clicking one of the buttons above. 😊";

            addChatMessage(response, 'bot'); // Add bot message bubble
        }, 800); // Slightly faster delay for better UX
    }

    // Event listeners for sending manual messages
    chatbotSend.addEventListener('click', handleUserInput);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });

    // Event listeners for quick-reply buttons
    quickReplies.forEach(button => {
        button.addEventListener('click', () => {
            const questionText = button.textContent;
            const key = button.getAttribute('data-question');
            addChatMessage(questionText, 'user'); // Add user bubble
            processBotResponse(key); // Process using the key for direct match
        });
    });

    // Helper function to append a message bubble to the chat
    function addChatMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to bottom
    }
}

// ===== LOGIN FUNCTIONALITY =====
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.getElementById('login-form');
const navLoginBtn = document.getElementById('nav-login-btn');

// Initially lock the page
document.body.classList.add('locked');
if (loginOverlay) {
    loginOverlay.style.display = 'flex';
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        // Simulate login success
        document.body.classList.remove('locked');
        loginOverlay.style.display = 'none';
    });
}

if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('locked');
        if (loginOverlay) {
            loginOverlay.style.display = 'flex';
        }
    });
}



