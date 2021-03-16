// Custom Letterize :
const potterEnigmaTitle = document.querySelector(".title h1");
potterEnigmaTitle.innerHTML = letterizeSpan(potterEnigmaTitle);

const potterEnigmaTitleDesc = document.querySelector(".title p");
potterEnigmaTitleDesc.innerHTML = letterizeSpan(potterEnigmaTitleDesc);

const potterEnigmaResultTitle = document.querySelector(".result h2");
potterEnigmaResultTitle.innerHTML = letterizeSpan(potterEnigmaResultTitle);

const questionNumber = document.querySelector("#question_number p");
questionNumber.innerHTML = letterizeSpan(questionNumber);

// Functions Animations :
function letterizeSpan(element) {
    return element.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
}

// Introduction when enter in the quizz page :
(function introductionQuizzAnim() {
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
})();

// Quizz :
const startQuizzBtn = document.getElementById("start_quizz");
let points = 0;

startQuizzBtn.addEventListener(
    "click",
    () => {
        launchQuizzAnim();
        points = 0;
    },
    { once: true }
);

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
        question_title: "The parents of Harry Potter",
        question_description: "Is Harry Potter James Evans and Lily Potter's son ?",
        answers: {
            a: "True : They are his parents",
            b: "False : They are not his parents",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Dumbledore in the saga",
        question_description: "The actor playing Dumbledore was changed during the saga ?",
        answers: {
            a: "True : The actor has been changed",
            b: "False : The actor has not been changed",
        },
        correctAnswer: "a",
    },
    {
        question_title: "Birth of Harry Potter",
        question_description: "Harry Potter was borned on 21 July 1980 ?",
        answers: {
            a: "True : This is the right date",
            b: "False : This is not the right date",
        },
        correctAnswer: "b",
    },
    {
        question_title: "The appearance of Hagrid",
        question_description: "Rubeus Hagrid appears for the first time in Harry Potter and the Chamber of Secrets ?",
        answers: {
            a: "True : He appears for the first time in this film",
            b: "False : He does not appear for the first time in this film",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Creation of the Philosopher's Stone",
        question_description: "Was the Philosopher's Stone made by Nicolas Flamel ?",
        answers: {
            a: "True : He is the one who created it",
            b: "False : He didn't create it himself",
        },
        correctAnswer: "a",
    },
    {
        question_title: "The Golden Snitch of Quidditch",
        question_description: "In his first game of Quidditch, Harry Potter catches the Golden Snitch with his hand to make Griffondor win ?",
        answers: {
            a: "True : He managed to catch it with his hand",
            b: "False : He didn't manage to catch it with his hand",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Eye colour",
        question_description: "Are the eyes of the Basilic yellow ?",
        answers: {
            a: "True : They are yellow",
            b: "False : They are not yellow",
        },
        correctAnswer: "a",
    },
    {
        question_title: "The first test",
        question_description: "During the Three Wizards Tournament, Cedric Diggory had to face a 'Swedish with short snout ?'",
        answers: {
            a: "True : It is the dragon he had to face",
            b: "False : It is not the dragon he had to face",
        },
        correctAnswer: "a",
    },
    {
        question_title: "The souls of Voldemort",
        question_description: "Voldemort created 7 Horcruxes, so his soul is divided into 7 parts ?",
        answers: {
            a: "True : His soul is divided into 7 parts",
            b: "False : His soul is not divided into 7 parts",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Dumbledore's mother",
        question_description: "Is Dumbledore's mother named 'Ariana' ?",
        answers: {
            a: "True : This is the name of Dumbledore's mother",
            b: "False : This is not the name of Dumbledore's mother",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Evil Ginny Weasley",
        question_description: "Did Ginny Weasley strangle the cocks of Hagrid who was a threat to the Basilic ?",
        answers: {
            a: "True : She's the one who killed them",
            b: "False : She didn't kill them",
        },
        correctAnswer: "a",
    },
    {
        question_title: "The liberation of Dobby",
        question_description: "Did Harry Potter give Dobby a piece of clothing, in this case a sock, to give him freedom ?",
        answers: {
            a: "True : Harry Potter gave him a sock",
            b: "False : Harry Potter didn't give him a sock",
        },
        correctAnswer: "b",
    },
    {
        question_title: "The murderer of Dumbledore",
        question_description: "Did Drago Malfoy disarm Dumbledore and then kill him in the Astronomy Tower ?",
        answers: {
            a: "True : Drago Malfoy disarmed him and then killed him",
            b: "False : Drago Malfoy disarmed him but did not kill him",
        },
        correctAnswer: "b",
    },
    {
        question_title: "The wedding of Fleur Delacour",
        question_description: "During Fleur Delacour's wedding with Bill Weaslay, Fleur wears a dress with two phoenixes on her bust ?",
        answers: {
            a: "True : There are two phoenixes on her dress",
            b: "False : There are not two phoenixes on her dress",
        },
        correctAnswer: "a",
    },
    {
        question_title: "The Animagus",
        question_description: "Are Remus Lupin's and Sirius Black's animagus the dog and the werewolf respectively ?",
        answers: {
            a: "True : These are their animagus",
            b: "False : These are not their animagus",
        },
        correctAnswer: "b",
    },
    {
        question_title: "Hermione Granger and the Sombral",
        question_description: "Can Hermione Granger see the Thestral on which she rides in the third opus ?",
        answers: {
            a: "True : She can see the Sombral",
            b: "False : She can't see the Sombral",
        },
        correctAnswer: "b",
    },
    {
        question_title: "The Grey Lady of Serdaigle",
        question_description: "Was Tom Riddle the first student to have a long discussion with the Grey Lady ?",
        answers: {
            a: "True : It was Tom Riddle who spoke to her at length",
            b: "False : It wasn't Tom Riddle who spoke to her at length",
        },
        correctAnswer: "a",
    },
    {
        question_title: "Prefect Nymphadora Tonks",
        question_description: "Nymphadora Tonks belonged to Hufflepuff House, and wished to become the prefect of this house, did she succeed ?",
        answers: {
            a: "True : She managed to become a prefect",
            b: "False : She did not succeed in becoming a prefect",
        },
        correctAnswer: "b",
    },
    {
        question_title: "The harassment of Severus Rogue",
        question_description:
            "Was Severus Snape harassed by three children named James Potter, Sirius Black and Peter Pettigrow when he was younger ?",
        answers: {
            a: "True : These three students harassed him",
            b: "False : These three students do not harass him",
        },
        correctAnswer: "a",
    },
    {
        question_title: "Trelawney's dismissal",
        question_description: "Was Professor Sibylle Trelawney fired by Dolores Ombrage without anyone intervening ?",
        answers: {
            a: "True : She was dismissed because no one intervened",
            b: "False : She was not dismissed because someone intervened",
        },
        correctAnswer: "b",
    },
]; // 20 Questions

// Quizz functionnalities :
const submitBtn = document.getElementById("submit_answer");
const questionTitle = document.getElementById("question_title");
const questionDescription = document.querySelector(".description");

const firstAnswer = document.querySelector(".answer[data-answer='a'] p");
const secondaryAnswer = document.querySelector(".answer[data-answer='b'] p");

let authorizeAnswerBtn = true;
let userAnswer;
let currentIndex = 0;

submitBtn.addEventListener("click", () => {
    if (authorizeAnswerBtn) {
        if (document.querySelector(".answer.selected") == null) {
            return;
        } else {
            userAnswer = document.querySelector(".answer.selected").getAttribute("data-answer");
            if (questionAnswer[currentIndex].correctAnswer == userAnswer) {
                points++;
            }

            currentIndex++;
            loadQuestion(currentIndex);
            if (currentIndex > questionAnswer.length) {
                console.log("too much");
            }
        }
    }
});

// Function to change the question :
const potterEnigmaResultSentence = document.getElementById("result_sentence");
const potterEnigmaResultNumber = document.getElementById("user_result");

function loadQuestion(questionIndex) {
    if (questionIndex >= questionAnswer.length) {
        potterEnigmaResultNumber.innerHTML = points < 9 ? `0${points} / ${questionAnswer.length}` : `${points} / ${questionAnswer.length}`;
        if (points > 16) {
            potterEnigmaResultSentence.innerHTML = "Congratulations, you've just won your access to Hogwarts !";
        } else if (points > 12) {
            potterEnigmaResultSentence.innerHTML = "Bravo, you are almost a real wizard, just a little more effort !";
        } else if (points > 8) {
            potterEnigmaResultSentence.innerHTML = "You're going to need more determination to become a real wizard !";
        } else if (points > 4) {
            potterEnigmaResultSentence.innerHTML = "It's not brilliant ! You're going to have to revise your classics.";
        } else {
            potterEnigmaResultSentence.innerHTML = "I warned you, this quiz is not for Muggles !";
        }

        potterEnigmaResultSentence.innerHTML = letterizeSpan(potterEnigmaResultSentence);
        potterEnigmaResultNumber.innerHTML = letterizeSpan(potterEnigmaResultNumber);

        document.querySelector("section.result_section").style.display = "block";
        resultQuizzAnim();
    } else {
        transitionQuestionAnim(questionIndex);
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
                    questionNumber.innerHTML = questionIndex < 9 ? `0${questionIndex + 1}` : `${questionIndex + 1}`;
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
(function setupLaunchQuestion(questionIndex) {
    // Change the number of the question :
    questionNumber.innerHTML = questionIndex < 9 ? `0${questionIndex + 1}` : `${questionIndex + 1}`;
    questionNumber.innerHTML = letterizeSpan(questionNumber);

    questionTitle.innerText = questionAnswer[questionIndex].question_title; // Change the title of the question
    questionDescription.innerText = questionAnswer[questionIndex].question_description; // Change the description of the question

    // Change the answer :
    firstAnswer.innerText = questionAnswer[questionIndex].answers.a;
    secondaryAnswer.innerText = questionAnswer[questionIndex].answers.b;
})(0);

// Result animation :
function resultQuizzAnim() {
    anime
        .timeline({ loop: false })
        .add(
            {
                targets: "section.result_section .result",
                duration: 1600,
                translateY: ["100%", 0],
                easing: "cubicBezier(0.5, 0, 0, 1)",
                complete: () => {
                    document.querySelector("section.quizz").style.display = "none";
                },
            },
            600
        )
        .add(
            {
                targets: "section.result_section .result h2 .letter",
                duration: 2000,
                opacity: [0, 1],
                rotate: [-10, 0],
                translateY: [-60, 0],
                easing: "easeOutElastic(0.7, 1)",
                delay: anime.stagger(60),
            },
            1800
        )
        .add(
            {
                targets: "section.result_section .result p .letter",
                duration: 2000,
                opacity: [0, 1],
                skew: [15, 0],
                translateY: [20, 0],
                easing: "easeOutElastic(0.7, 1)",
                delay: anime.stagger(40),
            },
            2300
        )
        .add(
            {
                targets: "section.result_section .result #user_result .letter",
                duration: 2000,
                translateY: ["200%", 0],
                easing: "easeOutExpo",
                delay: anime.stagger(80, { from: "last" }),
            },
            2900
        )
        .add(
            {
                targets: "section.result_section .result a",
                duration: 600,
                opacity: [0, 1],
                easing: "easeOutExpo",
            },
            4200
        );
}
