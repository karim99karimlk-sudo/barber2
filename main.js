// header js
const menuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const header = document.getElementById('main-header');

// 1. Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
const isOpen = navList.classList.toggle('active');
menuBtn.classList.toggle('open');
            
// Prevent body scroll when menu is open
document.body.style.overflow = isOpen ? 'hidden' : 'auto';
});

// 2. Scroll Logic (Hide/Show)
let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            // Don't hide if menu is open
            if (navList.classList.contains('active')) return;

            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                header.classList.add('nav-hidden');
            } else {
                header.classList.remove('nav-hidden');
            }
            lastScrollY = window.scrollY;
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuBtn.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });

////////////////////////////////////////////////////////



  const track = document.querySelector('.track');
  const cards = Array.from(track.children);
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dotsNav = document.querySelector('.dots');

  let currentIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  }

  function updateCarousel() {
    const visible = getVisibleCards();
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;
    
    track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;

    // Update Dots
    document.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Update Buttons
    prevBtn.classList.toggle('disabled', currentIndex === 0);
    nextBtn.classList.toggle('disabled', currentIndex >= cards.length - visible);
  }

  function init() {
    dotsNav.innerHTML = '';
    const visible = getVisibleCards();
    const slideCount = cards.length - visible + 1;

    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsNav.appendChild(dot);
    }
    updateCarousel();
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - getVisibleCards()) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', init);
  init();

//text animation product

  const elements = document.querySelectorAll(
    ".product-title, .product-para , .services-title-container , .work-title , .work-para , .book-now-title , .book-now-para , .book-now-btn"
  );

  const observer1 = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach(el => observer1.observe(el));





//text animation footer

  const element = document.querySelector(".mid-footer");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  observer.observe(element);
