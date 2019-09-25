// { "response_code": 0, "results": [{ "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "The music group Daft Punk got their name from a negative review they recieved.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "The music video to The Buggle&#039;s &quot;Video Killed the Radio Star&quot; was the first music video to broadcast on MTV.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Eurobeat is primarily an Italian genre of music.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "American rapper Dr. Dre actually has a Ph.D. doctorate.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "A Saxophone is a brass instrument.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Daft Punk originated in France.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Stevie Wonder&#039;s real name is Stevland Hardaway Morris.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Scatman John&#039;s real name was John Paul Larkin.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Michael Jackson wrote The Simpsons song &quot;Do the Bartman&quot;.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros.", "correct_answer": "True", "incorrect_answers": ["False"] }] }

// list of questions & answers
var trivia = [
  {
    question: "The music group Daft Punk got their name from a negative review they received.",
    answer: "True"
  },

  {
    question: "The music video to The Buggle&#039;s &quot;Video Killed the Radio Star&quot; was the first music video to broadcast on MTV.",
    answer: "True"
  },

  {
    question: "Eurobeat is primarily an Italian genre of music.",
    answer: "True"
  },

  {
    question: "American rapper Dr. Dre actually has a Ph.D. doctorate.",
    answer: "False"
  },

  {
    question: "A Saxophone is a brass instrument.",
    answer: "False"
  },

  {
    question: "Daft Punk originated in France.",
    answer: "False"
  },

  {
    question: "Stevie Wonder&#039;s real name is Stevland Hardaway Morris.",
    answer: "True"
  },

  {
    question: "Scatman John&#039;s real name was John Paul Larkin.",
    answer: "True"
  },

  {
    question: "Michael Jackson wrote The Simpsons song &quot;Do the Bartman&quot;.",
    answer: "False"
  },

  {
    question: "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros.",
    answer: "True"
  }
]


// Variable to hold the index of current question.
var questionIndex = 0;
// Number of correct answers
let right = 0
// Number of wrong answers
let wrong = 0
// Number of missed questions
// let unanswered = 0
let results = { right, wrong };
// Timer
let countdown = 20
let timeout = false
let timer = (setInterval(countdownFun, 1000))

// Function to render questions.
function renderQuestion() {
  if (!timeout) {

    if (questionIndex <= (trivia.length - 1)) {
      document.querySelector("#trivia").innerHTML = trivia[questionIndex].question;
      console.log(trivia[questionIndex].answer)
    }

    // If there aren't, render the end game screen.
    else {
      console.log('Game Over')
      document.querySelector("#trivia").innerHTML = "Game Over!";
      clearInterval(timer);
      showResults();
      setTimeout(() => {
      renderQuestion();
      }, 30000);
    }
  }
}

// Countdown timer
function countdownFun() {
  countdown--
  console.log(countdown)
  if (countdown === 0) {
    timeout = true
    clearInterval(timer)
    document.getElementById("gamearea").innerHTML = " "

  }
}

// Answer TRUE  notification
document.getElementById("true").addEventListener("click", function () {
  console.log(this)
  if (trivia[questionIndex].answer === "True") {

    alert("Correct!");
    right++;
  }

  else {
    alert("Wrong!");
    wrong++;
  }
  questionIndex++;
  renderQuestion();
})
// Answer FALSE notification
document.getElementById("false").addEventListener("click", function () {
  console.log(this)

  if (trivia[questionIndex].answer === "False") {

    alert("Correct!");
    right++;
    console.log(right++)
  }

  else {
    alert("Wrong!");
    wrong++;
    console.log(wrong++)
  }
  questionIndex++;
  renderQuestion();

})


function showResults() {
  // document.getElementById('right').textContent = right
  // document.getElementById('wrong').textContent = wrong
  document.getElementById('trivia').innerHTML = `<h4>Correct:<span id =  'right'> ${right}</span> </h4>
<h4>Wrong:<span id='wrong'>${wrong} </span> </h4>`
}



// restart game
renderQuestion();
