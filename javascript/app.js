// { "response_code": 0, "results": [{ "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "The music group Daft Punk got their name from a negative review they recieved.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "The music video to The Buggle&#039;s &quot;Video Killed the Radio Star&quot; was the first music video to broadcast on MTV.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Eurobeat is primarily an Italian genre of music.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "American rapper Dr. Dre actually has a Ph.D. doctorate.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "A Saxophone is a brass instrument.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Daft Punk originated in France.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Stevie Wonder&#039;s real name is Stevland Hardaway Morris.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Scatman John&#039;s real name was John Paul Larkin.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "Michael Jackson wrote The Simpsons song &quot;Do the Bartman&quot;.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "easy", "question": "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros.", "correct_answer": "True", "incorrect_answers": ["False"] }] }


var trivia = [
  {
    question: "The music group Daft Punk got their name from a negative review they recieved.",
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

let right = 0
let wrong = 0
let unanswered = 0
let countdown = 40

let timer = (setInterval(countdown, 40000)
function countdown() {
  countdown--
  if (countdown === 0) {
    //  gmae is  over, clear timer 
  }

  for (i = question; i < trivia.length; i++) {
    text += trivia[i];
    document.getElementById("demo").innerHTML = text;
    console.log('text')
  }
  //loop trivia[i].question   div with questions and when the game is over you empty the div and show a info in the results div


