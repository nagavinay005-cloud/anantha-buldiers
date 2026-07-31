/* ==========================================================================
   ANANTHA BUILDERS - LUXURY INTERACTIVITY & ANIMATIONS ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Blur & Scroll State
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 2. Mobile Offcanvas Navigation Menu
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
    
    // Close menu when clicking outside or link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }

  // 3. Counter Animations for Stats
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const observerOptions = {
      threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count'), 10);
          let currentCount = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / countTo));

          const timer = setInterval(() => {
            currentCount += 1;
            target.textContent = currentCount + (target.getAttribute('data-suffix') || '');
            if (currentCount >= countTo) {
              target.textContent = countTo + (target.getAttribute('data-suffix') || '');
              clearInterval(timer);
            }
          }, Math.max(stepTime, 30));

          observer.unobserve(target);
        }
      });
    }, observerOptions);

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // 4. Lightbox Modal for Gallery Images
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-content img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryItems.length > 0 && lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Gallery View';
          lightboxModal.classList.add('active');
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
      });
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 5. GSAP Scroll Reveal & Fade Animations (with fallback)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal-fade').forEach(el => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.utils.toArray('.reveal-scale').forEach(el => {
      gsap.from(el, {
        scale: 0.94,
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });
  }
});
