
const questions = [
    "What is the developer's name?",
    "Where is Canada?"
];

const answers = [
    "Christopher",
    "Canada"
];

const allAnswers = [
    ["Mike", "James", "Christopher", "Peter"], // For Q1
    ["Mexico", "Europe", "Canada", "Mars"]     // For Q2
];

// Setting up variables
let next = 0;
let totalCorrect = 0;
const button = document.getElementById("submitBTN");
const retakebutton = document.getElementById("retake");
const questionsSection = document.getElementById("question");
const radioAnswers = document.getElementsByName("answer");

// Set initial question and choices
loadQuestion();

button.addEventListener("click", function () {
    let selectedAnswer = null;
    for (let i = 0; i < radioAnswers.length; i++) {
        if (radioAnswers[i].checked) {
            selectedAnswer = radioAnswers[i].value;
            break;
        }
    }

    if (selectedAnswer === answers[next]) {
        totalCorrect++;
    }

    next++;

    if (next < questions.length) {
        loadQuestion();
    } else {
        questionsSection.innerText = `You got ${totalCorrect} out of ${questions.length}`;
        for (let i = 0; i < radioAnswers.length; i++) {
            radioAnswers[i].style.display = "none";
            button.style.display = "none"
            retakebutton.style.display = "flex"
            const label = document.querySelector(`label[for="${radioAnswers[i].id}"]`);
            if (label) label.style.display = "none";
        }
    }

    console.log("Next index:", next);
});

retakebutton.addEventListener("click", function(){
    window.location.reload();
})
function loadQuestion() {
    questionsSection.innerText = questions[next];
    const choices = allAnswers[next];
    for (let i = 0; i < radioAnswers.length; i++) {
        radioAnswers[i].value = choices[i];
        const label = document.querySelector(`label[for="${radioAnswers[i].id}"]`);
        if (label) label.innerText = choices[i];
        radioAnswers[i].checked = false;
    }
}