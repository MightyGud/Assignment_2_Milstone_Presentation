 // Create synth
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    // Ensure audio context is started (browser restriction)
    Tone.start().then(() => {
      synth.triggerAttackRelease(note, "8n");
    });
  }