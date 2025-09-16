const vipForm = document.querySelector('.vip__form');

vipForm.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! Your VIP table is reserved. Our team will contact you shortly.");
});
