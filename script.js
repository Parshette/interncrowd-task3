const questions=[
    {
        question:"Which is largest animal in the world",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
        question:"Which is largest animal in the world",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is  the smallest country in the world",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri lanka",correct:false},
        ] 
    },
    {
        question:"Which is largest desert in the world",
        answers:[
            {text:"kalahari",correct:false},
            {text:"gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},
        ]
    },
    { question:"Which is the smallest containt in the world",
    answers:[
        {text:"Asia",correct:false},
        {text:" Australia",correct:true},
        {text:"Arctic",correct:false},
        {text:"Africa",correct:false},
         ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML:"NEXT";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo: currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo +"." + currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct=anser.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}
function resetState(){
    nextButton.style.display="none";
    while(answerbuttons.firstChild){
        answerButton.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.datast.correct=="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }
    else{
        selectBtn.classList.add("incorect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.dicabled=true;
    });
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML="you scored ${score} out of ${questions.length}!";
        nextButton.innerHTML="play Again";
        nextButton.style.display="block";
    }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

