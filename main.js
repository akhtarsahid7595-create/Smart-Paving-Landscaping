/**
 * Smart Paving & Landscaping - Main Interactivity Script
 * Focus: Premium transitions and conversion optimization.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Reveal Animations on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Lucide Icons refresh (to ensure dynamically added icons work if any)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 5. View More Projects
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenItems = document.querySelectorAll('.hidden-gallery-item');
    
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.add('show');
                // Re-observe for reveal animations
                revealObserver.observe(item);
            });
            viewMoreBtn.style.display = 'none';
        });
    }

    // 6. Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(img => {
        // Stop shimmer when loaded
        if (img.complete) {
            img.style.opacity = '1';
            img.parentElement.style.animation = 'none';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
                img.parentElement.style.animation = 'none';
            });
        }

        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            const caption = img.parentElement.querySelector('h4').innerText;
            const subCaption = img.parentElement.querySelector('p').innerText;
            lightboxCaption.innerHTML = `${caption} <br> <span style="font-size: 0.9rem; font-weight: 400; color: #aaa;">${subCaption}</span>`;
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 7. Stat Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const count = +entry.target.innerText;
                const increment = target / 50;

                const updateCount = () => {
                    const current = +entry.target.innerText;
                    if (current < target) {
                        entry.target.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 40);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                updateCount();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    counters.forEach(counter => counterObserver.observe(counter));

    // 9. Hero Parallax
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = offset * 0.5 + 'px';
        }
    });
    // 10. Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.backgroundColor = '#25D366';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
