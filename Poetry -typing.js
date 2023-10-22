const poetry = [
  "In the realm of dreams, I roam so free,",
  "Where the stars above, whisper to me.",
  "Moonlight dances on the tranquil sea,",
  "In the night's embrace, I find my glee.",
  "With each passing moment, a memory's born,",
  "In the tapestry of life, a story well-worn.",
  "In the hush of night, secrets are sworn,",
  "In this timeless serenade, my heart is torn.",
  "The morning sun rises, the dream must end,",
  "But in my heart, the poetry will forever blend."
];

function displayPoetry() {
  let lineIndex = 0;

  function printLine() {
    console.log(poetry[lineIndex]);
    lineIndex++;

    if (lineIndex < poetry.length) {
      setTimeout(printLine, 1000); // Display the next line after 1 second
    }
  }

  printLine();
}

displayPoetry();
