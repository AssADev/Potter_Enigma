// Custom Letterize :
const potterEnigmaTitle = document.querySelector(".title h1");
potterEnigmaTitle.innerHTML = letterizeSpan(potterEnigmaTitle);

const potterEnigmaDesc = document.querySelector(".title p");
potterEnigmaDesc.innerHTML = letterizeSpan(potterEnigmaDesc);

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
launchQuizzAnim();

function launchQuizzAnim() {
    anime({
        targets: "section.quizz",
        duration: 1600,
        translateY: ["-100%", 0],
        easing: "easeOutExpo",
        delay: 300,
    });
}

const questionAnswer = [
    {
        question: "Question N°1",
        answers: {
            a: "Answer N°1",
            b: "Answer N°2",
            c: "Answer N°3",
        },
        correctAnswer: "c",
    },
    {
        question: "Question N°2",
        answers: {
            a: "Answer N°1",
            b: "Answer N°2",
            c: "Answer N°3",
        },
        correctAnswer: "a",
    },
    {
        question: "Question N°3",
        answers: {
            a: "Answer N°1",
            b: "Answer N°2",
            c: "Answer N°3",
        },
        correctAnswer: "b",
    },
];
