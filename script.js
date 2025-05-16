
        // Contador
        function animateCounter(elementId, target, duration = 2000) {
            const element = document.getElementById(elementId);
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                element.textContent = Math.floor(current);
            }, 16);
        }
        
        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                answer.classList.toggle('hidden');
                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({name, email, phone, message});
            
            // Show success message
            alert('Obrigado por sua mensagem, ' + name + '! Entraremos em contato em breve.');
            
            // Reset form
            contactForm.reset();
        });
        
        //Menu Mobile
            const mobileMenuButton = document.querySelector('#mobile-menu-button');
            const mobileMenu = document.querySelector('#mobile-menu');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
        });
        
        // Initialize counters when scrolled into view
        let countersInitialized = false;
        
        function checkCounters() {
            const statsSection = document.querySelector('#clientCount').parentElement.parentElement.parentElement;
            const sectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100 && !countersInitialized) {
                animateCounter('clientCount', 50);
                animateCounter('yearCount', 5);
                animateCounter('serviceCount', 20);
                countersInitialized = true;
            }
        }
        
        window.addEventListener('scroll', checkCounters);
        window.addEventListener('load', checkCounters);
    