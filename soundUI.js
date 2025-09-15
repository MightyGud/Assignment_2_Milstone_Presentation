      // Create a synth
      const synth = new Tone.Synth().toDestination();

      // Select Mercury element
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

