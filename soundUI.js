// Create a synth
const synth = new Tone.Synth().toDestination();

// Select planet element
const mercury = document.querySelector("#Mercury");
const venus = document.querySelector("#Venus");
const earth = document.querySelector("#Earth");
const mars = document.querySelector("#Mars");
const jupiter = document.querySelector("#Jupiter");
const saturn = document.querySelector("#Saturn");
const uranus = document.querySelector("#Uranus");
const neptune = document.querySelector("#Neptune")



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

mars.addEventListener("click", () => {
  console.log("Mars clicked!");
  synth.triggerAttackRelease("F4", "8n");
});

jupiter.addEventListener("click", () => {
  console.log("Jupiter clicked!");
  synth.triggerAttackRelease("G4", "8n");
});

saturn.addEventListener("click", () => {
  console.log("Saturn clicked!");
  synth.triggerAttackRelease("G4", "8n");
});

uranus.addEventListener("click", () => {
  console.log("Uranus clicked!");
  synth.triggerAttackRelease("G4", "8n");
});

neptune.addEventListener("click", () => {
  console.log("Neptune clicked!");
  synth.triggerAttackRelease("G4", "8n");
});




// this doesn't work really well since i made a whole mess of this function.
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


//This function did work, but for somereason it can't be used for another planet.

// Mercury

// let originalOrbit = mercury.parentElement;
// let newX = 0;
// (newY = 0), (startX = 0);
// startY = 0;

// mercury.addEventListener("mousedown", mouseDown);

// function mouseDown(e) {
//   startX = e.clientX;
//   startY = e.clientY;

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
//   originalOrbit.style.animationPlayState = "paused";
// }

// function mouseMove(e) {
//   newX = startX - e.clientX;
//   newY = startY - e.clientY;

//   startX = e.clientX;
//   startY = e.clientY;

//   mercury.style.top = mercury.offsetTop - newY + "px";
//   mercury.style.left = mercury.offsetLeft - newX + "px";

//   let freq = 200 + Math.random() * 600;
//   synth.triggerAttackRelease(freq, "8n");
// }

// function mouseUp(e) {
//   document.removeEventListener("mousemove", mouseMove);
//   mercury.style.left = "";
//   mercury.style.top = "";
//   mercury.style.transform = "";
//   originalOrbit.style.animationPlayState = "running";
// }

// // venus
// let secondOrbit = venus.parentElement;
// let newX = 0;
// (newY = 0), (startX = 0);
// startY = 0;

// venus.addEventListener("mousedown", mouseDown);

// function mouseDown(e) {
//   startX = e.clientX;
//   startY = e.clientY;

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
//   secondOrbit.style.animationPlayState = "paused";
// }

// function mouseMove(e) {
//   newX = startX - e.clientX;
//   newY = startY - e.clientY;

//   startX = e.clientX;
//   startY = e.clientY;

//   venus.style.top = venus.offsetTop - newY + "px";
//   venus.style.left = venus.offsetLeft - newX + "px";

//   let freq = 200 + Math.random() * 600;
//   synth.triggerAttackRelease(freq, "8n");
// }

// function mouseUp(e) {
//   document.removeEventListener("mousemove", mouseMove);
//   venus.style.left = "";
//   venus.style.top = "";
//   venus.style.transform = "";
//   secondOrbit.style.animationPlayState = "running";
// }

//I called the X and Y out individually for all the planets because the variables are redeclaring.
// MERCURY
let originalOrbit = mercury.parentElement;
let mercuryStartX = 0, mercuryStartY = 0;

mercury.addEventListener("mousedown", mercuryMouseDown);

function mercuryMouseDown(e) {
  mercuryStartX = e.clientX;
  mercuryStartY = e.clientY;

  document.addEventListener("mousemove", mercuryMouseMove);
  document.addEventListener("mouseup", mercuryMouseUp);
  originalOrbit.style.animationPlayState = "paused";
}

function mercuryMouseMove(e) {
  let newX = mercuryStartX - e.clientX;
  let newY = mercuryStartY - e.clientY;

  mercuryStartX = e.clientX;
  mercuryStartY = e.clientY;

  mercury.style.top = mercury.offsetTop - newY + "px";
  mercury.style.left = mercury.offsetLeft - newX + "px";

  let freq = 200 + Math.random() * 600;
  synth.triggerAttackRelease(freq, "8n");
}

function mercuryMouseUp() {
  document.removeEventListener("mousemove", mercuryMouseMove);
  mercury.style.left = "";
  mercury.style.top = "";
  mercury.style.transform = "";
  originalOrbit.style.animationPlayState = "running";
}

// VENUS
let secondOrbit = venus.parentElement;
let venusStartX = 0, venusStartY = 0;

venus.addEventListener("mousedown", venusMouseDown);

function venusMouseDown(e) {
  venusStartX = e.clientX;
  venusStartY = e.clientY;

  document.addEventListener("mousemove", venusMouseMove);
  document.addEventListener("mouseup", venusMouseUp);
  secondOrbit.style.animationPlayState = "paused";
}

function venusMouseMove(e) {
  let newX = venusStartX - e.clientX;
  let newY = venusStartY - e.clientY;

  venusStartX = e.clientX;
  venusStartY = e.clientY;

  venus.style.top = venus.offsetTop - newY + "px";
  venus.style.left = venus.offsetLeft - newX + "px";

  let freq = 200 + Math.random() * 600;
  synth.triggerAttackRelease(freq, "8n");
}

function venusMouseUp() {
  document.removeEventListener("mousemove", venusMouseMove);
  venus.style.left = "";
  venus.style.top = "";
  venus.style.transform = "";
  secondOrbit.style.animationPlayState = "running";
}

//Earth
let thirdOrbit = earth.parentElement;
let earthStartX = 0, earthStartY = 0;

earth.addEventListener("mousedown", earthMouseDown);

function earthMouseDown(e) {
  earthStartX = e.clientX;
  earthStartY = e.clientY;

  document.addEventListener("mousemove", earthMouseMove);
  document.addEventListener("mouseup", earthMouseUp);
  thirdOrbit.style.animationPlayState = "paused";
}

function earthMouseMove(e) {
  let newX = earthStartX - e.clientX;
  let newY = earthStartY - e.clientY;

  earthStartX = e.clientX;
  earthStartY = e.clientY;

  earth.style.top = earth.offsetTop - newY + "px";
  earth.style.left = earth.offsetLeft - newX + "px";

  let freq = 200 + Math.random() * 600;
  synth.triggerAttackRelease(freq, "8n");
}

function earthMouseUp() {
  document.removeEventListener("mousemove", earthMouseMove);
  earth.style.left = "";
  earth.style.top = "";
  earth.style.transform = "";
  thirdOrbit.style.animationPlayState = "running";
}

//Mars
let fourthOrbit = mars.parentElement;
let marsStartX = 0, marsStartY = 0;

mars.addEventListener("mousedown", earthMouseDown);

function earthMouseDown(e) {
  marsStartX = e.clientX;
  marsStartY = e.clientY;

  document.addEventListener("mousemove", earthMouseMove);
  document.addEventListener("mouseup", earthMouseUp);
  fourthOrbit.style.animationPlayState = "paused";
}

function earthMouseMove(e) {
  let newX = earthStartX - e.clientX;
  let newY = earthStartY - e.clientY;

  earthStartX = e.clientX;
  earthStartY = e.clientY;

  mars.style.top = mars.offsetTop - newY + "px";
  mars.style.left = mars.offsetLeft - newX + "px";

  let freq = 200 + Math.random() * 600;
  synth.triggerAttackRelease(freq, "8n");
}

function earthMouseUp() {
  document.removeEventListener("mousemove", earthMouseMove);
  mars.style.left = "";
  mars.style.top = "";
  mars.style.transform = "";
  fourthOrbit.style.animationPlayState = "running";
}