function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

function answerYes() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "YAY YAY 🎉🎉🎉";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageTextPart1").innerText = "I believe in love at first sight too! August 10th is officially reserved for a night of romance, laughter, and a happily ever after—are you ready for the adventure?";
  document.getElementById("messageTextPart2").innerText = "Please take a look at the invitation below and tell me if you want to change anything, I'm happy to make adjustments based on your preferences.";
  
  // Create an image element and set the source
  var img = document.createElement("img");
  img.src = "Screenshot 2024-08-10 at 6.28.00.png";
  img.alt = "Celebration image";

  // Append the image to the message div
  document.getElementById("message").appendChild(img);
  showConfetti();
}

function answerNo() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageTextPart1").innerText = "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?";
  document.getElementById("messageTextPart2").innerText = "Please take a look at the invitation below";
  
  // Create an image element and set the source
  var img = document.createElement("img");
  img.src = "Screenshot 2024-08-10 at 6.28.00.png";
  img.alt = "Celebration image";

  // Append the image to the message div
  document.getElementById("message").appendChild(img);
  showConfetti();
}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
      confetti.clear();
  }, 5000);
}