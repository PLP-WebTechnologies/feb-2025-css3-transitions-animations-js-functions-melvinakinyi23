const colorPicker = document.getElementById("colorPicker");
const saveBtn = document.getElementById("saveBtn");
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Load color preference from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem("favColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Save color to localStorage
saveBtn.addEventListener("click", () => {
  const color = colorPicker.value;
  localStorage.setItem("favColor", color);
  box.style.backgroundColor = color;
});

// Animate the box
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Reset animation
  setTimeout(() => {
    box.classList.remove("animate");
  }, 500);  // Remove class after animation duration
});
