const coordsDiv = document.getElementById("coords");
const logDiv = document.getElementById("log");
const saveBtn = document.getElementById("saveBtn");

let currentX = 0;
let currentY = 0;

// Track live position of the mouse

document.addEventListener("mousemove", (event) => {
    currentX = event.clientX;
    currentY = event.clientY;
    coordsDiv.textContent = `Mouse X: ${currentX}, Y: ${currentY}`;
});

// Save "random nearby coordinate"

saveBtn.addEventListener("click", () => {
    let offsetX = Math.floor(Math.random() * 101) - 50;
    let offsetY = Math.floor(Math.random() * 101) - 50;

    let randomX = currentX + offsetX;
    let randomY = currentY + offsetY;

    let now = new Date(Date.now()).toLocaleTimeString();
    let entry = `Random Coord: (${randomX}, ${randomY}) at ${now}`;

    let p = document.createElement("p");
    p.textContent = entry;
    logDiv.appendChild(p);
});