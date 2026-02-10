// Simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card, .plan").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.transform = "scale(1)";
      el.style.opacity = "1";
    }
  });
});