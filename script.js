document.addEventListener('DOMContentLoaded', () => {
    // Theme switcher logic
    const themeSwitchers = document.querySelectorAll('.theme-switcher');
    const body = document.body;

    const updateTheme = () => {
        const isLight = body.classList.contains('light-theme');
        const icon = isLight ? '🌙' : '☀️';
        themeSwitchers.forEach(switcher => {
            switcher.textContent = icon;
        });
        if (isLight) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    };

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
    }
    updateTheme();

    themeSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            updateTheme();
        });
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

