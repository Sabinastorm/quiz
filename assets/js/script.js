// Code from Code ninjas How To Create A JavaScript Quiz Code?:
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn= document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn= document.getElementById('false');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');
let totalScoreText = document.getElementById('total-score');
let currentQuestion = 0;
var score = 0;
let questions = [
    {
        question: "What flightless bird went extinct in the 1660s and has a reputation for stupidity?",
        answers: [
            {option:"The dodo bird",answer:true},
            {option:"The labrador duck",answer:false}
        ]
    },
    {
        question: "According to the Big Bang Theory, how did the universe begin?",
        answers: [
            {option:"A meteor shower",answer:false},
            {option:"An explosion",answer:true}
        ]
    },
    {
        question: "In the Iliad, Greek forces besiege the people of what kingdom?",
        answers: [
            {option:"Troy",answer:true},
            {option:"Persia",answer:false}
        ]
    },
    {
      question: "Which Chess piece moves first?",
      answers: [
          {option:"White",answer:true},
          {option:"Black",answer:false}
      ]
    },
    {
        question: "How many humps does a camel have?",
        answers: [
            {option:"One",answer:false},
            {option:"Two",answer:true}
        ]    
        
    },
    {
        question: "What is Earth's largest continent?",
        answers: [
            {option:"Asia",answer:true},
            {option:"Africa",answer:false}
        ]
    },
    {
        question: "How many colors are there in the rainbow?",
        answers: [
            {option:"Six",answer:false},
            {option:"Seven",answer:true}
            ]
    },
    {
        question: "What country is responsible for creating the Olympic Games?",
        answers: [
            {option:"Greece",answer:true},
            {option:"Spain",answer:false}
        ]
    },
    {
        question: "What's the smallest country in the world?",
        answers: [
            {option:"Vatican City",answer:true},
            {option:"Monaco",answer:false}
        ]
    },
    {
        question: "What is the loudest animal on Earth?",
        answers: [
            {option:"Elephant",answer:false},
            {option:"Spearm Whale",answer:true}
        ]
    }

]
restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);
function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score>3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.add('hide');
}
function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}
function next(){
    currentQuestion++;
    console.log(currentQuestion);
    console.log(numberOfQuestions);
    if (currentQuestion === numberOfQuestions) {
      submit();
    }
    if(currentQuestion>=4){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<numberOfQuestions){
                score++; 
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<numberOfQuestions){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<numberOfQuestions){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<numberOfQuestions){
            next();
        }
    }
    prevBtn.classList.remove('hide');
}    
function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++; 
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = question[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    nextBtn.classList.remove('hide');
}    
function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "Congratulations!<br><br>Your score is:";
}
beginQuiz();
const numberOfQuestions = questions.length;
totalScoreText.innerText = `/ ${numberOfQuestions}`;