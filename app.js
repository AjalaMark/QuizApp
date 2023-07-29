//Object which containts the questions and answers
let ques = [
  {
    questions: "What is the capital of France?",
    answers: [
      { text: "Paris" },
      { text: "Berlin" },
      { text: "Mexico City" },
      { text: "Venice" },
      { text: "Beijing" },
      { text: "Atlantis" },
    ],
    correct: 0,
  },
  {
    questions: "Who is the author of the Harry Potter series?",
    answers: [
      { text: "Stephen King" },
      { text: "James Patterson" },
      { text: "Dan Brown" },
      { text: "Rick Riordan" },
      { text: "Nora Roberts" },
      { text: "J.K. Rowling." },
    ],
    correct: 5,
  },
  {
    questions: "What is the largest planet in our solar system?",
    answers: [
      { text: "Uranus" },
      { text: "Saturn" },
      { text: "Mercury" },
      { text: "Mars" },
      { text: "Jupiter" },
      { text: "Earth" },
    ],
    correct: 4,
  },
  {
    questions: "Who painted the Mona Lisa?",
    answers: [
      { text: "Grant Wood" },
      { text: "Jacques-Louis David" },
      { text: "Edouard Manet" },
      { text: "Sandro Botticelli" },
      { text: "Pieter Bruegel" },
      { text: "Leonardo da Vinci." },
    ],
    correct: 5,
  },
  {
    questions: "What is the chemical symbol for gold?",
    answers: [
      { text: "H" },
      { text: "Al" },
      { text: "He" },
      { text: "Au" },
      { text: "As" },
      { text: "Ag" },
    ],
    correct: 3,
  },
  {
    questions: "Who invented the telephone?",
    answers: [
      { text: "Thales of miletus" },
      { text: "Thomas Edison" },
      { text: "Archimedes" },
      { text: "Leonardo da Vinci." },
      { text: "Benjamin Franklin" },
      { text: "Alexander Graham Bell" },
    ],
    correct: 5,
  },
];

const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options");
const submitButton = document.getElementById("submit-btn");
const retryButton = document.getElementById("retry-btn");

let currentQuestionIndex = 0;
let score = 0;

// Function to initialize the quiz
function initializeQuiz() {
  showQuestion();
  submitButton.addEventListener("click", checkAnswer);
  retryButton.addEventListener("click", retryQuiz);
}

// Function to display the current question and its answer options
function showQuestion() {
  if (currentQuestionIndex < ques.length) {
    const currentQuestion = ques[currentQuestionIndex];
    questionElement.textContent = currentQuestion.questions;

    optionsContainer.innerHTML = "";
    const answers = currentQuestion.answers;

    for (let i = 0; i < answers.length; i++) {
      const option = document.createElement("li");
      const answer = answers[i];

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "radio";
      input.id = `option${i}`;
      input.classList.add("radio");
      input.value = i;

      console.log(input.value);

      const label = document.createElement("label");
      label.textContent = answer.text;
      label.htmlFor = `option${i}`;
      label.classList.add("answer");

      option.appendChild(input);
      option.appendChild(label);

      optionsContainer.appendChild(option);
    }
  } else {
    // The quiz is completed, display the final score
    showScore();
  }
}

// Function to check the selected answer against the correct option
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="radio"]:checked');

  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    const currentQuestion = ques[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct) {
      score++;
    }

    currentQuestionIndex++;
    showQuestion();
  } else {
    alert("Please select an answer before proceeding.");
  }
}

// Function to display the final score
function showScore() {
  questionElement.textContent = `Your score: ${score} out of ${ques.length}`;
  optionsContainer.innerHTML = "";
  submitButton.style.display = "none";
  retryButton.style.display = "block";
}

function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  submitButton.style.display = "block"; // Show the submit button
  retryButton.style.display = "none"; // Hide the retry button
}

// Call the initializeQuiz function to start the quiz
initializeQuiz();
