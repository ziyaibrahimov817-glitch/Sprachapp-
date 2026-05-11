JavaScript

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
