// Filicori Zecchini - Main JavaScript
// Language switching functionality

document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const languageSwitch = document.querySelector('.language-switch');
    
    if (languageSwitch) {
        languageSwitch.addEventListener('click', function() {
            const currentPath = window.location.pathname;
            let newPath;
            
            // Determine current language and switch to the other
            if (currentPath.includes('/en/')) {
                // Switch from English to Georgian
                newPath = currentPath.replace('/en/', '/ka/');
            } else if (currentPath.includes('/ka/')) {
                // Switch from Georgian to English
                newPath = currentPath.replace('/ka/', '/en/');
            } else {
                // Default to English if no language specified
                newPath = '/en/home';
            }
            
            window.location.href = newPath;
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Order form handling
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(orderForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.product) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Simulate order submission
            alert('Thank you for your order! We will contact you shortly to confirm details.');
            orderForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Utility function to get current language
function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.includes('/ka/')) {
        return 'ka';
    } else if (path.includes('/en/')) {
        return 'en';
    }
    return 'en'; // default
}

// Utility function to get translated text
function getText(key) {
    const currentLang = getCurrentLanguage();
    const translations = {
        en: {
            'home': 'Home',
            'about': 'About Us',
            'products': 'Products',
            'rental': 'Machine Rental',
            'contact': 'Contact',
            'order': 'Order',
            'switch_to_georgian': 'Switch to Georgian',
            'switch_to_english': 'Switch to English'
        },
        ka: {
            'home': 'მთავარი',
            'about': 'ჩვენს შესახებ',
            'products': 'პროდუქტები',
            'rental': 'აპარატების არენდა',
            'contact': 'კონტაქტი',
            'order': 'შეკვეთა',
            'switch_to_georgian': 'ქართულად',
            'switch_to_english': 'ინგლისურად'
        }
    };
    
    return translations[currentLang][key] || key;
}
