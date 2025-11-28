// Smooth scroll helpers
function scrollToForm() {
  const card = document.getElementById("booking-card");
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToPrograms() {
  const programs = document.getElementById("programs");
  if (programs) {
    programs.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
