      // Create a synth
      const synth = new Tone.Synth().toDestination();

      // Select planet element
      const mercury = document.querySelector(".mercury");
      const venus = document.querySelector(".venus");
      const earth = document.querySelector(".earth");

      // Add click event
      mercury.addEventListener("click", async () => {
        await Tone.start(); // unlock AudioContext
        console.log("Mercury clicked!");
        synth.triggerAttackRelease("C4", "8n"); // play short note
      });

      venus.addEventListener("click",async() => {
        await Tone.start();
        console.log("Venus clicked!");
        synth.triggerAttackRelease("D4","8n");
      });

      earth.addEventListener("click",async() => {
        await Tone.start();
        console.log("Venus clicked!");
        synth.triggerAttackRelease("E4","8n");
      });

      // dragging mercury

      let isDragging = false;
      let hasDragged = false;
      let startX = 0;
      let startY = 0;
      let originalOrbit = mercury.parentElement;
    

      // When mouse is pressed down on Mercury
      mercury.addEventListener("mousedown", async () => {
      await Tone.start();
      isDragging = true;
      hasDragged = false;
      startX = e.clientX;
      startY = e.clientY;
      
      mercury.classList.add("dragging"); // apply grabbing cursor
      // Pause the orbit while dragging
      originalOrbit.style.animationPlayState = "paused";
      synth.triggerAttackRelease("C4", "8n");
      mercury.style.position = "fixed";
      });
      
      // When mouse is released
       document.addEventListener("mouseup", () => {
       isDragging = false;
       mercury.classList.remove("dragging"); // back to normal
       //Reset Mercury back to the Orbit;
       mercury.style.left ="";
       mercury.style.top ="";
       mercury.style.transform = "";
       originalOrbit.style.animationPlayState = "running";
      });

      // While moving with hold
      document.addEventListener("mousemove", (e) => {
      if (isDragging) {
      mercury.style.left = e.clientX - mercury.offsetWidth / 2 + "px";
      mercury.style.top = e.clientY - mercury.offsetHeight / 2 + "px";

      let freq = 200 + Math.random() * 600;
      synth.triggerAttackRelease(freq, "8n");
       }
      });


    

