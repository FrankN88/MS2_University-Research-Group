/*
* The quiz.js is used by the quiz.html file to display a quiz comprising of ten questions to the user
* The quiz has a clock, score, percentage and results summary screen
*/
// Quiz Variables
const answersContainer = document.querySelector(".answers-result");
const options = document.querySelector(".options").children;
const questionSpan = document.querySelector(".question-num-value");
const question=document.querySelector(".question");
const totalQuestions =document.querySelector(".total-questions");
const correctAnswersSpan =document.querySelector(".correct-answers");
const totalQuestions2 =document.querySelector(".total-questions2");
const percentageSpan =document.querySelector(".percentage");

let currentIndex;
let index = 0;
let respondedQuestions =[];
let score = 0;

const opt1 = document.querySelector(".option1");
const opt2 = document.querySelector(".option2");
const opt3 = document.querySelector(".option3");
const opt4 = document.querySelector(".option4");

/*
* The questions.js file contains the 10 questions that are used in the quiz.
* The variable questions is an array with the question, choices and answer
*/
const questions = [
    {   
        //Question
        q:'What is the approximated measure of the speed of light?',
        options:['300 thousand meters/second', '500 thousand meters/second', '200 thousand meters/second', '250 thousand meters/second'],
        answer:0
    },
    {   
        //Question
        q:'How many elements there are in the periodic table of elements?',
        options:['120', '118', '215', '230'],
        answer:1
    },
    {   
        //Question
        q:'What is the unit of measure of the magnetic field?',
        options:['G', 'Watt', 'Gauss', 'Candela'],
        answer:2
    },
    {
      //Question 
      q:'What is the formula of gravity of Earth?',
      options:['g= 9.81 km s-2', 'g= 18 m s-2', 'g= 9.81 m s-2', 'g= 9.81 m/m s-2'],
      answer:2
    },
    {
      //Question 
      q:'Which is the seventh planet from the sun?',
      options:['Uranus', 'Venus', 'Jupiter', 'Pluto'],
      answer:0
    },
    {
      //Question 
      q:'What is the formula of speed?',
      options:['speed = distance ÷ time', 'speed = distance x time', 'speed = 2distance - time', 'speed = distance ÷ time x 24'],
      answer:0
    },
    {
      //Question 
      q:'Can sound waves generate heat?',
      options:['never', 'only during the night', 'yes', 'only during the day'],
      answer:2
    },
    {
      //Question 
      q:'What is the absolute 0?',
      options:['−273.15 °C', '−300 °C', '−300.30 °C', '−250 °C'],
      answer:0
    },
    {
      //Question 
      q:'Sodium is a chemical element with atomic number 11. What is its symbol?',
      options:['Nu', 'Na', 'No', 'Ni'],
      answer:1
    },
    {
      //Question
      q:'The ... Effect makes things traveling long distances around the Earth appear to move at a curve as opposed to a straight line.',
      options:['Newton', 'Coriolis', 'Bohr', 'Planck'],
      answer:1
    }
    ];

totalQuestions.innerHTML = questions.length;

function load(){
    questionSpan.innerHTML = index + 1;
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0];    
    opt2.innerHTML = questions[currentIndex].options[1];
    opt3.innerHTML = questions[currentIndex].options[2];
    opt4.innerHTML = questions[currentIndex].options[3];
    index++;
}

/**
 * Checking the answer
 */
function check(element){
    if(element.id == questions[currentIndex].answer){
        element.className="correct";
        updateAnswersTracker("correct");
        score++;
    }
    else {
        element.className="wrong";
        updateAnswersTracker("wrong");
    }
    disableClick();
}

/**
 * Validate button before passing to next
 */
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option");
    }
    else{
        randomQuestion();
        enableClick();
    }
}

/**
 * Click event on Next button
 */
function next(){
    validate();
}

/**
 * Disable click for the options
 */
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled");

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }
}

//Enable click in the options
/**
 * Enable click in the options
 */

function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong");

    }
}

/**
 * Select a random question
 */
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    if(index == questions.length){
        quizOver();
    }
    else{
        if(respondedQuestions.length > 0){
            if(respondedQuestions.includes(randomNumber)){
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if(respondedQuestions.length == 0){
            currentIndex = randomNumber;
            load();
        }
        respondedQuestions.push(randomNumber);
    }
}


/**
 * Restart
 */
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
};


/**
 * Set up answers tracker elements
 */
function answersTracker(){
    for(let i=0; i< questions.length; i++){
        const div =document.createElement("div");
        answersContainer.appendChild(div);
    }
}
/**
 * Update the answers tracker elements
 */
function updateAnswersTracker(newClass){
    answersContainer.children[index -1].classList.add(newClass);
}


/**
 * Displays the quiz-over page
 */
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswersSpan.innerHTML = score;
    totalQuestions2.innerHTML = questions.length;
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%";
}

function tryAgain(){
    window.location.reload();
}

// Clock
gameClock = document.getElementById('gameClock');

//  Get methods in use here
function digitalTime(){
	date = new Date();
	getHours = date.getHours();
	let ampm = (getHours >= 12) ? "PM" : "AM";
	getHours = date.getHours() % 12 || 12;
	getMinutes = date.getMinutes();
	getSeconds = date.getSeconds();

    // If statement
	if(getHours < 10){
		getHours = "0"+getHours;
	}
	if(getMinutes < 10){
		getMinutes = "0"+getMinutes;
	}
	if(getSeconds < 10){
		getSeconds = "0"+getSeconds;
	}
    
    // Result to be returned
	ClockView = "<span>"+getHours + "</span>:<span>"+getMinutes+"</span>:<span id='second'>"+getSeconds+"</span>"+"<span id='ampm'>  "+ampm+"</span>";
	gameClock.innerHTML= ClockView;
	setTimeout(digitalTime,1000);

}

digitalTime();












