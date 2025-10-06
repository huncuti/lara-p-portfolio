// Main JavaScript file for Lara Petrović Portfolio
// Typewriter effects and interactive components

class TypewriterPortfolio {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupTypewriterEffects();
        this.setupScrollAnimations();
        this.setupInteractiveComponents();
        this.setupAudioFeedback();
        this.setupPaperTexture();
    }
    
    setupTypewriterEffects() {
        // Main title typewriter effect
        const titleElement = document.getElementById('main-title');
        if (titleElement) {
            this.animateTitleCharacters(titleElement);
        }
        
        // Typewriter text effects
        const typewriterElements = document.querySelectorAll('.typewriter-text');
        typewriterElements.forEach(element => {
            this.createTypewriterEffect(element);
        });
    }
    
    animateTitleCharacters(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            element.appendChild(span);
        }
        
        // Animate characters with staggered delay
        anime({
            targets: element.querySelectorAll('span'),
            opacity: 1,
            translateY: [20, 0],
            delay: anime.stagger(100, {start: 500}),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
    
    createTypewriterEffect(element) {
        const texts = element.dataset.texts ? JSON.parse(element.dataset.texts) : [
            'Researching the intersection of emotion regulation and mindfulness-based interventions.',
            'Exploring intelligence, creativity, and personality constructs in artistic populations.',
            'Developing digital biomarkers for neuropsychiatric conditions.',
            'Passionate about advancing psychological science through rigorous research.'
        ];
        
        new Typed(element, {
            strings: texts,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll(
            '.research-card, .timeline-item, .skill-category, .theme-card, .contact-item, .link-card'
        );
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            observer.observe(element);
        });
    }
    
    animateElement(element) {
        anime({
            targets: element,
            opacity: 1,
            translateY: 0,
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
    
    setupInteractiveComponents() {
        // Navigation hover effects
        this.setupNavigationEffects();
        
        // Timeline interactions
        this.setupTimelineInteractions();
        
        // Form interactions
        this.setupFormInteractions();
        
        // Skill assessment interactions
        this.setupSkillInteractions();
    }
    
    setupNavigationEffects() {
        const navItems = document.querySelectorAll('.nav-item, .back-nav');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.href && !item.href.includes('#')) {
                    e.preventDefault();
                    this.playTypewriterSound();
                    
                    // Add visual feedback
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.transform = '';
                        setTimeout(() => {
                            window.location.href = item.href;
                        }, 200);
                    }, 100);
                }
            });
        });
    }
    
    setupTimelineInteractions() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                this.toggleTimelineDetails(item);
            });
        });
    }
    
    toggleTimelineDetails(item) {
        const details = item.querySelector('.timeline-details');
        const indicator = item.querySelector('.expand-indicator');
        
        if (details.classList.contains('expanded')) {
            details.classList.remove('expanded');
            item.classList.remove('expanded');
        } else {
            // Close other expanded items
            document.querySelectorAll('.timeline-item.expanded').forEach(expandedItem => {
                expandedItem.classList.remove('expanded');
                expandedItem.querySelector('.timeline-details').classList.remove('expanded');
            });
            
            details.classList.add('expanded');
            item.classList.add('expanded');
            
            // Scroll to item
            setTimeout(() => {
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
        
        this.playTypewriterSound();
    }
    
    setupFormInteractions() {
        const formInputs = document.querySelectorAll('.form-input');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.playTypewriterSound();
                this.addFocusEffect(input);
            });
            
            input.addEventListener('blur', () => {
                this.removeFocusEffect(input);
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }
    
    addFocusEffect(input) {
        input.style.borderColor = '#2C2C2C';
        input.style.background = 'rgba(255, 255, 255, 1)';
        input.style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)';
    }
    
    removeFocusEffect(input) {
        input.style.borderColor = '#8B7355';
        input.style.background = 'rgba(255, 255, 255, 0.8)';
        input.style.boxShadow = 'none';
    }
    
    handleFormSubmission(form) {
        const submitBtn = form.querySelector('.submit-btn');
        const successMessage = document.getElementById('successMessage');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form processing
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Animate success message
            anime({
                targets: successMessage,
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 500,
                easing: 'easeOutExpo'
            });
            
            // Reset form after delay
            setTimeout(() => {
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        }, 2000);
        
        this.playTypewriterSound();
    }
    
    setupSkillInteractions() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                this.animateSkillBars(category);
            });
        });
    }
    
    animateSkillBars(category) {
        const skillLevels = category.querySelectorAll('.skill-level');
        
        skillLevels.forEach((level, index) => {
            setTimeout(() => {
                anime({
                    targets: level,
                    scale: [1, 1.1, 1],
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
            }, index * 100);
        });
    }
    
    setupAudioFeedback() {
        // Create audio context for typewriter sounds
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    playTypewriterSound() {
        if (!this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Typewriter sound frequency
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);
            
            // Volume envelope
            gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        } catch (e) {
            // Silent fail if audio fails
        }
    }
    
    setupPaperTexture() {
        // Create subtle paper texture overlay
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Generate noise texture
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 15 - 7.5;
            data[i] = 245 + noise;     // Red
            data[i + 1] = 241 + noise; // Green
            data[i + 2] = 232 + noise; // Blue
            data[i + 3] = 8;           // Very subtle alpha
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Apply texture as overlay
        const texture = document.createElement('div');
        texture.style.position = 'fixed';
        texture.style.top = '0';
        texture.style.left = '0';
        texture.style.width = '100%';
        texture.style.height = '100%';
        texture.style.backgroundImage = `url(${canvas.toDataURL()})`;
        texture.style.pointerEvents = 'none';
        texture.style.zIndex = '1';
        texture.style.opacity = '0.4';
        
        document.body.appendChild(texture);
        
        // Update on resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Recreate texture if needed
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TypewriterPortfolio();
});

// Utility functions for cross-page functionality
const PortfolioUtils = {
    // Smooth scroll to element
    scrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    // Copy text to clipboard
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            this.showNotification('Copied to clipboard!');
        });
    },
    
    // Show notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(139, 115, 85, 0.9);
            color: white;
            padding: 1rem 2rem;
            border-radius: 4px;
            z-index: 1000;
            font-family: 'Special Elite', cursive;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },
    
    // Generate PDF from current page (placeholder)
    generatePDF() {
        // This would integrate with a PDF library
        this.showNotification('PDF generation feature coming soon!');
    }
};

// Export for use in other scripts
window.PortfolioUtils = PortfolioUtils;