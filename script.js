// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll to Plans
function scrollToPlans() {
  document.getElementById("plans").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll Animation
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => observer.observe(section));
