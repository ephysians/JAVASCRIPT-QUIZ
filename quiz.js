const questions = [
  {
    question: "React is a ---------based application?",
    answers: [
      { text: "HTML CODE ", correct: false },
      { text: "ReactDom", correct: false },
      { text: "Components", correct: true },
      { text: "html and css", correct: false },
    ],
  },

  {
    question: "Whic is used in digital clock logic ?",
    answers: [
      { text: "Array()", correct: false },
      { text: "SetInterval()", correct: true },
      { text: "SetTimeout()", correct: false },
      { text: "setStart()", correct: false },
    ],
  },

  {
    question: "Display-grid & place-item center will",
    answers: [
      { text: "place element in the up", correct: false },
      { text: "place the item up", correct: false },
      { text: "Has no action", correct: false },
      { text: "place element in the center", correct: true },
    ],
  },

  {
    question: "Alternative of if-else is?",
    answers: [
      { text: "compilation", correct: false },
      { text: "Tinary operator", correct: true },
      { text: "Reduction", correct: false },
      { text: "Flow-control", correct: false },
    ],
  },


  {
    question: " In React js, the Index.html get all it's data from?",
    answers: [
      { text: "ReactDom", correct: false },
      { text: "Index.js", correct: false },
      { text: "App.Js", correct: true },
      { text: "App.css", correct: false },
    ],
  },


  {
    question: " What's the full meaning of CSS ?",
    answers: [
      { text: "Corolate stylt sheet", correct: false },
      { text: "Cassecadian style sheet", correct: false },
      { text: "Case senstive style", correct: false },
      { text: "Cascading style sheet", correct: true },
    ],
  },

  {
    question: " ${} is also called what?",
    answers: [
      { text: "Object element", correct: false },
      { text: "Template Element", correct: false },
      { text: "Object Leteral", correct: false },
      { text: "Template Leteral", correct: true },
    ],
  },


  {
    question: " What will label do in html form ?",
    answers: [
      { text: "Create a new input", correct: false },
      { text: "Delete the tag inpute", correct: false },
      { text: "Creat a new input filed", correct: false },
      { text: "Tag input with same identity ", correct: true },
    ],
  },

  {
    question: " Identify the two type of React component ?",
    answers: [
      { text: "Stateless and Function", correct: false },
      { text: "Function and Classless", correct: false },
      { text: "Class and State", correct: false },
      { text: "Class and Function", correct: true },
    ],
  },

  {
    question: " what can be found inside a class?",
    answers: [
      { text: "Array Method", correct: false },
      { text: "Regex", correct: false },
      { text: "flow-reduction", correct: false },
      { text: "Constructor", correct: true },
    ],
  },

  {
    question: "REACT is a.....for.....",
    answers: [
      { text: "Framework & UX", correct: false },
      { text: "UI & UX", correct: false },
      { text: "framework & UI", correct: false },
      { text: "Library & Front-End", correct: true },
    ],
  },

  {
    question: "Full meaning of REGEX?",
    answers: [
      { text: "React Extension", correct: false },
      { text: "React Expression", correct: false },
      { text: "Regular Expression", correct: false },
      { text: "Rregular Extension", correct: true },
    ],
  },

  {
    question: " x.repalce() is what method?",
    answers: [
      { text: "React Method", correct: false },
      { text: "Object Method", correct: false },
      { text: "Array Method", correct: false },
      { text: "String Method", correct: true },
    ],
  },


  {
    question: "Which is a prefered Front-End path?",
    answers: [
      { text: "HTML,CSS,JS,PYTHON", correct: false },
      { text: "JS,CSS,HTML,REACT", correct: true },
      { text: "HTML,CSS,VUE,REACT", correct: false },
      { text: "NODE,PYTHON,MONGO", correct: false },
    ],
  },


  {
    question: "Which technology is required in back-end?",
    answers: [
      { text: "Angular, React & Git", correct: false },
      { text: "Node Js, Mongo-db & Express", correct: true },
      { text: "C++, Html & Vue", correct: false },
      { text: "C#, Angula & Mongo", correct: false },
    ],
  },

  {
    question: "Which is higher level array()",
    answers: [
      { text: "FAP()", correct: false },
      { text: "SAP()", correct: false },
      { text: "REDUCE()", correct: true },
      { text: "FILTAR()", correct: false },
    ],
  },

  {
    question: "Array accept---data-type?",
    answers: [
      { text: "similar data type", correct: false },
      { text: "Any data type", correct: true },
      { text: "Number data type", correct: false },
      { text: "Logic data-type", correct: false },
    ],
  },

  {
    question: "Another name for DSA is?",
    answers: [
      { text: "Data Science Archieve", correct: false },
      { text: "Data Skill Art", correct: false },
      { text: "Data Structure & Algorithm", correct: true },
      { text: "Data Struture & Api", correct: false },
    ],
  },

  {
    question: "API mostly come in---form?",
    answers: [
      { text: "python and JavsScript", correct: false },
      { text: "Json or UDP", correct: false },
      { text: "XML or Json", correct: true },
      { text: "IP OR UDP", correct: false },
    ],
  },

  {
    question: "HTTP is a......?",
    answers: [
      { text: "Programming Lang", correct: false },
      { text: "Is a python method", correct: false },
      { text: "Is a web protocole", correct: true },
      { text: "Is a JS method ", correct: false },
    ],
  },
];



//<---------MAIN CODE ZONE------------->

  let questionElement = document.getElementById("question")
  let answerButtons = document.getElementById("answer-buttons")
  let nextButton = document.getElementById("next-btn")

  let currentQuestionIndex = 0;
  let score = 0;


// function to start quize and invoke the "showQuestion" function
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion()
}

// function for show question & create 4 new buttons for the Arrays of "answers"
function showQuestion() {
  resetState()
  let currentQuestion = questions[currentQuestionIndex]  
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
  })}


// resetState function to hide the initial four buttons creadted----------------------
function resetState() {
  nextButton.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }}


// function that select Answer--------------------------------------------
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;     // increament score at correct s election
  } else {
    selectedBtn.classList.add("incorrect")
  }


  // Disable the click after selecting answer---------------------------
Array.from(answerButtons.children).forEach(button=> {
  if (button.dataset.correct==="true") { // checking d dataset if true it add classname "correct", if it's wrong answer it checks both.
    button.classList.add("correct");
  }
  button.disabled = true; // Disable all btns after selecting an answer.
});
nextButton.style.display = 'block'  // The next btn appears once the first click of answer is made.
}


function showScore() {
  resetState();    // Recall, resetState displays question but w eneed it to display score this time not question;
  questionElement.innerHTML = `Final score is ${score} from ${questions.length}!`
  if (score <= 8) {
            nextButton.innerHTML = "Ogbeni! abeg run am again u no pass"
            nextButton.style.display = "block"
  } else {
            nextButton.innerHTML = "Congratulations You get mouth!"
            nextButton.style.display = "block"
  }
}


// function to get you to next question & if it's the last question it invokes a "showScore()" to show your final score. 
function handleNewButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  }else{
      showScore();// See function above
  }
  
}

// EventListner on "NEXT" btn to either perform "handleNewBotton()" or startQuiz()
nextButton.addEventListener("click", ()=>{  // The event action invokes f() to answer next question or restart quiz wrt to either condition met.
  if (currentQuestionIndex < questions.length) {  
    handleNewButton();  // See function above
  }else{
    startQuiz()   // See function futher above
  }
})



startQuiz()





