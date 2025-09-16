const carousel = document.querySelector('.testimonial__carousel');
const prevBtn = document.querySelector('.testimonial__controls .prev');
const nextBtn = document.querySelector('.testimonial__controls .next');

let scrollAmount = 0;
const scrollStep = 320; // width of card + gap

nextBtn.addEventListener('click', () => {
  if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
    scrollAmount += scrollStep;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
});

prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
});

// Auto-slide
let autoSlide = setInterval(() => {
  if (scrollAmount >= (carousel.scrollWidth - carousel.clientWidth)) scrollAmount = 0;
  else scrollAmount += scrollStep;
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 5000);

// Pause on hover
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    if (scrollAmount >= (carousel.scrollWidth - carousel.clientWidth)) scrollAmount = 0;
    else scrollAmount += scrollStep;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 5000);
});
