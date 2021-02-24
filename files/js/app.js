// Functions Animations :
function letterizeSpan(element) {
    return element.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
}

// Custom Letterize :
const potterEnigmaTitle = document.querySelector("header .title h1");
potterEnigmaTitle.innerHTML = letterizeSpan(potterEnigmaTitle);

const potterEnigmaDesc = document.querySelector("header .title p");
potterEnigmaDesc.innerHTML = letterizeSpan(potterEnigmaDesc);

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
        )
        .add(
            {
                targets: ".aside_link",
                duration: 2000,
                translateY: ["-100%", 0],
                easing: "easeOutExpo",
            },
            3800
        );
}
