const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn= document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn= document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let question = [
    {
        question: "What flightless bird went extinct in the 1660s and has a reputation for stupidity?",
        answers: [
            {option:"The dodo bird",answer:true},
            {option:"The labrador duck",answer:false}
        ]
    },
    {
        question: "According to the Big Bang Theory, how did the universe begin?",
        answer: [
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
    falseBtn.innerHTML = questions[currentQuestion].answer[1].option;
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
    if(currentQuestion>=2){
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
    prevBtn.classList.remove('hide');
}    

function prev(){
    currentQuestion--;
    if(currentQustion<=0){
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
    questionText.innerHTML = "Congratulations!";
}
