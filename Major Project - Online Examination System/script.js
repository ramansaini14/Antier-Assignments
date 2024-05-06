const questions = [
  {
    type: 'MCQ',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin'],
    answer: 'Paris'
  },
  {
    type: 'MCQ',
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Charles Dickens', 'J.K. Rowling'],
    answer: 'Harper Lee'
  },
  {
    type: 'SAQ',
    question: 'What is the chemical symbol for water?',
    answer: 'H2O'
  },
  {
    type: 'SAQ',
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars'
  },
  {
    type: 'SAQ',
    question: 'Which planet is known as the White Planet?',
    answer: 'Moon'
  }
];

const questionSection = document.getElementById('question-section');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const showScoreBtn = document.getElementById('show-score-btn');
const scoreDisplay = document.getElementById('score-display');
const feedbackDisp = document.getElementById('test-feedback');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
let currentQuestionIndex = 0;

displayQuestion(currentQuestionIndex);

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  console.log(questions);
  displayQuestion(currentQuestionIndex);
});

function getSubmittedAnswer(index, type) {
  if (type === 'MCQ') {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    console.log('Selected option:', selectedOption);
    return selectedOption ? selectedOption.value : null;
  } else if (type === 'SAQ') {
    const inputElement = document.getElementById(`q${index}-answer`);
    console.log('Input element:', inputElement);
    return inputElement ? inputElement.value.trim() : null;
  }
}

let score = 0; 
submitBtn.addEventListener('click', () => {
  questions.forEach((question, index) => {
    const submittedAnswer = getSubmittedAnswer(index, question.type);
    
    console.log(`Submitted Answer for question ${index + 1}:`, submittedAnswer);
    console.log(`Correct Answer for question ${index + 1}:`, question.answer);
    if (submittedAnswer === question.answer) {
      alert("Hello");
      score++;
    }
  });
  console.log('Final Score:', score);
  showScoreBtn.style.display = 'block'; 
});

showScoreBtn.addEventListener('click', () => {
  scoreDisplay.innerHTML = `Your score is: ${score}/${questions.length}`;
  feedbackDisp.innerHTML = `<a style=" text-decoration: none;" href="feedback.html">Send us Your feedback about the Test</a>`;
  scoreDisplay.style.display = 'block'; 
});

function displayQuestion(index) {
  if (index < questions.length) {
    const question = questions[index];
    const { type, question: q, options } = question;
    let questionHTML = `<h2>Question ${index + 1}</h2><p>${q}</p>`;

    if (type === 'MCQ') {
      options.forEach((option, i) => {
        questionHTML += `
          <input type="radio" id="q${index}-opt${i}" name="q${index}" value="${option}">
          <label for="q${index}-opt${i}">${option}</label>
          <br>
        `;
        i++;
      });
    } else if (type === 'SAQ') {
      questionHTML += `<input type="text" style="height: 30vh;
      width: 60%; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" id="q${index}-answer" placeholder="Type your answer here">`;
    }

    questionSection.innerHTML = questionHTML;
    nextBtn.style.display = 'none'; 

    setTimeout(() => {
      nextBtn.style.display = 'block';
    }, 2000);

    const progressValue = ((index + 1) / questions.length) * 100;
    progressBar.value = progressValue;
    progressText.textContent = `${progressValue}%`;
  } else {
    questionSection.innerHTML = '<h2>End of Question Paper</h2>';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    
  }
}
