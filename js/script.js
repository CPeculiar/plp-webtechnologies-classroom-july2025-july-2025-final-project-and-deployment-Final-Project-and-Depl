// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form validation and submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Validate form
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name.length < 2) {
            showError('name-error', 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        const subject = document.getElementById('subject').value;
        if (!subject) {
            showError('subject-error', 'Please select a subject');
            isValid = false;
        }
        
        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message.length < 10) {
            showError('message-error', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            contactForm.style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                document.getElementById('form-success').style.display = 'none';
            }, 3000);
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Interactive value cards (About page)
function toggleCard(card) {
    card.style.transform = card.style.transform === 'scale(1.05)' ? 'scale(1)' : 'scale(1.05)';
    
    // Reset other cards
    document.querySelectorAll('.value-card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.style.transform = 'scale(1)';
        }
    });
    
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
}

// Map directions function
function openDirections() {
    const address = "123 Faith Street, Community City";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .value-card, .leader-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.service-card, .value-card, .leader-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on page load
    animateOnScroll();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});