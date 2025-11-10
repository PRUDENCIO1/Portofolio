document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const ctaButton = document.querySelector('.hero-content a[href^="#"]');
    const allLinks = [...navLinks, ctaButton];

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Function to apply theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            themeSwitcher.textContent = '🌙';
        } else {
            body.classList.remove('light-theme');
            themeSwitcher.textContent = '☀️';
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Event listener for theme switcher button
    themeSwitcher.addEventListener('click', () => {
        let currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Formspree will handle the form submission, so client-side validation is removed.
    // The form will automatically reset after submission if configured in Formspree.
    // If you want to manually reset the form after submission, you can add an event listener for the 'submit' event
    // and call contactForm.reset() after Formspree has processed the submission.
    // For now, we assume Formspree handles the success redirect or message.

});
