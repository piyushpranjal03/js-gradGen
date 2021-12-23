// Selecting body, button and gradient p tags.
const body = document.body;
const button = document.querySelector(".btn");
const gradients = document.querySelectorAll(".gradient-colors p");

// Adding event listener on button
button.addEventListener("click", () => {
  // Creating a new colors array using map
  const colors = new Array(6).fill(0).map(() => Math.floor(Math.random() * 256));

  // Changing body linear gradient using array values
  body.style.background = `linear-gradient(rgb(${colors[0]}, ${colors[1]}, ${colors[2]}), rgb(${colors[3]}, ${colors[4]}, ${colors[5]})`;

  // Updating text content for p tags using array values
  gradients[0].textContent = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
  gradients[1].textContent = `rgb(${colors[3]},${colors[4]},${colors[5]})`;
});
