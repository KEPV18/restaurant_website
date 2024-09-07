document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) {
        console.error('Dark mode toggle button not found!');
        return; // Exit if the button is not found
    }

    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    const enableDarkMode = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add('dark-navbar'); // تغيير لون الـ navbar
        }
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Light Mode';
    };

    const disableDarkMode = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.remove('dark-navbar'); // إعادة لون الـ navbar
        }
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Dark Mode';
    };

    // Initialize Dark Mode based on local storage
    if (isDarkMode) {
        enableDarkMode();
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        if (localStorage.getItem('darkMode') !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Like and Dislike Buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    const dislikeButtons = document.querySelectorAll('.dislike-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('btn-primary');
            button.classList.toggle('btn-success');
        });
    });

    dislikeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('btn-danger');
            button.classList.toggle('btn-warning');
        });
    });
});
