const darkBtn = document.getElementById("darkModeBtn");

// Check saved mode
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkBtn.textContent = "🌙";
  }
});
