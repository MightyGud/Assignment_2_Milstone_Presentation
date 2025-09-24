// Create a synth
const synth = new Tone.Synth().toDestination();

// Select planet element
const mercury = document.querySelector(".mercury");
const venus = document.querySelector(".venus");
const earth = document.querySelector(".earth");

// Add click event
mercury.addEventListener("click", () => {
  console.log("Mercury clicked!");
  synth.triggerAttackRelease("C4", "8n"); // play short note
});

venus.addEventListener("click", () => {
  console.log("Venus clicked!");
  synth.triggerAttackRelease("D4", "8n");
});

earth.addEventListener("click", () => {
  console.log("Earth clicked!");
  synth.triggerAttackRelease("E4", "8n");
});
// Mercury
let isDragging = false;
let originalOrbit = mercury.parentElement;
let dragTimeout;
// Mouse down
mercury.addEventListener("mousedown", () => {
  // Not dragging yet
  isDragging = false;

  mercury.classList.add("dragging");
  originalOrbit.style.animationPlayState = "paused";
  mercury.style.position = "fixed";

  // If held long enough, start dragging
  dragTimeout = setTimeout(() => {
    isDragging = true;
  }, 250); // 250ms hold → start drag mode
});

// Mouse up
document.addEventListener("mouseup", () => {
  clearTimeout(dragTimeout);

  if (!isDragging) {
    // CLICK only
    synth.triggerAttackRelease("C4", "8n");
  }

  isDragging = false;
  mercury.classList.remove("dragging");

  // Reset Mercury
  mercury.style.left = "";
  mercury.style.top = "";
  mercury.style.transform = "";
  originalOrbit.style.animationPlayState = "running";
});

// Mouse move
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    mercury.style.left = e.clientX - mercury.offsetWidth / 2 + "px";
    mercury.style.top = e.clientY - mercury.offsetHeight / 2 + "px";

    let freq = 200 + Math.random() * 600;
    synth.triggerAttackRelease(freq, "8n");
  }
});
