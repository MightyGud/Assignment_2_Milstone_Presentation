// Create a synth
      const synth = new Tone.Synth().toDestination();

      // Select Mercury element
      const mercury = document.querySelector(".mercury");

      // Add click event
      mercury.addEventListener("click", async () => {
        await Tone.start(); // unlock AudioContext
        console.log("Mercury clicked!");
        synth.triggerAttackRelease("C4", "8n"); // play short note
      });