// Custom Letterize :
const potterEnigmaTitle = document.querySelector(".title h1");
potterEnigmaTitle.innerHTML = letterizeSpan(potterEnigmaTitle);

const potterEnigmaDesc = document.querySelector(".title p");
potterEnigmaDesc.innerHTML = letterizeSpan(potterEnigmaDesc);

const questionNumber = document.querySelector("#question_number p");
questionNumber.innerHTML = letterizeSpan(questionNumber);

// Functions Animations :
function letterizeSpan(element) {
    return element.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
}

// Introduction when enter in the quizz page :
introductionQuizzAnim();

function introductionQuizzAnim() {
    anime
        .timeline({ loop: false })
        .add(
            {
                targets: "main .title h1 .letter",
                duration: 2000,
                opacity: [0, 1],
                rotate: [-10, 0],
                translateY: [-60, 0],
                easing: "easeOutElastic(0.7, 1)",
                delay: anime.stagger(60),
            },
            600
        )
        .add(
            {
                targets: "main .title p .letter",
                duration: 2000,
                opacity: [0, 1],
                skew: [15, 0],
                translateY: [20, 0],
                easing: "easeOutElastic(0.7, 1)",
                delay: anime.stagger(40),
            },
            1100
        )
        .add(
            {
                targets: "main .title #start_quizz",
                duration: 2000,
                translateY: ["100%", 0],
                easing: "easeOutExpo",
            },
            1700
        )
        .add(
            {
                targets: "main .title a",
                duration: 600,
                opacity: [0, 1],
                easing: "easeOutExpo",
            },
            3000
        );
}

// Quizz :
const startQuizzBtn = document.getElementById("start_quizz");

startQuizzBtn.addEventListener("click", () => {
    launchQuizzAnim();
    let points = 0;
});

// Quizz answers :
const answers = document.querySelectorAll(".answer");
answers.forEach((answer) =>
    answer.addEventListener("click", () => {
        if (document.querySelector(".answer.selected") !== null) {
            document.querySelector(".answer.selected").classList.remove("selected");
        }
        answer.classList.add("selected");
    })
);

// Variables for the Quizz :
// launchQuizzAnim();

function launchQuizzAnim() {
    anime
        .timeline({ loop: false })
        .add({
            targets: "section.quizz",
            duration: 1600,
            translateY: ["-100%", 0],
            easing: "cubicBezier(0.5, 0, 0, 1)",
        })
        .add(
            {
                targets: ".left_side",
                duration: 1600,
                translateX: ["-100%", 0],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            1400
        )
        .add(
            {
                targets: "#submit_answer",
                duration: 1600,
                translateY: ["100%", 0],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            2400
        )
        .add(
            {
                targets: ".quizz_title",
                duration: 1600,
                translateY: ["-100%", 0],
                easing: "easeOutExpo",
            },
            3000
        )
        .add(
            {
                targets: "#question_number",
                duration: 1600,
                translateX: ["-100%", 0],
                easing: "easeOutExpo",
            },
            3600
        )
        .add(
            {
                targets: ".description",
                duration: 2000,
                opacity: [0, 1],
                easing: "easeOutExpo",
            },
            3200
        )
        .add(
            {
                targets: ".answer",
                duration: 1600,
                translateX: ["100%", 0],
                easing: "easeOutExpo",
                delay: anime.stagger(150),
            },
            2400
        );
}

// Questions for the quizz
const questionAnswer = [
    {
        question_title: "Question N°1",
        question_description: "Description N°1",
        answers: {
            a: "Answer N°1 - 1",
            b: "Answer N°2 - 1",
            c: "Answer N°3 - 1",
        },
        correctAnswer: "c",
    },
    {
        question_title: "Question N°2",
        question_description: "Description N°2",
        answers: {
            a: "Answer N°1 - 2",
            b: "Answer N°2 - 2",
            c: "Answer N°3 - 2",
        },
        correctAnswer: "a",
    },
    {
        question_title: "Question N°3",
        question_description: "Description N°3",
        answers: {
            a: "Answer N°1 - 3",
            b: "Answer N°2 - 3",
            c: "Answer N°3 - 3",
        },
        correctAnswer: "b",
    },
];

// Quizz functionnalities :
const submitBtn = document.getElementById("submit_answer");
const questionTitle = document.getElementById("question_title");
const questionDescription = document.querySelector(".description");

const firstAnswer = document.querySelector(".answer[data-answer='a'] p");
const secondaryAnswer = document.querySelector(".answer[data-answer='b'] p");
const thirdAnswer = document.querySelector(".answer[data-answer='c'] p");

let authorizeAnswerBtn = true;
let userAnswer;
let currentIndex = 0;
let userGoodAnswer = [];

submitBtn.addEventListener("click", () => {
    if (authorizeAnswerBtn) {
        if (document.querySelector(".answer.selected") == null) {
            return;
        } else {
            userAnswer = document.querySelector(".answer.selected").getAttribute("data-answer");

            currentIndex++;
            loadQuestion(currentIndex);
            if (currentIndex > questionAnswer.length) {
                console.log("too much");
            }
            console.log(userAnswer);
        }
    }
});

// Function to change the question :
function loadQuestion(questionIndex) {
    if (questionIndex >= questionAnswer.length) {
        return;
    } else {
        transitionQuestionAnim(questionIndex);
        // transitionNextQuestion(questionIndex);

        console.log(questionIndex);
    }
}

function transitionQuestionAnim(questionIndex) {
    anime
        .timeline({ loop: false, begin: () => (authorizeAnswerBtn = false), complete: () => (authorizeAnswerBtn = true) })
        .add(
            {
                targets: "#question_number p .letter",
                duration: 1600,
                translateY: [0, "100%"],
                easing: "easeOutExpo",
                delay: anime.stagger(150),
                complete: () => {
                    // Change the number of the question :
                    if (questionIndex < 9) {
                        questionNumber.innerHTML = `0${questionIndex + 1}`;
                    } else {
                        questionNumber.innerHTML = `${questionIndex + 1}`;
                    }
                    questionNumber.innerHTML = letterizeSpan(questionNumber);

                    anime({
                        targets: "#question_number p .letter",
                        duration: 1600,
                        translateY: ["-100%", 0],
                        easing: "easeOutExpo",
                        delay: anime.stagger(150),
                    });
                },
            },
            500
        )
        .add(
            {
                targets: "#question_title",
                duration: 1600,
                translateY: [0, "200%"],
                easing: "easeOutExpo",
                complete: () => {
                    questionTitle.innerText = questionAnswer[questionIndex].question_title; // Change the title of the question

                    anime({
                        targets: "#question_title",
                        duration: 1600,
                        translateY: ["-200%", 0],
                        easing: "easeOutExpo",
                    });
                },
            },
            200
        )
        .add(
            {
                targets: ".description",
                duration: 2000,
                opacity: [1, 0],
                easing: "easeOutExpo",
                complete: () => {
                    questionDescription.innerText = questionAnswer[questionIndex].question_description; // Change the description of the question

                    anime({
                        targets: ".description",
                        duration: 2000,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                    });
                },
            },
            700
        )
        .add(
            {
                targets: ".answer",
                duration: 1600,
                translateX: [0, "-100%"],
                easing: "easeOutExpo",
                delay: anime.stagger(150),
                complete: () => {
                    document.querySelector(".answer.selected").classList.remove("selected"); // Delete the last selected answer

                    // Change the answer :
                    firstAnswer.innerText = questionAnswer[questionIndex].answers.a;
                    secondaryAnswer.innerText = questionAnswer[questionIndex].answers.b;
                    thirdAnswer.innerText = questionAnswer[questionIndex].answers.c;

                    anime({
                        targets: ".answer",
                        duration: 1600,
                        translateX: ["100%", 0],
                        easing: "easeOutExpo",
                        delay: anime.stagger(150),
                    });
                },
            },
            600
        );
}

// Launch the first question :
setupLaunchQuestion(0);
function setupLaunchQuestion(questionIndex) {
    // Change the number of the question :
    if (questionIndex < 9) {
        questionNumber.innerHTML = `0${questionIndex + 1}`;
    } else {
        questionNumber.innerHTML = `${questionIndex + 1}`;
    }
    questionNumber.innerHTML = letterizeSpan(questionNumber);

    questionTitle.innerText = questionAnswer[questionIndex].question_title; // Change the title of the question
    questionDescription.innerText = questionAnswer[questionIndex].question_description; // Change the description of the question

    // Change the answer :
    firstAnswer.innerText = questionAnswer[questionIndex].answers.a;
    secondaryAnswer.innerText = questionAnswer[questionIndex].answers.b;
    thirdAnswer.innerText = questionAnswer[questionIndex].answers.c;
}
