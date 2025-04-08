// Portfolio Website JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
    
    
    // Animation on scroll (simple version)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-level');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                // Get the width value from the style attribute
                const width = element.style.width;
                // Temporarily set width to 0
                element.style.width = '0';
                
                // Animate to the target width
                setTimeout(() => {
                    element.style.transition = 'width 1s ease-in-out';
                    element.style.width = width;
                }, 100);
            }
        });
    };

    
    // Run animation on page load
    setTimeout(animateOnScroll, 500);
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
});

const buttontop = document.getElementsByClassName('topbtn')[0];

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) { // Adjust the scroll threshold as needed
    buttontop.style.display = 'block';
  } else {
    buttontop.style.display = 'none';
  }
});