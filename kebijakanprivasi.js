document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    const contentElements = document.querySelectorAll('.container h1, .container h2, .container p, .container ul, .container li');
    
    contentElements.forEach((el, index) => {
        el.classList.add('reveal-element');
        if(index < 5) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contentElements.forEach(el => observer.observe(el));

    const footerText = document.querySelector('footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }
});