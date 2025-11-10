document.addEventListener('DOMContentLoaded', () => {
    // Theme switcher logic
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Set initial theme based on user's preference or default to dark
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeSwitcher.textContent = '🌙';
    } else {
        body.classList.remove('light-theme');
        themeSwitcher.textContent = '☀️';
    }

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        // Save theme preference
        if (body.classList.contains('light-theme')) {
            themeSwitcher.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            themeSwitcher.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Hamburger menu logic
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Change hamburger icon to a cross and back
        if (hamburger.textContent === '☰') {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });

    // Close mobile nav when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburger.textContent = '☰'; // Reset hamburger icon
        });
    });
});

