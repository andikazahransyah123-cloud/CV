// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scrolling (Enhanced)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Active Nav Link Highlight on Scroll
// ============================================
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.style.color = 'var(--text-secondary)';
        if (item.getAttribute('href') === `#${current}`) {
            item.style.color = 'var(--accent-primary)';
        }
    });
});

// ============================================
// Profile Image URL (Easy to Replace)
// ============================================
// To replace the profile picture, simply change the URL below:
const PROFILE_IMAGE_URL = 'https://picsum.photos/seed/portfolio/400/400';

// Apply the profile image URL
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.src = PROFILE_IMAGE_URL;
    }
});

// ============================================
// Skill Tags Animation on Scroll
// ============================================
const skillTags = document.querySelectorAll('.skill-tag');

const animateSkillTags = () => {
    skillTags.forEach((tag, index) => {
        const tagPosition = tag.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (tagPosition < screenPosition) {
            tag.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }
    });
};

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-tag {
        opacity: 0;
        transform: translateY(20px);
    }
`;
document.head.appendChild(style);

// Trigger animation on scroll
window.addEventListener('scroll', animateSkillTags);
window.addEventListener('load', animateSkillTags);

// ============================================
// Project Cards Hover Effect Enhancement
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Social Links Click Tracking (Optional)
// ============================================
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // For email links, we don't want to track
        if (this.getAttribute('href').startsWith('mailto:')) {
            return;
        }
        
        // Add any analytics tracking here if needed
        console.log(`Social link clicked: ${this.getAttribute('href')}`);
    });
});

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%c👋 Welcome to Portfolio Website!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #60a5fa; font-size: 12px;');
console.log('%cDark Mode Theme with Blue Accent', 'color: #60a5fa; font-size: 12px;');