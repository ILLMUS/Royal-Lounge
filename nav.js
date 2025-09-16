// Navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Smooth scroll for links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active'); // close menu on click
    navToggle.classList.remove('open');
  });
});


// Reload page on logo click
const logoImg = document.getElementById('nav-logo-img');
logoImg.addEventListener('click', () => {
  window.location.reload();
});
