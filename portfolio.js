// Getting required DOM elements to interact with
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

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
