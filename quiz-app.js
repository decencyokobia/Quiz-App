const questions = [
    {
        question: "What planet is closest to the sun?",
        answers: [
              { text: "Mercury", correct: true},
              { text: "Venus", correct: false},
              { text: "Mars", correct: false},
              { text: "Jupiter", correct: false}
        ]
    
    },
    {
        question: "Who wrote the book Chitty-Chitty-Bang-Bang: The Magical Car?",
        answers: [
              { text: "Arthur Doyle", correct: false},
              { text: "Zadie Smith", correct: false},
              { text: "Ian Fleming", correct: true},
              { text: "Aesop Joe", correct: false}
        ]
    
    },
    {
        question: "In which part of your body would you find the cruciate ligament?",
        answers: [
              { text: "Face", correct: false},
              { text: "Foot", correct: false},
              { text: "Wrist", correct: false},
              { text: "Knee", correct: true},
        ]
    
    },
    {
        question: "What is the most populated city in Australia?",
        answers: [
              { text: "Canberra", correct: false},
              { text: "Sydney", correct: true},
              { text: "Melbourne", correct: false},
              { text: "Gold Coast", correct: false}
        ]
    
    },
    {
        question: "What is the name of the main antagonist in the Shakespeare play Othello?",
        answers: [
              { text: "Fanni", correct: false},
              { text: "Lago", correct: true},
              { text: "Collins", correct: false},
              { text: "Diana", correct: false}
        ]
    
    },
    {
        question: "When was the movie the Titanic released?",
        answers: [
              { text: "1997", correct: true},
              { text: "1986", correct: false},
              { text: "1947", correct: false},
              { text: "1969", correct: false}
        ]
    
    },
    {
        question: "What is the capital of Qatar?",
        answers: [
              { text: "Al Khor", correct: false},
              { text: "Mesaieed", correct: false},
              { text: "Doha", correct: true},
              { text: "Dukhan", correct: false}
        ]
    
    },
    {
        question: "What element is denoted by the chemical symbol Sn in the periodic table?",
        answers: [
              { text: "Strontium", correct: false},
              { text: "Tin", correct: true},
              { text: "Silicon", correct: false},
              { text: "Actinium", correct: false}
        ]
    
    },
    {
        question: "How many of Henry VIII's wives were called Catherine?",
        answers: [
              { text: "3", correct: true},
              { text: "1", correct: false},
              { text: "2", correct: false},
              { text: "5", correct: false}
        ]
    
    },
    {
        question: "What was the most popular girls name in the UK in 2023?",
        answers: [
              { text: "Emma", correct: false},
              { text: "Olivia", correct: true},
              { text: "Vicky", correct: false},
              { text: "Bethany", correct: false}
        ]
    
    },
    {
        question: "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?",
        answers: [
              { text: "All the President's Men", correct: true},
              { text: "The Godfather", correct: false},
              { text: "The Dark Knight", correct: false},
              { text: "Forrest Gump", correct: false}
        ]
    
    },
    {
        question: "Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?",
        answers: [
              { text: "Felix Omar", correct: false},
              { text: "Jimmy Fox", correct: false},
              { text: "Alan Ross", correct: false},
              { text: "Simon Amstell", correct: true}
        ]
    
    },
    {
        question: "What is James Bond's code name?",
        answers: [
              { text: "439", correct: false},
              { text: "797", correct: false},
              { text: "627", correct: false},
              { text: "007", correct: true}
        ]
    
    },
    {
        question: "What is the capital of Finland?",
        answers: [
              { text: "Turku", correct: false},
              { text: "Helsinki", correct: true},
              { text: "Savonlinna", correct: false},
              { text: "Oulu", correct: false}
        ]
    
    },
    {
        question: "Which popular video game franchise has released games with the subtitles World at War and Black Ops?",
        answers: [
              { text: "Call of Duty", correct: true},
              { text: "Star Wars", correct: false},
              { text: "Fortnite", correct: false},
              { text: "Clashes", correct: false}
        ]
    
    },
    {
        question: "In what US state is the city Nashville?",
        answers: [
              { text: "Texas", correct: false},
              { text: "New York", correct: false},
              { text: "Tennessee", correct: true},
              { text: "New Mexico", correct: false}
        ]
    
    },
    {
        question: "Which rock band was founded by Trent Reznor in 1988?",
        answers: [
              { text: "The Rolling Stones", correct: false},
              { text: "Nine Inch Nails", correct: true},
              { text: "Pink Floyd", correct: false},
              { text: "Metallica", correct: false}
        ]
    
    },
    {
        question: "What is the currency of Denmark?",
        answers: [
              { text: "Shillings", correct: false},
              { text: "Krone", correct: true},
              { text: "Gold", correct: false},
              { text: "Dinar", correct: false}
        ]
    
    },
    {
        question: "Which Tennis Grand Slam is played on a clay surface?",
        answers: [
              { text: "US Open", correct: false},
              { text: "Australian Open", correct: false},
              { text: "Wimbledon", correct: false},
              { text: "The French Open (Roland Garros)", correct: true}
        ]
    
    },
    {
        question: "In which European country would you find the Rijksmuseum?",
        answers: [
              { text: "Italy", correct: false},
              { text: "Netherlands", correct: true},
              { text: "Belguim", correct: false},
              { text: "France", correct: false}
        ]
    
    },
    {
        question: "How many films have Al Pacino and Robert De Niro appeared in together?",
        answers: [
              { text: "7", correct: false},
              { text: "4", correct: true},
              { text: "9", correct: false},
              { text: "59", correct: false}
        ]
    
    },
    {
        question: "What was the old name for a Snickers bar before it changed in 1990?",
        answers: [
              { text: "Marathon", correct: true},
              { text: "Roblox", correct: false},
              { text: "Tachi", correct: false},
              { text: "Oflon", correct: false}
        ]
    
    },
    {
        question: "Who was the head of state in Japan during the Second World War?",
        answers: [
              { text: "Emperor Cesear", correct: false},
              { text: "Emperor Omar", correct: false},
              { text: "Emperor Micha", correct: false},
              { text: "Emperor Hirohito", correct: true}
        ]
    
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
              { text: "Pluto", correct: false},
              { text: "Mars", correct: false},
              { text: "Saturn", correct: false},
              { text: "Mercury", correct: true}
        ]
    
    }
];

const questionDisplay = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");


let questionIndex = 0;
let score = 0;


function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    
    startQuestion();
}

function startQuestion(){
    resetMode();

    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionDisplay.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetMode(){
    nextBtn.style.display = "none";

   while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetMode();

    questionDisplay.innerHTML = questionDisplay.innerHTML = "Your Score is: " + `<b>${score}</b> / <b>${questions.length}</b>`;
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "play Again";
}

function handleNextQuestion(){
    questionIndex++; 
    if(questionIndex < questions.length){
        startQuestion();
    }else {
       showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(questionIndex < questions.length){
        handleNextQuestion();
    }else {
        startQuiz();
    }
});

startQuestion();




