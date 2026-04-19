document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Sticky Header Styling on Scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // Form Submission Handling
    const form = document.getElementById('appointmentForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation & simulation
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Submitting...';
        btn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.');
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for sticky header height
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
