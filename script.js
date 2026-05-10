JavaScript
const lessons = [
  { word: "Hello", translation: "Hallo", question: "Good morning", answer: "Guten Morgen" },
  { word: "Thank you", translation: "Danke", question: "How are you?", answer: "Wie geht es dir?" },
  { word: "Book", translation: "Buch", question: "I am learning", answer: "Ich lerne" },
  { word: "Water", translation: "Wasser", question: "I drink water", answer: "Ich trinke Wasser" },
  { word: "Friend", translation: "Freund", question: "This is my friend", answer: "Das ist mein Freund" }
];

const tips = [
  "Lerne jeden Tag 5 neue Wörter.",
  "Sprich die Wörter laut aus.",
  "Wiederhole schwierige Wörter am nächsten Tag.",
  "Schreibe eigene Beispielsätze.",
  "Übe kurze Gespräche, nicht nur einzelne Wörter."
];

let currentLesson = lessons[0];
let score = 0;

function startLesson() {
  const randomIndex = Math.floor(Math.random() * lessons.length);
  currentLesson = lessons[randomIndex];

  document.getElementById("word").textContent = currentLesson.word;
  document.getElementById("translation").textContent = currentLesson.translation;
  document.getElementById("question").textContent = currentLesson.question;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = currentLesson.answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("result").textContent = "Richtig! Sehr gut.";
    document.getElementById("score").textContent = score;
  } else {
    document.getElementById("result").textContent = `Fast! Richtige Antwort: ${currentLesson.answer}`;
  }
}

function showTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").textContent = tips[randomIndex];
}
