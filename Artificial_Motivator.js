function createMotivationalSentence(thrownWord) {
  const motivationalWords = [
    "You've got this,",
    "Believe in yourself,",
    "Stay strong,",
    "Keep pushing forward,",
    "Never give up,",
    "Embrace the challenges,",
  ];

  const randomMotivationalWord = motivationalWords[Math.floor(Math.random() * motivationalWords.length)];

  const motivationalSentence = `${thrownWord} ${randomMotivationalWord} i know, you can do it!`;

  return motivationalSentence;
}

const thrownWord = "Lingkon,";
const motivationalSentence = createMotivationalSentence(thrownWord);
console.log(motivationalSentence);
