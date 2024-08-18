const questions=[{
    question:"What is the captial of france?",
    answers:[
        {text:"Berlin",correct:false},
        {text:"paris",correct:true},
        {text:"London",correct:false},
        {text:"Rome",correct:false},
    ]
},{
    question:"Which programming language is used for web development?",
    answers:[
        {text:"Java",correct:false},
        {text:"Python",correct:false},
        {text:"Javascript",correct:true},
        {text:"C++",correct:false},
    ]
},{
    question:"What is tha largest planet in our solar system?",
    answers:[
        {text:"Earth",correct:false},
        {text:"saturn",correct:false},
        {text:"Jupiter",correct:true},
        {text:"Uranus",correct:false},
    ]
},{
    question:"Which social media platform was founded by mark zuckerberg?",
    answers:[
        {text:"Instagram",correct:false},
        {text:"Twitter",correct:false},
        {text:"Snapchat",correct:false},
        {text:"Facebook",correct:true},
    ]
}
]
const questionelement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextbtn=document.getElementById("nextbtn");
let currentquestionindex=0;
let score =0;
function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionelement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
       let button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");//classname
        answerButtons.appendChild(button);//append into answer button
        button.addEventListener("click",selectanswer);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
    })
}
function selectanswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    } Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
}
function showscore(){
    resetState();
    questionelement.innerHTML=`you are scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="play again";
    nextbtn.style.display="block";
}
function handleNextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextbtn.addEventListener("click",()=>{
if(currentquestionindex<questions.length){
    handleNextbutton();
}
else{
    startquiz();
}
});
startquiz();
function resetState(){
    nextbtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}