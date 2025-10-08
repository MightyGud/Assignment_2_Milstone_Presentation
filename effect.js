const coordsDiv = document.getElementById("coords");

document.addEventListener("mousemove", (event) => {
  let x = event.clientX; // mouse X inside the window
  let y = event.clientY; // mouse Y inside the window
  coordsDiv.textContent = `X: ${x}, Y: ${y}`;
});
