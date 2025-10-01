// Create a synth
const synth = new Tone.Synth().toDestination();

// Select planet element
const mercury = document.querySelector("#Mercury");
const venus = document.querySelector("#Venus");
const earth = document.querySelector("#Earth");

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
// let isDragging = false;
// let originalOrbit = mercury.parentElement;
// let dragTimeout;
// // Mouse down
// mercury.addEventListener("mousedown", () => {
//   // Not dragging yet
//   isDragging = false;

//   mercury.classList.add("dragging");
//   originalOrbit.style.animationPlayState = "paused";
//   mercury.style.position = "fixed";

//   // If held long enough, start dragging
//   dragTimeout = setTimeout(() => {
//     isDragging = true;
//   }, 250); // 250ms hold → start drag mode
// });

// // Mouse up
// document.addEventListener("mouseup", () => {
//   clearTimeout(dragTimeout);

//   if (!isDragging) {
//     // CLICK only
//     synth.triggerAttackRelease("C4", "8n");
//   }

//   isDragging = false;
//   mercury.classList.remove("dragging");

//   // Reset Mercury
// mercury.style.left = "";
// mercury.style.top = "";
// mercury.style.transform = "";
// originalOrbit.style.animationPlayState = "running";
// });

// // Mouse move
// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     mercury.style.left = e.clientX - mercury.offsetWidth / 2 + "px";
//     mercury.style.top = e.clientY - mercury.offsetHeight / 2 + "px";

//     let freq = 200 + Math.random() * 600;
//     synth.triggerAttackRelease(freq, "8n");
//   }
// });

// Mercury

let originalOrbit = mercury.parentElement;
let newX = 0;
(newY = 0), (startX = 0);
startY = 0;

mercury.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
  originalOrbit.style.animationPlayState = "paused";
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  mercury.style.top = mercury.offsetTop - newY + "px";
  mercury.style.left = mercury.offsetLeft - newX + "px";

  let freq = 200 + Math.random() * 600;
  synth.triggerAttackRelease(freq, "8n");
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
  mercury.style.left = "";
  mercury.style.top = "";
  mercury.style.transform = "";
  originalOrbit.style.animationPlayState = "running";
}
