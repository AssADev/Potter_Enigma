// Hover for grid sections :
const gridNamesHover = document.querySelectorAll(".name_hover");

let finishAnim;
let gridMouseOut;

for (let i = 0; i < gridNamesHover.length; i++) {
    gridNamesHover[i].addEventListener("mouseenter", () => {
        gridMouseOut = false;
        finishAnim = false;

        let hoverGridAnimEnter = anime({
            targets: gridNamesHover[i].querySelectorAll(`#name_hover_anim .letter`),
            duration: 800,
            opacity: [0, 1],
            rotate: [-20, 0],
            translateY: ["100%", 0],
            easing: "easeOutExpo",
            delay: (el, i) => 40 + 30 * i,
            complete: function (anim) {
                finishAnim = true;
                console.log(finishAnim, gridMouseOut);
                if (finishAnim == true && gridMouseOut == true) {
                    let hoverGridAnimOut = anime({
                        targets: gridNamesHover[i].querySelectorAll("#name_hover_anim .letter"),
                        duration: 800,
                        opacity: [1, 0],
                        rotate: [0, -10],
                        translateY: [0, "-100%"],
                        easing: "easeInExpo",
                        delay: (el, i) => 30 * i,
                    });
                }
            },
        });
    });
    gridNamesHover[i].addEventListener("mouseout", () => {
        gridMouseOut = true;
        if (finishAnim == true && gridMouseOut == true) {
            anime({
                targets: gridNamesHover[i].querySelectorAll("#name_hover_anim .letter"),
                duration: 800,
                opacity: [1, 0],
                rotate: [0, -10],
                translateY: [0, "-100%"],
                easing: "easeInExpo",
                delay: (el, i) => 30 * i,
            });
        }
    });
}

// Custom Letterize :
const potterEnigmaTitle = document.querySelector("header .title h1");
potterEnigmaTitle.innerHTML = letterizeSpan(potterEnigmaTitle);

const potterEnigmaDesc = document.querySelector("header .title p");
potterEnigmaDesc.innerHTML = letterizeSpan(potterEnigmaDesc);

const gridNamesHoverSpan = document.querySelectorAll(".name_hover #name_hover_anim");
gridNamesHoverSpan.forEach((gridNameHoverSpan) => (gridNameHoverSpan.innerHTML = letterizeSpan(gridNameHoverSpan)));

const gridSentences = document.querySelectorAll(".card_grid_inner p");
gridSentences.forEach((gridSentence) => (gridSentence.innerHTML = letterizeSpan(gridSentence)));

// Functions Animations :
function letterizeSpan(element) {
    return element.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
}

// LocoScroll :
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1.2, // Vitesse du scroll
});

// Introduction :
// introductionAnim();

function introductionAnim() {
    anime
        .timeline({ loop: false })
        .add(
            {
                targets: ".title",
                duration: 2000,
                height: ["100%", "40%"],
                easing: "easeOutExpo",
            },
            2800
        )
        .add(
            {
                targets: "header .title h1 .letter",
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
                targets: "header .title p .letter",
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
                targets: ".left_side_inner",
                duration: 1800,
                translateX: ["100%", 0],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            3000
        )
        .add(
            {
                targets: ".right_side_inner",
                duration: 1800,
                translateX: ["-100%", 0],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            3000
        )
        .add(
            {
                targets: ".paragraphe_symbol",
                duration: 1800,
                opacity: [0, 1],
                rotate: [0, "90deg"],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            3100
        )
        .add(
            {
                targets: ".separator .line",
                duration: 1800,
                opacity: [0, 1],
                scaleX: [0, 1],
                easing: "cubicBezier(0.5, 0, 0, 1)",
            },
            3100
        );
}
