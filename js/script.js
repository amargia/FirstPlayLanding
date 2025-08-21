// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobileMenu');
    const menuButton = document.querySelector('.menuButton');
    
    mobileMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('.mobileMenu a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobileMenu');
            const menuButton = document.querySelector('.menuButton');
            
            mobileMenu.classList.remove('active');
            menuButton.classList.remove('active');
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobileNav');
    const mobileMenu = document.querySelector('.mobileMenu');
    const menuButton = document.querySelector('.menuButton');
    
    if (!mobileNav.contains(event.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuButton.classList.remove('active');
    }
});
