// Scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gallery__card");

  const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealCards);
  revealCards();

  // Share toggle
  document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      btn.parentElement.classList.toggle("active");
    });
  });

  // Close if clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".share").forEach(s => s.classList.remove("active"));
  });
});
