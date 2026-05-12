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

// Function to perform search
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query.length === 0) {
        searchResults.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        return;
    }

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
    searchInput.focus();
});

closeResults.addEventListener('click', () => {
    searchResults.style.display = 'none';
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container') &&
        !e.target.closest('.search-results')) {
        searchResults.style.display = 'none';
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

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== CHATBOT LOGIC =====
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const quickReplies = document.querySelectorAll('.quick-reply');

if (chatbotToggle && chatbotClose && chatbotWindow) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
        chatbotToggle.style.transform = 'scale(0)';
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
        chatbotToggle.style.transform = 'scale(1)';
    });

    const botResponses = {
        skills: "I am proficient in Python, C++, HTML, and CSS. I am currently specializing in Artificial Intelligence! 🤖",
        projects: "I have worked on Python automation tools, C++ performance systems, and various web applications. Check out my 'My Projects' section for more details! 🚀",
        contact: "You can reach me at ashenwellappili99@gmail.com or via my LinkedIn and GitHub profiles linked below. Let's connect! 📧"
    };

    quickReplies.forEach(button => {
        button.addEventListener('click', () => {
            const questionText = button.textContent;
            const key = button.getAttribute('data-question');
            
            // Add user message
            addChatMessage(questionText, 'user');
            
            // Show typing indicator
            const typingMsg = document.createElement('div');
            typingMsg.className = 'message bot-message typing';
            typingMsg.textContent = '...';
            chatbotMessages.appendChild(typingMsg);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            
            // Bot response after delay
            setTimeout(() => {
                typingMsg.remove();
                addChatMessage(botResponses[key] || "I'm not sure about that. Try one of the other options!", 'bot');
            }, 1000);
        });
    });

    function addChatMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return messageDiv;
    }
}


